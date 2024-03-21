'use client';

import { useState } from 'react';
import { FormStatus } from '@app/components/FormStatus';
import { validateEmail } from '@app/utils/validateEmail';
import { useSendEmail } from '@app/hooks/useSendEmail';
import {
  faInstagram,
  faFacebook,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PrismicNextLink } from '@prismicio/next';

import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ icon, text, disabled }) => (
  <div className=" m-auto transition-transform hover:scale-110">
    <FontAwesomeIcon
      className={`w-[65px] h-[65px] m-auto block ${
        disabled ? 'opacity-20' : ''
      }`}
      size="sm"
      color="text-site-blue"
      icon={icon}
    />

    <p className="text-base text-site-blue text-center mt-4">{text}</p>
  </div>
);

const IconLink = ({ link, ...props }) =>
  link.url ? (
    <PrismicNextLink field={link}>
      <Icon {...props} />
    </PrismicNextLink>
  ) : (
    <Icon {...props} />
  );

export const ContactInfo = ({
  title,
  intro,
  name,
  address_1,
  address_2,
  address_3,
  address_4,
  address_link,
  phone,
  email,
  follow_title,
  follow_text,
  facebook_link,
  instagram_link,
}) => {
  const [userEmail, setUserEmail] = useState('');
  const { sendEmail, setError, success, error, loading } = useSendEmail({
    email,
    subject: 'Add email to mailing list',
    message: userEmail,
    reset: () => setUserEmail(''),
  });

  const validate = () => {
    if (validateEmail(userEmail)) {
      sendEmail();
    } else {
      setError(signup_error_message);
    }
  };

  return (
    <div className="mx-auto max-w-screen-2xl lg:px-8 lg:mb-20 ">
      <div className="lg:rounded-xl shadow-xl overflow-hidden  flex flex-col lg:flex-row">
        <div className="basis-2/3 bg-blue-site text-white p-14 ">
          <h2 className=" ">{title}</h2>
          <div className="flex flex-col sm:flex-row mb-6 ">
            <div className="basis-1/2 border-b border-white pb-4 sm:mr-6 md:mr-14">
              <p className="mt-10">{intro}</p>
            </div>
            <div className="basis-1/2 border-b border-white pb-4">
              <a target="blank" href={address_link} className="mt-10">
                <p>
                  {name}
                  <br />
                  {address_1}
                  <br />
                  {address_2}
                  <br />
                  {address_3}
                  <br />
                  {address_4}
                </p>
              </a>
              <p className="mt-10">
                <a href={`tel:${phone}`} className="text-md mt-10 font-bold">
                  {phone}
                </a>
              </p>
            </div>
          </div>
          <a href={`mailto:${email}`} className="text-md mt-10 font-bold">
            {email}
          </a>
        </div>
        <div className="basis-1/3 bg-gray-100 p-14 text-color-blue-site">
          <h2 className="mb-6 text-center">{follow_title}</h2>
          <p className="mb-12 text-center text-lg">{follow_text}</p>
          <div className="mb-6">
            <div className={`grid grid-cols-2 gap-8`}>
              <IconLink
                icon={faFacebook}
                link={facebook_link}
                text="Facebook"
              />
              <IconLink
                icon={faInstagram}
                link={instagram_link}
                text="Instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

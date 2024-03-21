'use client';
import { useState } from 'react';
import { Input, Typography, Button } from '@material-tailwind/react';
import { FormStatus } from '@app/components/FormStatus';
import { validateEmail } from '@app/utils/validateEmail';
import { useSendEmail } from '@app/hooks/useSendEmail';

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
  signup_title,
  signup_intro,
  signup_button,
  signup_success_message,
  signup_error_message,
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
      <div className="rounded-xl shadow-xl overflow-hidden  flex flex-col lg:flex-row">
        <div className="basis-2/3 bg-blue-site text-white p-14 ">
          <h2 className="text-2xl sm:text-3xl font-bold ">{title}</h2>
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
          <h2 className="mb-6 text-2xl sm:text-3xl font-bold">
            {signup_title}
          </h2>
          <p className="mb-6">{signup_intro}</p>
          <div className="mb-6">
            <Input
              color="blue-gray"
              label="Your email"
              size="lg"
              placeholder="name@mail.com"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <FormStatus
            loading={loading && 'Loading...'}
            error={error}
            success={success && signup_success_message}
          />
          <Button
            onClick={validate}
            className="mt-6 bg-blue-site"
            fullWidth
            color="blue"
          >
            {signup_button}
          </Button>
        </div>
      </div>
    </div>
  );
};

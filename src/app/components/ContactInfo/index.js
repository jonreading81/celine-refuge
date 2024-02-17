'use client';
import { useState } from 'react';
import { Input, Typography, Button } from '@material-tailwind/react';

const data = {
  title: 'Contact us',
  intro:
    'Please reach out to us with any questions or concerns. We’re happy to hear from you.',
  name: 'Refuge gîte du suffet',
  address_1: "Chem. du Val d'Ambi'",
  address_2: '73500',
  address_3: 'Bamans',
  address_4: 'France',
  phone: 'Phone: (+33) 6 21 63 56 80',
  email: 'celine.vigouroux86@hotmail.fr',
  signup_title: 'Be the first to hear',
  signup_intro: 'Sign up to our newsletter to stay informed.',
  signup_cta: 'Sign up now',
  signup_success_message: 'Yuor details have been added to our mailing list.',
  signup_error_message: 'Please enter a valid email address.',
};

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const ContactInfo = () => {
  const {
    title,
    intro,
    name,
    address_1,
    address_2,
    address_3,
    address_4,
    phone,
    email,
    signup_title,
    signup_intro,
    signup_cta,
    signup_success_message,
    signup_error_message,
  } = data;

  const [userEmail, setUserEmail] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const signup = () => {
    if (validateEmail(userEmail)) {
      setError(false);
      setSuccess(true);
      setUserEmail('');
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="basis-2/3 bg-blue-site text-white p-14 lg:pl-44">
        <h2 className="text-2xl sm:text-3xl font-bold font-site">
          {data.title}
        </h2>
        <div className="flex flex-col sm:flex-row text-sm font-helvetica mb-6">
          <div className="basis-1/3 border-b border-white pb-4">
            <p className="mt-10">{data.intro}</p>
          </div>
          <div className="basis-1/3"></div>
          <div className="basis-1/2 border-b border-white pb-4">
            <p className="mt-10">
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
            <p className="mt-10">{phone}</p>
          </div>
        </div>
        <a href={`mailto:${email}`} className="text-lg mt-10">
          {email}
        </a>
      </div>
      <div className="basis-1/3 bg-gray-100 p-14 text-color-blue-site">
        <h2 className="mb-6 text-2xl sm:text-3xl font-bold font-site">
          {data.signup_title}
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

        {error && (
          <div
            class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span class="font-medium">{signup_error_message}</span>
          </div>
        )}

        {success && (
          <div
            class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <span class="font-medium">{signup_success_message}</span>
          </div>
        )}

        <Button
          onClick={signup}
          className="mt-6 bg-blue-site"
          fullWidth
          color="blue"
        >
          {signup_cta}
        </Button>
      </div>
    </div>
  );
};

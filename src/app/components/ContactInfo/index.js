'use client';
import { useState } from 'react';
import { Input, Typography, Button } from '@material-tailwind/react';

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const apiEndpoint = '/api/email';

export const ContactInfo = ({
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
  signup_button,
  signup_success_message,
  signup_error_message,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const sendEmail = () => {
    setIsLoading(true);
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify({
        email,
        subject: 'Add user to mailing list',
        message: userEmail,
      }),
    })
      .then((res) => res.json())
      .then(({ error }) => {
        if (error) {
          setError('Server Error');
          return;
        }
        setError('');
        setSuccess(true);
        setUserEmail('');
      })
      .catch((err) => {
        setError('Server Error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const validate = () => {
    if (validateEmail(userEmail)) {
      sendEmail();
    } else {
      setError(signup_error_message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="basis-2/3 bg-blue-site text-white p-14 lg:pl-28">
        <h2 className="text-2xl sm:text-3xl font-bold font-site">{title}</h2>
        <div className="flex flex-col sm:flex-row text-sm font-helvetica mb-6 ">
          <div className="basis-1/2 border-b border-white pb-4 sm:mr-6 md:mr-14">
            <p className="mt-10">{intro}</p>
          </div>

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
        <a href={`mailto:${email}`} className="text-md mt-10 font-bold">
          {email}
        </a>
      </div>
      <div className="basis-1/3 bg-gray-100 p-14 text-color-blue-site">
        <h2 className="mb-6 text-2xl sm:text-3xl font-bold font-site">
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
        {isLoading && (
          <div
            class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <span class="font-medium">Verifying details</span>
          </div>
        )}
        {error && (
          <div
            class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span class="font-medium">{error}</span>
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
          onClick={validate}
          className="mt-6 bg-blue-site"
          fullWidth
          color="blue"
        >
          {signup_button}
        </Button>
      </div>
    </div>
  );
};

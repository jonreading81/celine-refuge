'use client';
import { useState } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { Input, Typography, Textarea } from '@material-tailwind/react';
import { FormStatus } from '@app/components/FormStatus';
import { validateEmail } from '@app/utils/validateEmail';
import { useSendEmail } from '@app/hooks/useSendEmail';

import { Slice } from '@app/components/Slice';

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm = ({
  slice: {
    primary: {
      email_label,
      name_label,
      phone_label,
      message_label,
      email,
      success_message,
      button_text,
      validation_error,
    },
  },
}) => {
  const [userEmail, setUserEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const reset = () => {
    setUserEmail('');
    setPhone('');
    setName('');
    setMessage('');
  };

  const { sendEmail, setError, success, error, loading } = useSendEmail();

  const validateForm = (evt) => {
    evt.preventDefault();
    if (validateEmail(userEmail) && name && message) {
      sendEmail({
        email,
        subject: 'Contact from the website',
        message: `Name: ${name}\nEmail: ${userEmail}\nPhone: ${phone}\n\n${message}`,
        reset,
      });
    } else {
      setError(validation_error);
    }
  };

  return (
    <Slice>
      <div className="max-w-screen-md mx-auto">
        <form className=" rounded-xl shadow-md border-2 border-blue-gray-100 p-8">
          <div className="mb-6">
            <Input
              color="blue-gray"
              label={name_label}
              size="lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Input
              color="blue-gray"
              label={email_label}
              size="lg"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Input
              color="blue-gray"
              label={phone_label}
              size="lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <Textarea
              color="blue-gray"
              label={message_label}
              size="lg"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <FormStatus
            loading={loading && 'Loading...'}
            error={error}
            success={success && success_message}
          />

          <button
            className="mt-6 btn-primary w-full"
            fullWidth
            color="blue"
            onClick={validateForm}
          >
            {button_text}
          </button>
        </form>
      </div>
    </Slice>
  );
};

export default ContactForm;

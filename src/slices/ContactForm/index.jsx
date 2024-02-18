'use client';
import { useState } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { Input, Typography, Button, Textarea } from '@material-tailwind/react';
import { FormStatus } from '@app/components/FormStatus';
import { validateEmail } from '@app/utils/validateEmail';
import { useSendEmail } from '@app/hooks/useSendEmail';

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm = ({
  slice: {
    primary: { email, success_message, button_text, validation_error },
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

  const { sendEmail, setError, success, error, loading } = useSendEmail({
    email,
    subject: 'Contact messagse from website',
    message: `Name: ${name}\nEmail: ${userEmail}\nPhone: ${phone}\n\n${message}`,
    reset,
  });

  const validateForm = () => {
    if (validateEmail(userEmail) && name && message) {
      sendEmail();
    } else {
      setError(validation_error);
      return;
    }
  };

  return (
    <div className="max-w-4xl mx-auto mb-12">
      <form className="border-2 border-blue-gray-100 p-8">
        <div className="mb-6">
          <Input
            color="blue-gray"
            label="Name"
            size="lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <Input
            color="blue-gray"
            label="Email"
            size="lg"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <Input
            color="blue-gray"
            label="Phone"
            size="lg"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <Textarea
            color="blue-gray"
            label="Message"
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

        <Button
          className="mt-6 bg-blue-site"
          fullWidth
          color="blue"
          onClick={validateForm}
        >
          {button_text}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

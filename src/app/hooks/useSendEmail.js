import { useState } from 'react';

export const useSendEmail = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = ({ email, subject, message, reset }) => {
    setLoading(true);
    setError(false);
    setSuccess(false);

    fetch(process.env.sendEmailAPIEndpoint, {
      method: 'POST',
      body: JSON.stringify({
        email,
        subject,
        message,
      }),
    })
      .then((res) => res.json())
      .then(({ error }) => {
        console.log('error: ', error);
        if (error) {
          setError('Server Error');
          return;
        }
        setError('');
        setSuccess(true);
        reset();
      })
      .catch((err) => {
        console.log('error: ', err);
        setError('Server Error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    sendEmail,
    setError,
    success,
    error,
    loading,
  };
};

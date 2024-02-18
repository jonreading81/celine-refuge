import { useState } from 'react';

export const useSendEmail = ({ email, subject, message, reset }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = () => {
    setLoading(true);
    setError(false);
    setSuccess(false);

    fetch(process.env.sendEmailAPIEndpoint, {
      method: 'POST',
      body: JSON.stringify({
        email: 'jon.reading.email@gmail.com',
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

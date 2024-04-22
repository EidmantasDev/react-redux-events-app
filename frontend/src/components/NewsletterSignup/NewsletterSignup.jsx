import { useFetcher } from 'react-router-dom';
import { newsletter } from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
  const { Form, data, state } = useFetcher();

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <Form method='post' action='/newsletter' className={newsletter}>
      <input
        type='email'
        placeholder='Sign up for newsletter...'
        aria-label='Sign up for newsletter'
      />
      <button>Sign up</button>
    </Form>
  );
}

export default NewsletterSignup;

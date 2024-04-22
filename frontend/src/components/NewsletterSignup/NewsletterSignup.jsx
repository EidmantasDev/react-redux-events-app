import { newsletter } from './NewsletterSignup.module.css';

function NewsletterSignup() {
  return (
    <form method='post' className={newsletter}>
      <input
        type='email'
        placeholder='Sign up for newsletter...'
        aria-label='Sign up for newsletter'
      />
      <button>Sign up</button>
    </form>
  );
}

export default NewsletterSignup;

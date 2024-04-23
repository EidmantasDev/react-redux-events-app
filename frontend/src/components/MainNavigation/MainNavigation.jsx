import { NavLink, useSearchParams } from 'react-router-dom';

import { header, list, active } from './MainNavigation.module.css';
import NewsletterSignup from '../NewsletterSignup/NewsletterSignup';

function MainNavigation() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';

  return (
    <header className={header}>
      <nav>
        <ul className={list}>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? active : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/events'
              className={({ isActive }) => (isActive ? active : undefined)}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/newsletter'
              className={({ isActive }) => (isActive ? active : undefined)}
            >
              Newsletter
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/auth?mode=login'
              className={({ isActive }) => (isActive ? active : undefined)}
            >
              {isLogin ? 'Log In' : 'Sign up'}
            </NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;

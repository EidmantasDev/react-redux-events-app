import { NavLink } from 'react-router-dom';
import { header, list, active } from './MainNavigation.module.css';

function MainNavigation() {
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
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

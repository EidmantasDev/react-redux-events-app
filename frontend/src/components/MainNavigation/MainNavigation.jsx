import { NavLink } from 'react-router-dom';
import { header, list } from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={header}>
      <nav>
        <ul className={list}>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <Link to='/events'>Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

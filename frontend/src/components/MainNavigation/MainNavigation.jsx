import { header, list } from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={header}>
      <nav>
        <ul className={list}>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Events</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

import { NavLink, useRouteLoaderData } from 'react-router-dom';
import { header, list, active } from './EventsNavigation.module.css';

function EventsNavigation() {
  const token = useRouteLoaderData('root');
  return (
    <header className={header}>
      <nav>
        <ul className={list}>
          <li>
            <NavLink
              to='/events'
              className={({ isActive }) => (isActive ? active : undefined)}
              end
            >
              All Events
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink
                to='/events/new'
                className={({ isActive }) => (isActive ? active : undefined)}
              >
                New Event
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;

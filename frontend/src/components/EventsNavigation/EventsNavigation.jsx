import { header, list } from './EventsNavigation.module.css';

function EventsNavigation() {
  return (
    <header className={header}>
      <nav>
        <ul className={list}>
          <li>
            <a href='/events'>All Events</a>
          </li>
          <li>
            <a href='/events/new'>New Event</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;

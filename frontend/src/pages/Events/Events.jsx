import { useLoaderData, json, defer, Await } from 'react-router-dom';
import EventsList from '../../components/EventsList/EventsList';
import { Suspense } from 'react';

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return json({ message: 'Could not fetch events.' }, { status: 500 });
  } else {
    const { events } = await response.json();
    return events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}

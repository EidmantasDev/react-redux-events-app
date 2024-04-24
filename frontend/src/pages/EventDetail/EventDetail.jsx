import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';
import EventItem from '../../components/EventItem/EventItem';
import EventsList from '../../components/EventsList/EventsList';
import { Suspense } from 'react';
import { getAuthToken } from '../../util/auth';

function EventDetailPage() {
  const { event, events } = useRouteLoaderData('event-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      { status: 500 }
    );
  } else {
    const { event } = await response.json();
    return event;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return json({ message: 'Could not fetch events.' }, { status: 500 });
  } else {
    const { events } = await response.json();
    return events;
  }
}

export async function loader({ params }) {
  const { id } = params;

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const id = params.id;
  const token = getAuthToken();

  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
    headers: {
      /* prettier-ignore */
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw json({ message: 'Could not delete event.' }, { status: 500 });
  } else {
    return redirect('/events');
  }
}

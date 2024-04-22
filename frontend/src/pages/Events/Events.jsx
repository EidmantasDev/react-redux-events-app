import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../../components/EventsList/EventsList';

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return json({ message: 'Could not fetch events.' }, { status: 500 });
  } else {
    return response;
  }
}

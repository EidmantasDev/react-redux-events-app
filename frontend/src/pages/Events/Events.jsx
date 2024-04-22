import { useLoaderData } from 'react-router-dom';
import EventsList from '../../components/EventsList/EventsList';

function EventsPage() {
  const events = useLoaderData();
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

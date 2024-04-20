import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import EventsPage from './pages/Events/Events';
import EventDetailPage from './pages/EventDetail/EventDetail';
import NewEventPage from './pages/NewEvent/NewEvent';
import EditEventPage from './pages/EditEvent/EditEvent';
import RootLayout from './pages/Root/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'events/:id', element: <EventDetailPage /> },
      { path: 'events/new', element: <NewEventPage /> },
      { path: 'events/:id/edit', element: <EditEventPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

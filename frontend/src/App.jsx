import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events/Events';
import EventDetailPage, {
  loader as eventDetailLoader,
} from './pages/EventDetail/EventDetail';
import NewEventPage from './pages/NewEvent/NewEvent';
import EditEventPage from './pages/EditEvent/EditEvent';
import RootLayout from './pages/Root/Root';
import EventsRootLayout from './pages/EventsRoot/EventsRoot';
import ErrorPage from './pages/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':id',
            element: <EventDetailPage />,
            loader: eventDetailLoader,
          },
          { path: 'new', element: <NewEventPage /> },
          { path: ':id/edit', element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events/Events';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail/EventDetail';
import NewEventPage from './pages/NewEvent/NewEvent';
import EditEventPage from './pages/EditEvent/EditEvent';
import RootLayout from './pages/Root/Root';
import EventsRootLayout from './pages/EventsRoot/EventsRoot';
import ErrorPage from './pages/Error/Error';
import { action as manipulateEventAction } from './components/EventForm/EventForm';
import NewsletterPage, {
  action as newsletterAction,
} from './pages/Newsletter/Newsletter';
import AuthenticationPage, {
  action as authAction,
} from './pages/Authentication/Authentication';

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
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },

          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

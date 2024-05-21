import { createBrowserRouter } from 'react-router-dom';
import CommitDetailsPage from './pages/CommitDetailsPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'details:sha',
        element: <CommitDetailsPage />,
      },
    ],
  },
]);

export default router;

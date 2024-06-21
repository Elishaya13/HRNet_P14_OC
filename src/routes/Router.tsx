import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import Employees from '../pages/Employees';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/employees', element: <Employees /> },
    ],
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

export default router;

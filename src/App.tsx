import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';

import FluentForm from './components/FluentForm';
import MainLayout from './Layouts/MainLayout';
import ReduxForm from './pages/ReduxForm';
const About = lazy(() => import('./pages/About'));
const IconExample = lazy(() => import('./pages/IconExample'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Layout wraps nested routes
    children: [
      { index: true, element: <Home /> }, // default route
      { path: 'about', element: <About /> },
      { path: 'icons', element: <IconExample /> },
      { path: 'form', element: <FluentForm /> },
      { path: 'reduxform', element: <ReduxForm /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}

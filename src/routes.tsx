import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/login';
import ErrorPage from './pages/error';
import SignupPage from './pages/signup';
import HomePage from './pages/home';
import ProfilePage from './pages/profile';
import MyPhotosPage from './pages/myPhotos';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'my-photos',
    element: <MyPhotosPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;

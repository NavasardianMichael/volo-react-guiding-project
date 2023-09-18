import { WithHeader } from 'layouts/withHeader/main';
import { lazy } from 'react';
import { Navigate, createBrowserRouter } from "react-router-dom";

const IntroPage = lazy(() => import('pages/intro/main'))
const UsersPage = lazy(() => import('pages/users/main'))
const ProfilePage = lazy(() => import('pages/profile/main'))

export const router = createBrowserRouter([
    {
      path: '/',
      element: <WithHeader />,
      children: [
        {
          index: true,
          element: <IntroPage />
        },
        {
          path: 'users',
          element: <UsersPage /> 
        },
        {
          path: 'users/:userId',
          element: <ProfilePage />,
        },
        {
          path: '*',
          element: <Navigate to='/' /> 
        },
      ],
    },
]);
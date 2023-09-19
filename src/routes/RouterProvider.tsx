import { FC, lazy } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Error } from 'components/error/main';
import { OutletWithHeader } from 'layouts/outletWithHeader/main';
import { WithSuspense } from './WithSuspense';
import { ROUTES } from './routes';

const IntroPage = WithSuspense(lazy(() => import('pages/intro/main')))
const UsersPage = WithSuspense(lazy(() => import('pages/users/main')))
const ProfilePage = WithSuspense(lazy(() => import('pages/profile/main')))

export const Router: FC = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.home,
      element: <OutletWithHeader />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: IntroPage
        },
        {
          path: ROUTES.users,
          element: UsersPage
        },
        {
          path: ROUTES.userProfile,
          element: ProfilePage,
        },
        {
          path: '*',
          element: <Navigate to='/' />
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
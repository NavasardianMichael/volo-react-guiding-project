import { FC, lazy } from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { OutletWithHeader } from 'layouts/outletWithHeader'
import { Error } from 'components/error'
import { WithSuspense } from './WithSuspense'
import { ROUTES } from './routes'

const IntroPage = WithSuspense(lazy(() => import('pages/intro')))
const UsersPage = WithSuspense(lazy(() => import('pages/users')))
const ProfilePage = WithSuspense(lazy(() => import('pages/profile')))

export const Router: FC = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.home,
      element: <OutletWithHeader />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: IntroPage,
        },
        {
          path: ROUTES.users,
          element: UsersPage,
        },
        {
          path: ROUTES.userProfile,
          element: ProfilePage,
        },
        {
          path: '*',
          element: <Navigate to="/" />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

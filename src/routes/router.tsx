import { EditableUser } from 'components/users/editable/main';
import { UsersList } from "components/users/list/main";
import { Header } from "layouts/header/main";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            {
              path: 'users',
              element: <UsersList />,
            },
            {
              path: 'users/:userId',
              element: <EditableUser />,
            },
            {
              path: '*',
              element: <Navigate to='/' /> 
            },
        ],
    },
]);
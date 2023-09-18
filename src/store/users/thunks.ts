import { getUsers, putUserOptions } from 'services/users/api';
import { UsersActionPayloads } from './types';
import { setUserOptions, setUsers } from './slice';
import { createAppAsyncThunk } from 'utils/thunks';

export const getUsersAsync = createAppAsyncThunk(
    'users/getUsers',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const data = await getUsers();
            dispatch(setUsers(data));

            return data;
        } catch (e) {
            const error = e as globalThis.Error;
            rejectWithValue(error);
        }
    },
);

export const setUserOptionsAsync = createAppAsyncThunk(
    'users/setUserOptions',
    async (
        params: UsersActionPayloads['setUserOptions'],
        { dispatch, rejectWithValue },
    ) => {
        try {
            const data = await putUserOptions(params);
            dispatch(setUserOptions(data));

            return data;
        } catch (e) {
            const error = e as globalThis.Error;
            rejectWithValue(error);
        }
    },
);

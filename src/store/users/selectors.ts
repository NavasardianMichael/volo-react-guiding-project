import { RootState } from 'store/main';
import { User } from './types';

export const selectUsers = (state: RootState) => state.users

export const selectUserById = (userId: User['id']) => {
    return (state: RootState) => state.users.byId[userId]
}
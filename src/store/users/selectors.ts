import { RootState } from 'store'

export const selectUsers = (state: RootState) => state.users
export const selectVisitedUserId = (state: RootState) => state.users.visitedUserId
export const selectVisitedUser = (state: RootState) => state.users.byId[state.users.visitedUserId]

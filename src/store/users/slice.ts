import { Action, AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getUsersAsync, setUserOptionsAsync } from './thunks'
import { UsersActionPayloads, UsersSlice } from './types'

interface RejectedAction extends Action {
  error: Error
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('rejected')
}

const initialState: UsersSlice = {
  byId: {},
  allIds: [],
  visitedUserId: '',
  isPending: false,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (
      state,
      { payload }: PayloadAction<UsersActionPayloads['setUsers']>
    ) => {
      return {
        ...state,
        ...payload,
      }
    },
    setVisitedUserId: (
      state,
      { payload }: PayloadAction<UsersActionPayloads['setVisitedUserId']>
    ) => {
      state.visitedUserId = payload
    },
    setUserOptions: (
      state,
      { payload }: PayloadAction<UsersActionPayloads['setUserOptions']>
    ) => {
      state.byId[payload.id] = {
        ...state.byId[payload.id],
        ...payload,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state, action) => {
        state.isPending = true
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.isPending = false
      })
      .addCase(setUserOptionsAsync.fulfilled, (state, action) => {})
      .addMatcher(isRejectedAction, (state, action) => {
        // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
      })
      .addDefaultCase((state, action) => {})
  },
})

export const { setUsers, setVisitedUserId, setUserOptions } = usersSlice.actions

export default usersSlice.reducer

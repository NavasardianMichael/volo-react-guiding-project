import { getUser, getUsers, putUserOptions } from 'services/users/api'
import { createAppAsyncThunk } from 'utils/thunks'
import { setUserOptions, setUsers } from './slice'
import { User, UsersActionPayloads } from './types'

export const getUsersAsync = createAppAsyncThunk('users/getUsers', async (_, { dispatch, rejectWithValue }) => {
  try {
    const data = await getUsers()
    dispatch(setUsers(data))

    return data
  } catch (e) {
    const error = e as globalThis.Error
    rejectWithValue(error)
  }
})

export const getUserAsync = createAppAsyncThunk(
  'users/getUsers',
  async (params: Pick<User, 'id'>, { dispatch, rejectWithValue }) => {
    try {
      const data = await getUser(params)
      dispatch(setUserOptions(data))

      return data
    } catch (e) {
      const error = e as globalThis.Error
      rejectWithValue(error)
    }
  }
)

export const setUserOptionsAsync = createAppAsyncThunk(
  'users/setUserOptions',
  async (params: UsersActionPayloads['setUserOptions'], { dispatch, rejectWithValue }) => {
    try {
      const data = await putUserOptions(params)
      dispatch(setUserOptions(data))

      return data
    } catch (e) {
      const error = e as globalThis.Error
      rejectWithValue(error)
    }
  }
)

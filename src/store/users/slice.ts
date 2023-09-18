import { Action, AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UsersActionPayloads, UsersSlice } from "./types"
import { getUsersAsync, setUserOptionsAsync } from './thunks'

interface RejectedAction extends Action {
  error: Error
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('rejected')
}

const initialState: UsersSlice = {
    byId: {},
    allIds: []
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (_, { payload }: PayloadAction<UsersActionPayloads['setUsers']>) => {
            console.log({payload});
            
            return payload
        },
        setUserOptions: (state, { payload }: PayloadAction<UsersActionPayloads['setUserOptions']>) => {
            state.byId[payload.id] = {
                ...state.byId[payload.id],
                ...payload
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                getUsersAsync.fulfilled, 
                (state, action) => {
                    
                }
            )
            .addCase(
                setUserOptionsAsync.fulfilled, 
                (state, action) => {
                    
                }
            )
            .addMatcher(
                isRejectedAction,
                (state, action) => {
                    // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
                }
            )            
            .addDefaultCase(
                (state, action) => {

                }
            )
    },
})


export const { setUsers, setUserOptions } = usersSlice.actions

export default usersSlice.reducer
import { FC, PropsWithChildren } from 'react'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { usersSlice } from './users/slice'
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: combineReducers({
    users: usersSlice.reducer
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
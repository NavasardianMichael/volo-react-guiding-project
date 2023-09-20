import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from 'store/main'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  rejectValue: Error
  extra: any
}>()

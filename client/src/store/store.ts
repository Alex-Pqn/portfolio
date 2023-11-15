import { configureStore } from '@reduxjs/toolkit'
import { ProjectSlice } from './features/projectSlice'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    project: ProjectSlice.reducer,
  },
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector

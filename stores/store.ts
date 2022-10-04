import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../slices/postSlice'
import pageReducer from '../slices/pageSlice'

export const store = configureStore({
  reducer: {
    postSlice: postReducer,
    pageSlice: pageReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
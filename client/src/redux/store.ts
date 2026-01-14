import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../redux/slices/auth.slice";
import gigReducer from "./slices/gig.slice";

export const store = configureStore({
  reducer: {
    "auth" : authReducer,
    "gig" : gigReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
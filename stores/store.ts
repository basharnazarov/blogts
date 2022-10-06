import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../slices/postSlice";
import pageReducer from "../slices/pageSlice";

// const localStorageMiddleware = ({ getState }) => {
//   return (next) => (action) => {
//     const result = next(action);
//     localStorage.setItem("applicationState", JSON.stringify(getState()));
//     return result;
//   };
// };

// const reHydrateStore = () => {
//   if (typeof localStorage !== "undefined") {
//     if (localStorage.getItem("applicationState") !== null) {
//       return JSON.parse(localStorage.getItem("applicationState")); // re-hydrate the store
//     }
//   }
// };

export const store = configureStore({
  reducer: {
    postSlice: postReducer,
    pageSlice: pageReducer,
  },
  // preloadedState: reHydrateStore(),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(localStorageMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { postsState, Irows } from "../interfaces/all.interface";
import { rows } from "../stores/data";
import { fetchLocalData } from "../helpers/handleLocalStorage";

let localData: any = fetchLocalData();

const initialState: postsState = {
  posts: rows,
  publishedTotal: 0,
  draftsTotal: 0,
  filter: {
    published: true,
    draft: true,
  },
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    // counter: (state) => {
    //   let counter1 = state.posts.filter(
    //     (post: Irows) => post.statusPublished === true
    //   );
    //   let counter2 = state.posts.filter(
    //     (post: Irows) => post.statusPublished === false
    //   );
    //   state.publishedTotal = counter1.length;
    //   state.draftsTotal = counter2.length;
    // },
    addPost: (state, action: PayloadAction<Irows>) => {
      state.posts = [...state.posts, action.payload];
    },
    handleFilter: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "published":
          state.filter = { ...state.filter, published: true, draft: false };
          break;
        case "draft":
          state.filter = { ...state.filter, published: false, draft: true };
          break;
        case "all":
          state.filter = { ...state.filter, published: true, draft: true };
          break;
      }
    },
    fetchData: (state) => {
      state.posts = fetchLocalData();
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost, handleFilter, fetchData } = postSlice.actions;

export default postSlice.reducer;

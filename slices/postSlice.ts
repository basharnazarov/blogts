import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { postsState, Irows } from "../interfaces/all.interface";
import { rows } from "../stores/data";


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
    counter: (state) => {
      let counter1 = state.posts.filter(
        (post: Irows) => post.statusPublished === true
      );
      let counter2 = state.posts.filter(
        (post: Irows) => post.statusPublished === false
      );
      state.publishedTotal = counter1.length;
      state.draftsTotal = counter2.length;
    },
    addPost: (state, action: PayloadAction<Irows>) => {
      state.posts.push(action.payload);
    },
    handleFilter: (state, action: PayloadAction<string>) => {
      if(action.payload === 'published'){
        state.filter.published = true
        state.filter.draft = false
      } else if(action.payload === 'draft') {
         state.filter.draft = true
         state.filter.published = false 
      } else {
        state.filter.published = true
        state.filter.draft = true
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const { counter, addPost, handleFilter } = postSlice.actions;

export default postSlice.reducer;

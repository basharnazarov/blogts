import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { pageState } from "../interfaces/all.interface";
import postSlice from "./postSlice";

const initialState: pageState = {
    postPage: true
}

export const pageSlice = createSlice({
    name: 'pageSlice',
    initialState,
    reducers: {
        handlePage: (state, action: PayloadAction<boolean>) => {
            state.postPage = action.payload
        }
    }
})


export const {handlePage} = pageSlice.actions
export default pageSlice.reducer
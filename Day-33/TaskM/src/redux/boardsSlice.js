import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data";

const initialState = data.boards
export const boardsSlice = createSlice({
    name: "boards",
    initialState,
    reducers :{

    }
})
export default boardsSlice.reducer;

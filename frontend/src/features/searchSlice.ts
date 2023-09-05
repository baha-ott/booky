import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";


const initialState: { search: string } = { search: "" }
// initial state for search

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        updateSearch(state: RootState, action) {
            state.search = action.payload
            // to update the search keyword globaly, so i can make a request based on it 
        }
    }
})

export const selectSearch = (state: RootState) => state.search.search


export const { updateSearch } = searchSlice.actions;

export default searchSlice.reducer;
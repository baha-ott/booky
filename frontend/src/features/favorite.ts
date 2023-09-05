import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";



// initial state for search

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: [],
    reducers: {
        addFav(state: RootState, action) {
            state.push(action.payload)
            // to update the search keyword globaly, so i can make a request based on it 
            // immer js 
            console.log(state)
        }
    }
})

export const selectFavorite = (state: RootState) => state.favorite
// selector

export const { addFav } = favoriteSlice.actions;

export default favoriteSlice.reducer;
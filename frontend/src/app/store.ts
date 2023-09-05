import { configureStore } from "@reduxjs/toolkit";
import searchSliceReducer from "../features/searchSlice";
import { apiSlice } from "../api/apiSlice";
import favoriteSliceReducer from "../features/favorite";


export const store: any = configureStore({
    reducer: {
        search: searchSliceReducer,
        favorite: favoriteSliceReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,

})
// configure the store

export type RootState = ReturnType<typeof store.getState>
// to get the type of the state

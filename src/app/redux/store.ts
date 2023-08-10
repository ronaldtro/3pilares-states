import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/user";


export const configStore = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});
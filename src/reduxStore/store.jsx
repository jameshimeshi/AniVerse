import { configureStore } from "@reduxjs/toolkit";
import starReducer from "./starSlice"

export const store=configureStore({
    reducer:{
        star:starReducer,
    }
})
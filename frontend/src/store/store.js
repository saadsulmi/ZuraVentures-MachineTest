import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authReducer";
import projectReducer from "../features/projectReducer";

export const store=configureStore({
    reducer:{
        auth:authReducer,
        project:projectReducer
    }
})

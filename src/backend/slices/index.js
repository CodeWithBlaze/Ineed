import { configureStore } from "@reduxjs/toolkit";
import SignUpSlice from "./SignUpSlice";
//---------------------Middlewares-------------------------
import SignUpMiddleware from "../middleware/SignUpMiddleware";


const store = configureStore({
    reducer:{
        signup:SignUpSlice.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(SignUpMiddleware),
})
export default store;
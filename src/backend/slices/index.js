import { configureStore } from "@reduxjs/toolkit";
import SignUpSlice from "./SignUpSlice";
import LogOutSlice from "./LogOutSlice";
import SignInSlice from "./SignInSlice";
import ProfileSlice from "./ProfileSlice";

//---------------------Middlewares-------------------------
import SignUpMiddleware from "../middleware/SignUpMiddleware";
import LogOutMiddleware from "../middleware/LogOutMiddleware";
import SignInMiddleware from "../middleware/SignInMiddleware";
import ProfileMiddleware from '../middleware/ProfileMiddleware';
const store = configureStore({
    reducer:{
        signup:SignUpSlice.reducer,
        logout:LogOutSlice.reducer,
        signin:SignInSlice.reducer,
        profile:ProfileSlice.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware()
                                        .concat(SignUpMiddleware)
                                        .concat(LogOutMiddleware)
                                        .concat(SignInMiddleware)
                                        .concat(ProfileMiddleware),
})
export default store;
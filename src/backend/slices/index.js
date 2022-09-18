import { configureStore } from "@reduxjs/toolkit";
import SignUpSlice from "./SignUpSlice";
import LogOutSlice from "./LogOutSlice";
import SignInSlice from "./SignInSlice";

//---------------------Middlewares-------------------------
import SignUpMiddleware from "../middleware/SignUpMiddleware";
import LogOutMiddleware from "../middleware/LogOutMiddleware";
import SignInMiddleware from "../middleware/SignInMiddleware";

const store = configureStore({
    reducer:{
        signup:SignUpSlice.reducer,
        logout:LogOutSlice.reducer,
        signin:SignInSlice.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware()
                                        .concat(SignUpMiddleware)
                                        .concat(LogOutMiddleware)
                                        .concat(SignInMiddleware),
})
export default store;
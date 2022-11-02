import { configureStore } from "@reduxjs/toolkit";
import SignUpSlice from "./SignUpSlice";
import LogOutSlice from "./LogOutSlice";
import SignInSlice from "./SignInSlice";
import ProfileSlice from "./ProfileSlice";
import BookingSlice from "./BookingSlice";

//---------------------Middlewares-------------------------
import SignUpMiddleware from "../middleware/SignUpMiddleware";
import LogOutMiddleware from "../middleware/LogOutMiddleware";
import SignInMiddleware from "../middleware/SignInMiddleware";
import ProfileMiddleware from '../middleware/ProfileMiddleware';
import notificationSlice from "./NotificationSlice";
import NotificationMiddleware from "../middleware/NotificationMiddleware";
import BookingMiddleware from "../middleware/BookingMiddleware";

const store = configureStore({
    reducer:{
        signup:SignUpSlice.reducer,
        logout:LogOutSlice.reducer,
        signin:SignInSlice.reducer,
        profile:ProfileSlice.reducer,
        notification:notificationSlice.reducer,
        booking:BookingSlice.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware()
                                        .concat(SignUpMiddleware)
                                        .concat(LogOutMiddleware)
                                        .concat(SignInMiddleware)
                                        .concat(ProfileMiddleware)
                                        .concat(BookingMiddleware)
                                        .concat(NotificationMiddleware),
})
export default store;
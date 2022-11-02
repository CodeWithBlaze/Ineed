import { createSlice } from "@reduxjs/toolkit";
import { showErrorToast } from "../../utils/toast/Toast";

const BookingSlice = createSlice({
    name:'BOOKING',
    initialState:{bookings:[],isLoading:false},
    reducers:{
        getBookingsStarted:function(state,action){
            state.isLoading = true;
        },
        getBookingsSuccess:function(state,action){
            state.isLoading =false;
            state.bookings = action.payload.bookings
        },
        getBookingFailed:function(state,action){
            state.isLoading = false;
            showErrorToast('Cannot fetch Booking')
        }
    }
})
export const BookingSliceAction = BookingSlice.actions
export default BookingSlice;

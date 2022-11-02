import { BookingSliceAction } from "../slices/BookingSlice"
import axios from 'axios';
import { booking_api } from "../../constant/Data";
const BookingMiddleware = ({dispatch}) => next => async action=>{
    if(action.type === BookingSliceAction.getBookingsStarted.type){
        const user_id = action.payload.uid
        axios.get(booking_api+'/user/id/'+user_id)
        .then(res=>{
            dispatch({type:BookingSliceAction.getBookingsSuccess.type,payload:{bookings:res.data}})
        })
        .catch(err=>{
            console.log(err);
            dispatch({type:BookingSliceAction.getBookingFailed.type})
        })
        next(action)
    }
    else
        next(action)
}
export default BookingMiddleware 
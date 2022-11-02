import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { booking_api } from '../constant/Data';

function useFetchBookings(type) {
    const [bookings,setBookings] = useState([])
    useEffect(()=>{
        axios.get(booking_api+'/'+type).then(res=>setBookings(res.data)).catch(err=>console.log(err))
    },[])
    return [bookings,setBookings]
}

export default useFetchBookings;
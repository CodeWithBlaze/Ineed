import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { booking_api } from '../constant/Data';
import { showErrorToast } from '../utils/toast/Toast';

function useCountStudentEnrolled(job_id) {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        axios.get(booking_api+'/count/'+job_id).then(res=>setCount(res.data))
        .catch(err=>{
            showErrorToast('Something went wrong')
        })
    },[])
    return count;
}

export default useCountStudentEnrolled;
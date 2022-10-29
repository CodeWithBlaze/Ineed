import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {job_api} from '../constant/Data';
function useFetchJob(type) {
    const [job,setJob] = useState([])
    useEffect(()=>{
        axios.get(`${job_api}/${type}`).then(res=>setJob(res.data)).catch(err=>console.log(err))
    },[])
    return [job,setJob]
}

export default useFetchJob;
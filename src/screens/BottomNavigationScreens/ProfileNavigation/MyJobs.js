import React, { useEffect,useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getDocumentsByQuery, getQueryByUser } from '../../../backend/functions/Database';
import SafeAreaView from '../../../components/container/SafeAreaView';
import JobCard from '../../../components/UI/JobCard';

function MyJobs(props) {
    const [jobs,setJobs] = useState([]);
    const user = useSelector(state=>state.signup.user);
    const profile = useSelector(state=>state.profile.profile)
    function getJobsFromDatabase(){
        const query  = getQueryByUser(user.uid,"Jobs")
        const jobsArray = [];
        getDocumentsByQuery(query).then(jobs=>{
            
            jobs.forEach(job=>{
                const data = job.data();
                jobsArray.push({id:job.id,...profile,userDescription:profile.description,...data,
                    startingDate:data.startingDate.toDate().toDateString(),
                    endingDate:data.endingDate.toDate().toDateString(),
                    time:data.time.toDate().toLocaleTimeString(),
                    })
            });
            setJobs(jobsArray);
        }) 
    }
    useEffect(()=>{
        getJobsFromDatabase()
    },[])
    return (
        <SafeAreaView customStyle={{flex:1}}>
            <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:'center'}}>
                {
                    jobs.map(job=><JobCard item={job} key={job.id} customContainerStyle={{width:'95%',marginBottom:15,elevation:15}}/>)
                }
            </ScrollView>
        </SafeAreaView>
    );
}

export default MyJobs;
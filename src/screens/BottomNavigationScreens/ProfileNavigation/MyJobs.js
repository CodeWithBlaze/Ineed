import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import JobContainer from '../../../components/container/JobContainer';
import SafeAreaView from '../../../components/container/SafeAreaView';
import useFetchJob from '../../../hooks/useFetchJob';

function MyJobs(props) {
    const user = useSelector(state=>state.signup.user)
    const [jobs,setJobs,loading] = useFetchJob('user/'+user.uid)
    const profile = useSelector(state=>state.profile.profile)
    if(jobs)
        for(let i in jobs)
            jobs[i].user_uid = {_id:jobs[i].user_uid,...profile}
    return (
        <JobContainer data={jobs} isLoading={loading}/>
    );
}

export default MyJobs;
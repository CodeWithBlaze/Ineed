import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import SafeAreaView from '../../../components/container/SafeAreaView';
import JobCard from '../../../components/UI/JobCard';
import useFetchBookings from '../../../hooks/useFetchBookings';

function MyJobs(props) {
    const user = useSelector(state=>state.signup.user)
    const [bookings,setBookings] = useFetchBookings('user/'+user.uid)
    return (
        <SafeAreaView customStyle={{flex:1,marginTop:15}}>
            <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:'center'}}>
                {
                    bookings.map(booking=><JobCard item={booking.job_id} key={booking._id} customContainerStyle={{width:'95%',marginBottom:15,elevation:15}}/>)
                }
            </ScrollView>
        </SafeAreaView>
    );
}

export default MyJobs;
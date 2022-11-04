import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import SafeAreaView from '../../../components/container/SafeAreaView';
import JobCard from '../../../components/UI/JobCard';
import useFetchBookings from '../../../hooks/useFetchBookings';
import ScreenLoading from '../../UI/ScreenLoading';
import JobContainer from '../../../components/container/JobContainer';

function MyBookings(props) {
    const user = useSelector(state=>state.signup.user)
    const [bookings,setBookings] = useFetchBookings('user/'+user.uid)
    const isLoading = useSelector(state=>state.booking.isLoading)
    return (
        <JobContainer data={bookings} isLoading={isLoading} item='job_id'/>
    );
}

export default MyBookings;
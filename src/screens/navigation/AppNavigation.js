import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../BottomNavigationScreens/common/Chat';
import BottomNavigation from './BottomNavigation';
import MessageScreen from '../BottomNavigationScreens/common/MessageScreen';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileActions } from '../../backend/slices/ProfileSlice';
import { BookingSliceAction } from '../../backend/slices/BookingSlice';
function AppNavigation(props) {
    const Stack = createStackNavigator();
    const dispatch = useDispatch();
    const user = useSelector(state=>state.signup.user);
    function fetchUserProileData(){
        dispatch({type:ProfileActions.getProfileStarted.type,payload:{uid:user.uid}})
    }
    function fetchUserBookings(){
        dispatch({type:BookingSliceAction.getBookingsStarted.type,payload:{uid:user.uid}})
    }
    useEffect(()=>{
        fetchUserProileData();
        fetchUserBookings();
    },[])
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Main" component={BottomNavigation} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="MessageScreen" component={MessageScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigation;
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationActions } from '../../backend/slices/NotificationSlice';
import SafeAreaView from '../../components/container/SafeAreaView';
import { SuccessNotifcation,InfoNotifcation,FailureNotifcation } from '../../components/Notification/CustomNotification';
import ScreenLoading from '../UI/ScreenLoading';
function getNotificationByType(type,text,subtitle,renderKey){
    if(type === 'success')
        return <SuccessNotifcation text={text} subtitle={subtitle} key={renderKey}/>
    else if(type === 'fail')
        return <FailureNotifcation text={text} subtitle={subtitle} key={renderKey}/>
    else
        return <InfoNotifcation text={text} subtitle={subtitle} key={renderKey}/>
}

function Notification(props) {
    //--------------------redux---------------------------
    const notifications = useSelector(state=>state.notification.notifications);
    const isLoading = useSelector(state=>state.notification.isLoading);
    const user = useSelector(state=>state.signup.user);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({type:NotificationActions.getNotificationStarted.type,payload:{user:user.uid}})
    },[])
    if(isLoading)
        return <ScreenLoading/>
    return (
        <SafeAreaView customStyle={customStyle.container}>
           {
            notifications.map(notification=>getNotificationByType(notification.type,notification.title,notification.subtitle,notification.id))
           }
        </SafeAreaView>
    );
}
const customStyle = {
    container:{
        paddingTop:35,
        alignItems:'center'
    }
}
export default Notification;
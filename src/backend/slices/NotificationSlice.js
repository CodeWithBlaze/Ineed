import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name:'NOTIFICATION',
    initialState:{isLoading:false,notifications:[],error:''},
    reducers:{
        getNotificationStarted:function(state,action){
            state.isLoading = true;
            state.error = '';
        },
        getNotificationSuccess:function(state,action){
            state.isLoading = false;
            state.notifications = action.payload.notifications;
        },
        getNotificationFailed:function(state,action){
            state.isLoading = false;
            state.error = action.payload.error;
        },
        setLocalNotification:function(state,action){
            state.notifications.push({...action.payload.notification,id:state.notifications.length + 1});
        }
        
    }
})

export const NotificationActions = notificationSlice.actions;
export default notificationSlice;
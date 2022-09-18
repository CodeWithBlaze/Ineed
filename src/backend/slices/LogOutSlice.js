import { createSlice } from "@reduxjs/toolkit";

const LogOutSlice = createSlice({
    name:'LOGOUT',
    initialState:{isLoading:false,error:''},
    reducers:{
        LogOutStarted:function(state,action){
            state.isLoading = true;
            state.error = '';
        },
        LogOutSuccess:function(state,action){
            state.isLoading =false;
            state.error = '';
        },
        LogOutFailed:function(state,action){
            state.isLoading = false;
            state.error = action.payload.error;
        }
    }
})
export const LogOutActions = LogOutSlice.actions

export default LogOutSlice;
import { createSlice } from "@reduxjs/toolkit";

const SignUpSlice = createSlice({
    name:'SIGNUP',
    initialState:{user:null,isLoading:false,error:''},
    reducers:{
        signupStarted:function(state,action){
            state.error = '';
            state.isLoading = true;
        },
        signupSuccess:function(state,action){
            state.user = action.payload.user;
            state.isLoading = false;
            state.error = '';
        },
        signupFailed:function(state,action){
            state.error = action.payload.error;
            state.isLoading = false;
        }
    }
})
export const SignUpActions = SignUpSlice.actions

export default SignUpSlice;
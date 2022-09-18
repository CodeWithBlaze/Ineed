import { createSlice } from "@reduxjs/toolkit";

const SignInSlice = createSlice({
    name:'SIGNIN',
    initialState:{isLoading:false,error:''},
    reducers:{
        SignInStarted:function(state,action){
            state.isLoading = true;
            state.error = '';
        },
        SignInSuccess:function(state,action){
            state.isLoading =false;
            state.error = '';
        },
        SignInFailed:function(state,action){
            state.isLoading = false;
            state.error = action.payload.error;
        },
        hideError:function(state,action){
            state.error = '';
        }
    }
})
export const SignInActions = SignInSlice.actions

export default SignInSlice;
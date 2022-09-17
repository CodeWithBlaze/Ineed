import { createSlice } from "@reduxjs/toolkit";
import { SignUp } from "../functions/Auth";

const AuthSlice = createSlice({
    name:'Auth',
    initialState:{user:null},
    reducers:{
        signup:function(state,action){
            
        },
        login:function(state,payload){

        },
        logout:function(state,payload){

        },
        forgotPassword:function(state,payload){

        }
    }
})
export const actions = AuthSlice.actions

export default AuthSlice;
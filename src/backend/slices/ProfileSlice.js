import { showErrorToast, showSuccessToast } from "../../utils/toast/Toast";

const { createSlice } = require("@reduxjs/toolkit");

const ProfileSlice = createSlice({
    name:'PROFILE',
    initialState:{profile:null,error:'',isLoading:false},
    reducers:{
        setProfileStarted:function(state,action){
            state.isLoading = true;
            state.error = '';
        },
        setProfileSuccess:function(state,action){
            state.isLoading = false;
            state.profile = action.payload.profile
            showSuccessToast('Profile Updated Successfully')
        },
        setProfileFail:function(state,action){
            state.isLoading = false;
            state.error = action.payload.error
            showErrorToast('Profile Update Failed')
        },
        getProfileStarted:function(state,action){
            state.isLoading = true;
            state.error = '';
        },
        getProfileSuccess:function(state,action){
            state.isLoading = false;
            state.profile = action.payload.profile ?  action.payload.profile:null;
        },
        getProfileFail:function(state,action){
            state.isLoading = false;
            state.error = action.payload.error;
            showErrorToast('Unable to fetch your profile')
        }
    }
})

export const ProfileActions = ProfileSlice.actions;
export default ProfileSlice;
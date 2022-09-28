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
        },
        setProfileFail:function(state,action){
            state.isLoading = false;
            state.error = action.payload.error
        },
        getProfileStarted:function(state,action){
            state.isLoading = true;
            console.log(state.isLoading);
            state.error = '';
        },
        getProfileSuccess:function(state,action){
            state.isLoading = false;
            state.profile = action.payload.profile ?  action.payload.profile:null;
        },
        getProfileFail:function(state,action){
            state.isLoading = false;
            state.error = action.payload.error;
        }
    }
})

export const ProfileActions = ProfileSlice.actions;
export default ProfileSlice;
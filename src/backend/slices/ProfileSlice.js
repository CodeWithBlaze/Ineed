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
    }
})

export const ProfileActions = ProfileSlice.actions;
export default ProfileSlice;
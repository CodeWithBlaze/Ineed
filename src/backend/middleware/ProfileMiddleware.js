import axios from 'axios';
import { uploadProfileData,uploadProfileImage } from "../functions/Database";
import {ProfileActions} from "../slices/ProfileSlice";
import {profile_api} from '../../constant/Data';
import { createImageUrl } from '../../utils/common/extra';


const ProfileMiddleware = ({dispatch}) => next => async action =>{
    if(action.type === ProfileActions.setProfileStarted.type){
        next(action);
        const {profileData,uid,image} = action.payload;
        uploadProfileData({...profileData,uid},uid)
        .then((res) => {
            if(image.uri.startsWith('file://'))
                return uploadProfileImage(uid,image.uri)
            else
                return res
        })
        .then((res)=>dispatch({type:ProfileActions.setProfileSuccess.type,payload:{profile:{...res.data,image:createImageUrl(res.data.image)}}}))
        .catch((error) => {
            console.log(error)
            const errorMessage = error.message;
            dispatch({type:ProfileActions.setProfileFail.type,payload:{error:errorMessage}})
        });
    }
    else if(action.type === ProfileActions.getProfileStarted.type){
        const { uid } = action.payload;
        const url = `${profile_api}/${uid}`;
        axios.get(url)
        .then(res=>{
           dispatch({type:ProfileActions.getProfileSuccess.type,payload:{profile:{...res.data,image:createImageUrl(res.data.image)}}});
        })
        .catch(err=>{
            const errorMessage = err.message;
            console.log(errorMessage);
            dispatch({type:ProfileActions.getProfileFail.type,payload:{error:errorMessage}})
        })
        next(action);
    }
    else
        next(action);
    
}
export default ProfileMiddleware;
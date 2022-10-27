import axios from 'axios';
import { uploadProfileData,uploadProfileImage } from "../functions/Database";
import {ProfileActions} from "../slices/ProfileSlice";
import {api} from '../../constant/Data';


const ProfileMiddleware = ({dispatch}) => next => async action =>{
    if(action.type === ProfileActions.setProfileStarted.type){
        next(action);
        const {profileData,uid,image} = action.payload;
        uploadProfileData({...profileData,uid},uid)
        .then(async (res) => {
            if(image.uri.startsWith('file://'))
                uploadProfileImage(uid,image.uri)
                .then(res=>dispatch({type:ProfileActions.setProfileSuccess.type,payload:{profile:{...res.data,image:`${api}/${res.data.image}`}}}))
                .catch(err=>console.log(err.message))
            else
                dispatch({type:ProfileActions.setProfileSuccess.type,payload:{profile:{...res.data,image:`${api}/${res.data.image}`}}})

        })
        .catch((error) => {
        console.log(error)
            const errorMessage = error.message;
            dispatch({type:ProfileActions.setProfileFail.type,payload:{error:errorMessage}})
        });
    }
    else if(action.type === ProfileActions.getProfileStarted.type){
        const { uid } = action.payload;
        axios.get(`${api}/user/${uid}`).then(res=>{
           dispatch({type:ProfileActions.getProfileSuccess.type,payload:{profile:{...res.data,image:`${api}/${res.data.image}`}}});
        }).catch(err=>{
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
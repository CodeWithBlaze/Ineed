import { addDocumentWithId } from "../functions/Database";
import {ProfileActions} from "../slices/ProfileSlice";


const ProfileMiddleware = ({dispatch}) => next => async action =>{
    if(action.type === ProfileActions.setProfileStarted.type){
        const {profileData,uid} = action.payload;
        addDocumentWithId('Profile',uid,profileData)
        .then(() => {
            dispatch({type:ProfileActions.setProfileSuccess.type,payload:{profile:profileData}})
       })
       .catch((error) => {
           console.log(error);
            const errorMessage = error.message;
            dispatch({type:ProfileActions.setProfileFail.type,payload:{error:errorMessage}})
        });
       next(action);
    }
    else
        next(action);
    
}
export default ProfileMiddleware;
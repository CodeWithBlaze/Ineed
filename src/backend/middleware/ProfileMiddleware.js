import { addDocumentWithId, getDocumentWithId } from "../functions/Database";
import {ProfileActions} from "../slices/ProfileSlice";

const collection_name = "Profile";

const ProfileMiddleware = ({dispatch}) => next => async action =>{
    if(action.type === ProfileActions.setProfileStarted.type){
        next(action);
        const {profileData,uid} = action.payload;
        addDocumentWithId(collection_name,uid,profileData)
        .then(() => {
            dispatch({type:ProfileActions.setProfileSuccess.type,payload:{profile:profileData}})
       })
       .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            dispatch({type:ProfileActions.setProfileFail.type,payload:{error:errorMessage}})
        });
    }
    else if(action.type === ProfileActions.getProfileStarted.type){
        const { uid } = action.payload;
        getDocumentWithId(collection_name,uid).then(res=>{
           dispatch({type:ProfileActions.getProfileSuccess.type,payload:{profile:res.data()}});
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
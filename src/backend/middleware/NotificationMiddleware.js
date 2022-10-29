import axios from "axios";
import { notification_api } from "../../constant/Data";
import { NotificationActions } from "../slices/NotificationSlice";


const NotificationMiddleware = ({dispatch}) => next => async action =>{
    if(action.type === NotificationActions.getNotificationStarted.type){
        next(action);
        const user = action.payload.user;
        try{
            const notifcations = await axios.get(notification_api+'/'+user);
            dispatch({type:NotificationActions.getNotificationSuccess.type,payload:{notifications:notifcations.data}})
        }
        catch(err){
            const error = err.message;
            console.log(error)
            dispatch({type:NotificationActions.getNotificationFailed.type,payload:{error:error}})
        }
        
    }
    else
        next(action);
    
}
export default NotificationMiddleware;
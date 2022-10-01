import { addDocument, getQueryByUser, getDocumentsByQuery } from "../functions/Database";
import { NotificationActions } from "../slices/NotificationSlice";


const NotificationMiddleware = ({dispatch}) => next => async action =>{
    if(action.type === NotificationActions.getNotificationStarted.type){
        next(action);
        const user = action.payload.user;
        const query = getQueryByUser(user,"Notifications");
        try{
            const notifications = await getDocumentsByQuery(query)
            const notificationsArray = [];
            notifications.forEach(notification=>notificationsArray.push({id:notification.id,...notification.data()}));
            dispatch({type:NotificationActions.getNotificationSuccess.type,payload:{notifications:notificationsArray}})
        }
        catch(err){
            const error = err.message;
            console.log(error)
            dispatch({type:NotificationActions.getNotificationFailed.type,payload:{error:error}})
        }
        
    }
    else if(action.type === NotificationActions.addNotificationDatabaseStarted.type){
        const notification = action.payload.notification
        addDocument('Notifications',notification)
        .then(()=>{
            dispatch({type:NotificationActions.setLocalNotification.type,payload:{notification:notification}})
        })
        .catch(err=>{
            const errorMessage = err.message;
            dispatch({type:NotificationActions.getNotificationFailed.type,payload:{error:errorMessage}})
        })
        next(action);
    }
    else
        next(action);
    
}
export default NotificationMiddleware;
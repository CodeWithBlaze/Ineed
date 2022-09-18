import { LogOut } from "../functions/Auth";
import { LogOutActions } from "../slices/LogOutSlice";


const LogOutMiddleware = ({dispatch}) => next => async action =>{
    if(action.type === LogOutActions.LogOutStarted.type){
        console.log(action);
        LogOut()
        .then(() => {
            dispatch({type:LogOutActions.LogOutSuccess.type})
       })
       .catch((error) => {
           const errorMessage = error.message;
           dispatch({type:LogOutActions.LogOutFailed.type,payload:{error:errorMessage}})
       });
       next(action);
    }
    else
        next(action);
    
}
export default LogOutMiddleware;
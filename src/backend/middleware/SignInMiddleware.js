import { SignIn } from "../functions/Auth";
import { SignInActions } from "../slices/SignInSlice";


const SignInMiddleware = ({dispatch}) => next => async action =>{
    if(action.type === SignInActions.SignInStarted.type){
        const {email,password,method} = action.payload;
        SignIn(email,password,method)
        .then(() => {
            dispatch({type:SignInActions.SignInSuccess.type})
       })
       .catch((error) => {
           console.log(error);
           const errorMessage = error.message;
            dispatch({type:SignInActions.SignInFailed.type,payload:{error:errorMessage}})
        });
       next(action);
    }
    else
        next(action);
    
}
export default SignInMiddleware;
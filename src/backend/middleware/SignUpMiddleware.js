import { SignUp } from "../functions/Auth";
import { SignUpActions } from "../slices/SignUpSlice"


const SignUpMiddleware = ({dispatch}) => next => async action =>{
    if(action.type === SignUpActions.signupStarted.type){
        const {email,password} = action.payload;
        SignUp(email,password)
        .then((userCredential) => {
            dispatch({type:SignUpActions.signupSuccess.type,payload:{user:{
                uid:userCredential.user.uid,
                email:userCredential.user.email
            }}})
       })
       .catch((error) => {
           const errorMessage = error.message;
           dispatch({type:SignUpActions.signupFailed.type,payload:{error:errorMessage}})
       });
       next(action);
    }
    else
        next(action);
    
}
export default SignUpMiddleware;
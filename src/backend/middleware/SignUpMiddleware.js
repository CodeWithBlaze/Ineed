import axios from "axios";
import { api } from "../../constant/Data";
import { SignUp } from "../functions/Auth";
import { SignUpActions } from "../slices/SignUpSlice"

async function createUserInDatabase(uid){
    return await axios.post(`${api}/user/`,{uid})
}
const SignUpMiddleware = ({dispatch}) => next => async action =>{
    if(action.type === SignUpActions.signupStarted.type){
        const {email,password} = action.payload;
        SignUp(email,password)
        .then((userCredential) => {
            createUserInDatabase(userCredential.user.uid)
            .then(res=>{
                dispatch({type:SignUpActions.signupSuccess.type,payload:{user:{
                    uid:userCredential.user.uid,
                    email:userCredential.user.email
                }}})
            })
            .catch(err=>{
                const errorMessage = error.message;
                dispatch({type:SignUpActions.signupFailed.type,payload:{error:errorMessage}})
            })
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
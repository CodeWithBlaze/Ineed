import { auth } from "../../config/Firebase"
import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    signInWithCredential
} from "firebase/auth";
import { SignUpActions } from "../slices/SignUpSlice";

async function SignUp(email,password){
    return await createUserWithEmailAndPassword(auth, email, password)
}
async function googleSignIn(credential){
    return await signInWithCredential(auth,credential);
}
function authChangeListener(dispatch){
    onAuthStateChanged(auth, (user) => {
        if (user) 
            dispatch({type:SignUpActions.authStateChange.type,
                payload:{
                    user:{uid:user.uid,email:user.email}
                }
            })
        else 
          dispatch({type:SignUpActions.authStateChange.type,payload:{user:null}})
    });
}
async function LogOut(){
    return await signOut(auth);
}
async function SignIn(email,password){
    return await signInWithEmailAndPassword(auth,email,password);
}

export {
    SignUp,
    authChangeListener,
    LogOut,
    SignIn,
    googleSignIn
}
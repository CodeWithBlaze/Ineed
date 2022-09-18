import { auth } from "../../config/Firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
async function SignUp(email,password){
    return await createUserWithEmailAndPassword(auth, email, password)
    
}

export {
    SignUp
}
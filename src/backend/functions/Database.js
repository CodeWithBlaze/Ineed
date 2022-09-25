import { doc, setDoc,updateDoc,getDoc } from "firebase/firestore"; 
import { firestore } from "../../config/Firebase";

export async function addDocumentWithId(col,id,data){
    return await setDoc(doc(firestore, col, id), data);
}
export async function getDocumentWithId(col,id){
    return await getDoc(doc(firestore,col,id))
}
export async function updateDocumentWithId(col,id,data){
    return await updateDoc(doc(firestore,col,id),data)
}
import { doc, setDoc,updateDoc,getDoc,collection, addDoc,getDocs,query,where } from "firebase/firestore"; 
import { firestore } from "../../config/Firebase";

export async function addDocumentWithId(col,id,data){
    return await setDoc(doc(firestore, col, id), data);
}
export async function addDocument(col,data){
    return await addDoc(collection(firestore,col),data);
}
export async function getDocumentWithId(col,id){
    return await getDoc(doc(firestore,col,id))
}
export async function updateDocumentWithId(col,id,data){
    return await updateDoc(doc(firestore,col,id),data)
}
export async function getDocumentsByQuery(query){
    const querySnapshot = await getDocs(query);
    return querySnapshot;
}
export function getNotificationQuery(user_id){
    const q = query(collection(firestore,"Notifications"),where("uid","==",user_id));
    return q;
}
  
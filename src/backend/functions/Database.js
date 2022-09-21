import { doc, setDoc } from "firebase/firestore"; 
import { firestore } from "../../config/Firebase";

export async function addDocumentWithId(col,id,data){
    const value = await setDoc(doc(firestore, col, id), data);
    console.log(value);
}
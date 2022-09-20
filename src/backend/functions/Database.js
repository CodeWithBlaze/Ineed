import { doc, setDoc } from "firebase/firestore"; 
import { firestore } from "../../config/Firebase";

export async function addDocumentWithId(col,id,data){
    await setDoc(doc(firestore, col, id), data);
}
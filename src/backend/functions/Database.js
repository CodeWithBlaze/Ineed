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
export function getQueryByUser(user_id,col){
    const q = query(collection(firestore,col),where("uid","==",user_id));
    return q;
}
export async function searchFromArrayInDatabase(col,arrayName,searchItem){
    const ref = collection(firestore,col)
    const q = query(ref, where(arrayName, "array-contains",searchItem));
    const q2 = query(ref,where("title","==",searchItem))
    const result = await getDocs(q)
    const result2 = await getDocs(q2)
    
    const resultArray = [];
    for(let doc in result.docs){
        const data = result.docs[doc].data()
        const user = await getDocumentWithId("Profile",data.uid)
        const user_profile = user.data()
        resultArray.push({id:doc.id,...data,
            startingDate:data.startingDate.toDate().toDateString(),
            endingDate:data.endingDate.toDate().toDateString(),
            time:data.time.toDate().toLocaleTimeString(),
            ...user_profile,
            userDescription:user_profile.description,
        })
    }
    for(let doc in result2.docs){
        if(!resultArray.some(d=>d.id === doc.id)){
            const data = result2.docs[doc].data()
            const user = await getDocumentWithId("Profile",data.uid)
            const user_profile = user.data()
            resultArray.push({id:doc.id,...data,
                startingDate:data.startingDate.toDate().toDateString(),
                endingDate:data.endingDate.toDate().toDateString(),
                time:data.time.toDate().toLocaleTimeString(),
                ...user_profile,
                userDescription:user_profile.description,
            })
        }
    }
    return resultArray;
}
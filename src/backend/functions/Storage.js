import {storage} from '../../config/Firebase';
import { ref,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import { extractFileNameFromUri } from '../../utils/common/extra';

export async function uploadFile(folder,uid,file,updateProgress,onFinish){
    const filename = extractFileNameFromUri(file);
    const storageRef = ref(storage,`${folder}/${uid}/${filename}`)
    const image = await fetch(file);
    const image_blob = await image.blob();
    const uploader = uploadBytesResumable(storageRef,image_blob)
    uploader.on(
        'state_changed',
        snapshot=>{
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            updateProgress(progress);
        },
        err=>console.log(err.message),
        ()=>{
            getDownloadURL(uploader.snapshot.ref).then(url=>{
                onFinish(url);
            })
        })
    
}

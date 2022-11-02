import axios from "axios";
import { profile_api } from "../../constant/Data";
import {extractExtensionFromUri,extractFileNameFromUri} from '../../utils/common/extra';

export function createFormData(uid,uri){
    const ext = extractExtensionFromUri(uri)
    const type = ext === 'jpeg' || ext === 'jpg' ? 'image/jpeg':'image/png'
    const formdata = new FormData()
    formdata.append('image',{
        type:type,
        uri:uri,
        name:extractFileNameFromUri(uid,uri)
    })
    return formdata
}
export async function uploadProfileData(data,uid){
    return await axios.put(profile_api+'/'+uid,{updateFields:data})
}
export async function uploadProfileImage(uid,uri){
    const formdata = createFormData(uid,uri)
    const url = `${profile_api}/image/${uid}`;
    return await axios.post(url,formdata,{
        headers:{
            'Content-Type':'multipart/form-data',
            'Accept':'application/json'
        }
    })
}

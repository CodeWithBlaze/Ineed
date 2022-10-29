import { api } from "../../constant/Data";


export function extractFileNameFromUri(uid,uri){
    const index = uri.lastIndexOf('/');
    return uid+'-'+uri.substring(index+1);
}
export function extractExtensionFromUri(uri){
    const index = uri.lastIndexOf('.');
    return uri.substring(index+1);
}
export function createImageUrl(image){
    return `${api}/${image}`
}
export function extractDateFromString(dt){
    const date = new Date(dt)
    return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
}
export function extractTimeFromString(dt){
    const date = new Date(dt);
    return date.getHours()+":"+date.getMinutes();
}
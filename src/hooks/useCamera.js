import * as ImagePicker from 'expo-image-picker';
import { useEffect } from 'react';

function useCamera(props) {
    const [status, requestPermission] = ImagePicker.useCameraPermissions();
    async function getCamera(){
        if(status!=null && !status.granted){
            const result = await requestPermission();
            console.log(result);
        }
    }
    useEffect(()=>{
        getCamera();
    },[])
    return status
}

export default useCamera;
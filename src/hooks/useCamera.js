import * as ImagePicker from 'expo-image-picker';
import { useEffect } from 'react';

function useCamera(props) {
    const [status, requestPermission] = ImagePicker.useCameraPermissions();
    async function getCamera(){
        if(status!=null && !status.granted){
            const result = await requestPermission();
            if(result.granted){
                const photo = await ImagePicker.launchCameraAsync();
                return photo.uri;
            }
        }
        else if(status != null){
            const photo = await ImagePicker.launchCameraAsync();
            return photo.uri;
        }
            
        
    }
    return [status,getCamera]
}

export default useCamera;
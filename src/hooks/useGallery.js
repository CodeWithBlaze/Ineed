import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const initialProfileImage = 'https://res.cloudinary.com/codecafe/image/upload/v1663577461/IneedAsset/avatar_vaeywc.png';

function useGallery() {
    const [image,setImage] = useState(initialProfileImage);
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1,1],
          quality: 1,
        });
        if (!result.cancelled) {
          setImage(result.uri);
        }
    };
    return [image,pickImage];
}

export default useGallery;
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';



function useGallery() {
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1,1],
          quality: 1,
        });
        if (!result.cancelled) {
          return result.uri;
        }
    };
    return pickImage;
}

export default useGallery;
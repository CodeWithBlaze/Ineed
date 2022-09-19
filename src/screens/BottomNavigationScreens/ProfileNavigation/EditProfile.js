import React, { useState } from 'react';
import { Text,StyleSheet,View } from 'react-native';
import BottomSheetModal from '../../../components/container/BottomSheet';
import SafeAreaView from '../../../components/container/SafeAreaView';
import Form from '../../../components/form/Form';
import Button from '../../../components/UI/Button';
import CircularImage from '../../../components/UI/CicularImage';
import CircularIconButton from '../../../components/UI/CircularIconButton';
import IconText from '../../../components/UI/IconText';
import InfoHeadingText from '../../../components/UI/InfoHeadingText';
import InputBox from '../../../components/UI/InputBox';
import useCamera from '../../../hooks/useCamera';
import useGallery from '../../../hooks/useGallery';


function EditProfile(props) {
    const [image,pickImage] = useGallery();
    const status = useCamera();
    const [isVisible, setVisible] = useState(false);
    function onPickImage(){
        pickImage();
        setVisible(false);
    }
    return (
        <SafeAreaView customStyle={{flex:1}}>
            <Form logoVisible>
                <Text style={styles.formHeading}>Edit Profile</Text>
                <View>
                <CircularImage 
                url={image}
                size={150}
                showRing
                onPress={()=>setVisible(true)}
                />
                <CircularIconButton
                icon={'camera'}
                iconSize={20}
                size={50}
                customButtonStyle={{bottom:50,left:120,borderColor:'white',borderWidth:1}}
                customIconStyle={{color:'white'}}
                />
                </View>
                <InputBox 
                customStyle={customstyle.input} 
                placeholder={'Your Name'}
                type={'default'}
                />
                <InfoHeadingText info={'This description will be shown in your profile and in your jobs'}/>
                <InputBox 
                placeholder={'Your Short Description'}
                multiline
                customStyle={{...customstyle.input,...customstyle.multilineBox,marginBottom:15}}
                />
                <Button title={'Update Profile'} customButtonStyle={{borderRadius:5,marginBottom:80}}/>
                <BottomSheetModal 
                isVisible={isVisible} 
                setVisible={setVisible}
                title={'Choose a method'}
                >
                <IconText 
                    icon={'camera'} 
                    title={'Take a photo'}
                    
                    iconColor={'black'}
                    customContainerStyle={{marginBottom:30}}
                    customTextStyle={{marginLeft:15,color:'black'}}
                    
                />
                <IconText 
                    icon={'photo'} 
                    title={'Choose a photo'}
                    iconColor={'black'}
                    customContainerStyle={{marginBottom:20}}
                    customTextStyle={{marginLeft:15,color:'black'}}
                    onPress={onPickImage}
                />
                </BottomSheetModal>
            </Form>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    formHeading:{
        paddingTop:15,
        fontSize:25,
        fontFamily:'Primary-Bold',
        marginBottom:25
    },
})
const customstyle = {
    input:{
        borderRadius:5
    },
    multilineBox:{
        height:180,
        paddingTop:20,
        textAlignVertical:'top'
    },
}
export default EditProfile;
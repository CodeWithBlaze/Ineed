import React, { useState } from 'react';
import { Text,StyleSheet,View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateDocumentWithId } from '../../../backend/functions/Database';
import { uploadFile } from '../../../backend/functions/Storage';
import { ProfileActions } from '../../../backend/slices/ProfileSlice';
import BottomSheetModal from '../../../components/container/BottomSheet';
import SafeAreaView from '../../../components/container/SafeAreaView';
import Form from '../../../components/form/Form';
import Button from '../../../components/UI/Button';
import CircularImage from '../../../components/UI/CicularImage';
import CircularIconButton from '../../../components/UI/CircularIconButton';
import IconText from '../../../components/UI/IconText';
import InfoHeadingText from '../../../components/UI/InfoHeadingText';
import InputBox from '../../../components/UI/InputBox';
import ProgressBar from '../../../components/UI/ProgressBar';
import useCamera from '../../../hooks/useCamera';
import useGallery from '../../../hooks/useGallery';

const initialProfileImage = 'https://res.cloudinary.com/codecafe/image/upload/v1663577461/IneedAsset/avatar_vaeywc.png';
function EditProfile({route}) {
    //--------------------route data-----------------------------
    const profileData = route.params.profileData;
    //--------------------route data-----------------------------
    
    //-----------------states---------------------------------
    const pickImage = useGallery();
    const [status,getCamera] = useCamera();
    const [isVisible, setVisible] = useState(false);
    const [imageUploadProgress,setImageUploadProgress] = useState(0);
    //-------------------inputs-------------------------------
    const [profileImage,setProfileImage] = useState(profileData.image || initialProfileImage)
    const [name,setName] = useState(profileData.name || '');
    const [description,setDescription] = useState(profileData.description || '');
    const [profession,setProfession] = useState(profileData.profession || '');
    //--------------------Redux---------------------------------
    const user = useSelector(state=>state.signup.user);
    const isLoading = useSelector(state=>state.profile.isLoading);
    const dispatch = useDispatch()
    //--------------------functions------------------------------

    function onProfileDataUploadFinish(url){
        const profileData = {
            name,
            description,
            profession,
            image:url,
            rating:0,
        }
        dispatch({type:ProfileActions.setProfileStarted.type,payload:{profileData:profileData,uid:user.uid}})
    }
    async function uploadProfileData(onFinish){
        setImageUploadProgress(0);
        await uploadFile('Profile',user.uid,profileImage,setImageUploadProgress,onFinish);
    }
    
    //--------------------functions------------------------------
    function onPickImage(){
        setVisible(false);
        pickImage().then(image=>{
            if(image)
                setProfileImage(image);
        });
    }
    function onCamera(){
        setVisible(false);
        if(status!= null)
            getCamera().then(image=>{
                if(image)
                    setProfileImage(image);
            });
    }
    return (
        <SafeAreaView customStyle={{flex:1}}>
            <Form logoVisible>
                <Text style={styles.formHeading}>Edit Profile</Text>
                <View>
                <CircularImage 
                url={profileImage}
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
                {imageUploadProgress>0 && <ProgressBar progress={imageUploadProgress.toString()+"%"}/>}
                <InputBox 
                customStyle={customstyle.input} 
                placeholder={'Your Name'}
                type={'default'}
                value={name}
                setValue={setName}
                />
                <InfoHeadingText info={'Mention your skills in short or what you are by profession'}/>
                <InputBox 
                customStyle={customstyle.input} 
                placeholder={'Your Skills or Profession'}
                type={'default'}
                value={profession}
                setValue={setProfession}
                />
                <InfoHeadingText info={'This description will be shown in your profile and in your jobs'}/>
                <InputBox 
                placeholder={'Your Short Description'}
                multiline
                value={description}
                setValue={setDescription}
                customStyle={{...customstyle.input,...customstyle.multilineBox,marginBottom:15}}
                />
                <Button onPress={()=>uploadProfileData(onProfileDataUploadFinish)} isLoading={isLoading} title={'Update Profile'} customButtonStyle={{borderRadius:5,marginBottom:80}}/>
                <BottomSheetModal 
                isVisible={isVisible} 
                setVisible={setVisible}
                title={'Choose a method'}
                >
                <IconText 
                    icon={'camera'} 
                    title={'Take a photo'}
                    onPress={onCamera}
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
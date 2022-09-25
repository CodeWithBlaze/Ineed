import React, { useEffect } from 'react';
import { Text,View,StyleSheet, ScrollView} from 'react-native';
import SafeAreaView from '../../../components/container/SafeAreaView';
import { DARK_GREY, LIGHT_GREY_COLOR, PRIMARY_COLOR } from '../../../constant/Color';
import CircularImage from '../../../components/UI/CicularImage';
import Button from '../../../components/UI/Button';
import CircularIconButton from '../../../components/UI/CircularIconButton';
import Seperator from '../../../components/UI/Seperator';
import IconText from '../../../components/UI/IconText';
import { useDispatch, useSelector } from 'react-redux';
import { showErrorToast } from '../../../utils/toast/Toast';
import { LogOutActions } from '../../../backend/slices/LogOutSlice';
import { useNavigation } from '@react-navigation/native';
import { ProfileActions } from '../../../backend/slices/ProfileSlice';
import ScreenLoading from '../../UI/ScreenLoading';


function Profile(props) {
    const isLoading = useSelector(state=>state.logout.isLoading);
    const isProfileLoading = useSelector(state=>state.profile.isLoading);
    const profileData = useSelector(state=>state.profile.profile);
    const user = useSelector(state=>state.signup.user);
    const error = useSelector(state=>state.logout.error);
    //profile error
    const navigation = useNavigation();
    const dispatch = useDispatch();
    //-------------------------------------function-------------------------------------
    function onLogout(){
        dispatch({type:LogOutActions.LogOutStarted.type})
    }
    useEffect(()=>{
        dispatch({type:ProfileActions.getProfileStarted.type,payload:{uid:user.uid}})
    },[])
    if(isProfileLoading || !profileData)
        return <ScreenLoading/>
    return (
        <SafeAreaView customStyle={{flex:1,backgroundColor:PRIMARY_COLOR,paddingTop:150}}>
               <View style={styles.profileImage}>
               <CircularImage 
                url={profileData.image}
                size={150}
                showRing
                customContainerStyle={customStyle.customImageContainer}
                />
               </View>
                
            <ScrollView style={styles.container}>
                <View style={styles.profileDetails}>
                    <Text style={styles.profileName}>{profileData.name}</Text>
                    <Text style={styles.location}>Los Angeles, New York</Text>
                    <Text style={styles.description}>{profileData.description}</Text>
                </View>
                <View style={styles.profileDetailButtonContainer}>
                    <Button 
                    title={'Edit Profile'} 
                    customButtonStyle={customStyle.customEditProfile} 
                    onPress={()=>navigation.navigate('EditProfile',{profileData})}/>
                    <CircularIconButton icon={'share-alt'} 
                    iconSize={24} 
                    size={50}
                    customButtonStyle={customStyle.shareBtn}
                    customIconStyle={customStyle.shareBtnIcon}
                    />
                </View>
                <Seperator/>
                <View style={styles.profileMenu}>
                    <IconText 
                    icon={'bookmark'} 
                    title={'Bookmarks'} 
                    iconColor={PRIMARY_COLOR}
                    iconSize={20}
                    customContainerStyle={{marginBottom:20}}
                    customTextStyle={{marginLeft:20}}
                    />
                    <IconText 
                    icon={'gift'} 
                    title={'Apply Coupon'} 
                    iconColor={PRIMARY_COLOR}
                    customContainerStyle={{marginBottom:20}}
                    customTextStyle={{marginLeft:15}}
                    />
                    <IconText 
                    icon={'sign-out'} 
                    title={'Logout'}
                    isLoading={isLoading}
                    onPress={()=>onLogout()}
                    activityColor={'red'} 
                    iconColor={'red'}
                    customContainerStyle={{marginBottom:20}}
                    customTextStyle={{marginLeft:15,color:'red'}}
                    />
                </View>
            </ScrollView>
            {error && showErrorToast()}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingTop:100,
        paddingHorizontal:30
    },
    profileImage:{
        position:'absolute',
        width:'100%',
        alignItems:'center',
        zIndex:999
    },
    profileDetails:{
        alignItems:'center'
    },
    profileName:{
        fontFamily:'Primary-Bold',
        fontSize:23,
        marginBottom:10
    },
    location:{
        fontSize:16,
        color:DARK_GREY,
        fontFamily:'Primary-Semibold',
        marginBottom:15
    },
    description:{
        fontSize:17,
        color:'#827FAE',
        fontFamily:'Primary-Semibold',
        textAlign:'center'
    },
    profileDetailButtonContainer:{
        marginTop:25,
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:40
    },
    profileMenu:{
        marginTop:30,
        paddingBottom:160
    }
})
const customStyle = {
    customImageContainer:{
        top:60
    },
    customEditProfile:{
        width:150,
        height:50,
        borderRadius:25,
        marginRight:15,
        
    },
    shareBtn:{
        backgroundColor:'white',
        borderWidth:1,
        borderColor:LIGHT_GREY_COLOR,
        
    },
    shareBtnIcon:{
        color:PRIMARY_COLOR
    }
}
export default Profile;
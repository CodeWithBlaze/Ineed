import React from 'react';
import { Text,View,StyleSheet, ScrollView } from 'react-native';
import SafeAreaView from '../../../components/container/SafeAreaView';
import { DARK_GREY, LIGHT_GREY_COLOR, PRIMARY_COLOR } from '../../../constant/Color';
import CircularImage from '../../../components/UI/CicularImage';
import Button from '../../../components/UI/Button';
import CircularIconButton from '../../../components/UI/CircularIconButton';
import Seperator from '../../../components/UI/Seperator';
import IconText from '../../../components/UI/IconText';
function Profile(props) {
    return (
        <SafeAreaView customStyle={{flex:1,backgroundColor:PRIMARY_COLOR,paddingTop:150}}>
               <View style={styles.profileImage}>
               <CircularImage 
                url={'https://i.pinimg.com/originals/de/22/f4/de22f494502d8797c24c9f235320a644.jpg'}
                size={150}
                showRing
                customContainerStyle={customStyle.customImageContainer}
                />
               </View>
                
            <ScrollView style={styles.container}>
                <View style={styles.profileDetails}>
                    <Text style={styles.profileName}>Nancy Momoland</Text>
                    <Text style={styles.location}>Los Angeles, New York</Text>
                    <Text style={styles.description}>I am a singer and dancer and well enough experienced to teach other about singing.Looking forward to teach you</Text>
                </View>
                <View style={styles.profileDetailButtonContainer}>
                    <Button title={'Edit Profile'} customButtonStyle={customStyle.customEditProfile}/>
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
                    iconColor={'red'}
                    customContainerStyle={{marginBottom:20}}
                    customTextStyle={{marginLeft:15,color:'red'}}
                    />
                </View>
            </ScrollView>
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
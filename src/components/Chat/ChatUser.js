import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View,StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { DARK_GREY } from '../../constant/Color';
import CicularImage from '../UI/CicularImage';

function ChatUser({user,customContainerStyle}) {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('MessageScreen')}>
            <View style={[styles.chatContainer,customContainerStyle]}>
            <CicularImage
            url={user.image}
            size={50}
            />
            <View style={styles.chatDetails}>
            <Text style={styles.chatUser}>{user.name}</Text>
            <Text style={styles.info}>Last Message on {user.lastMessage}</Text>
            </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    chatContainer:{
        flexDirection:'row',
        marginVertical:15
    },
    chatUser:{
        fontFamily:'Primary-Bold',
        fontSize:16,
        marginTop:5
    },
    chatDetails:{
        marginLeft:20
    },
    info:{
      fontFamily:'Primary-Semibold',
      fontSize:12,
      marginTop:5,
      color:DARK_GREY
    }
})
export default ChatUser;
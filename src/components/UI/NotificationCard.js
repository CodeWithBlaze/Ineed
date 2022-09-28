import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { DARK_GREY, PRIMARY_COLOR } from '../../constant/Color';
import SafeAreaView from '../container/SafeAreaView';
import CircularIconButton from './CircularIconButton';

function NotificationCard({color,icon,title,subtitle}) {
    return (
        <View style={styles.notificationContainer}>
            <View style={[styles.designBar,{backgroundColor:color}]}></View>
            <CircularIconButton icon={icon} 
            iconSize={20} 
            size={30} 
            customButtonStyle={{...customStyle.buttonStyle,backgroundColor:color}}/>
            <View>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
        </View>
        
    );
}
const styles = StyleSheet.create({
    notificationContainer:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        height:100,
        padding:10,
        overflow:'hidden',
        backgroundColor:'white'
    },  
    title:{
        fontFamily:'Primary-Bold',
        fontSize:15
    },
    designBar:{
        width:5,
        height:80,
        marginRight:15,
        borderRadius:5,
        backgroundColor:PRIMARY_COLOR
    },
    subtitle:{
        color:DARK_GREY,
        fontSize:12,
        fontFamily:'Primary-Medium'
    }
})
const customStyle = {
    buttonStyle:{
        marginRight:15,
    }
}
export default NotificationCard;
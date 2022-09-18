import React from 'react';
import { Text, TouchableOpacity,StyleSheet,View, Image, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {PRIMARY_COLOR} from '../../constant/Color';
function Button({
    icon,
    title,
    image,
    onPress,
    customButtonStyle,
    customIconStyle,
    CustomIcon=null,
    iconSize=24,
    customTextStyle,
    isLoading
}) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container,customButtonStyle]} disabled={isLoading}>
                {CustomIcon}
                {image && <Image source={{uri:image}} style={{width:iconSize,height:iconSize}}/>}
                {icon && <FontAwesome name={icon} size={iconSize} color="black" style={[styles.iconStyle,customIconStyle]}/>}
                {title && !isLoading && <Text style={[{marginLeft:icon?10:0},styles.buttonText,customTextStyle]}>{title}</Text>}
                {isLoading && <ActivityIndicator color={'white'}/>}
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:60,
        backgroundColor:PRIMARY_COLOR,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        fontFamily:'Primary-Bold',
        color:'white'
    },
    iconStyle:{
        color:'white'
    },
    
})
export default Button;
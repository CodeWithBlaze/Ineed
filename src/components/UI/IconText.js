import React from 'react';
import { Text,View,StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
function IconText({icon,iconSize=24,iconColor='white',title,customContainerStyle,customTextStyle,onPress=null}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container,customContainerStyle]}>
            {icon && <FontAwesome name={icon} size={iconSize} color={iconColor} />}
            {title && <Text style={[styles.textStyle,customTextStyle]}>{title}</Text>}
            </View>
        </TouchableWithoutFeedback>        
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3
    },
    textStyle:{
        fontFamily:'Primary-Bold',
        fontSize:16,
        marginLeft:5
    }
})
export default IconText;
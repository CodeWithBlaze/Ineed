import React from 'react';
import { Text,View,StyleSheet, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
function IconText({icon,iconSize=24,iconColor='white',title,customContainerStyle,customTextStyle,onPress=null,isLoading,activityColor}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container,customContainerStyle]}>
            {icon && <FontAwesome name={icon} size={iconSize} color={iconColor} />}
            {title && !isLoading && <Text style={[styles.textStyle,customTextStyle]}>{title}</Text>}
            {isLoading && <ActivityIndicator color={activityColor||'white'} style={{marginHorizontal:5}}/>}
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
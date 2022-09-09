import React from 'react';
import { Text,StyleSheet } from 'react-native';

function LinkText({title,onPress,customStyle}) {
    return (
        <Text style={[styles.container,customStyle]} onPress={onPress}>{title}</Text>
    );
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
        fontFamily:'Primary-Bold',
        textAlign:'center'
    }
})
export default LinkText;
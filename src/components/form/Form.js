import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { PRIMARY_COLOR } from '../../constant/Color';

function Form({children,customStyle,logoVisible}) {
    return (
        <View style={[styles.container,customStyle]}>
            {logoVisible && <Text style={styles.logoText}>IneeD</Text>}
            {children}
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'white',
        padding:30,
        flexDirection:'column',
        alignItems:'center',
    },
    logoText:{
        fontFamily:'Brand',
        fontSize:50,
        width:'100%',
        textAlign:'center',
        color:PRIMARY_COLOR,
        marginBottom:15
    }
})
export default Form;
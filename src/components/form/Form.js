import React from 'react';
import {View,StyleSheet,Text, ScrollView, Keyboard, KeyboardAvoidingView,Platform} from 'react-native';
import { PRIMARY_COLOR } from '../../constant/Color';

function Form({children,customStyle,logoVisible}) {
    return (
        <KeyboardAvoidingView style={{flex:1,width:'100%'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
        <ScrollView 
        keyboardShouldPersistTaps="handled"
        style={[styles.container,customStyle]} contentContainerStyle={{alignItems:'center'}}>
            {logoVisible && <Text style={styles.logoText}>IneeD</Text>}
            {children}
        </ScrollView>
        </KeyboardAvoidingView>
        
    );
}
const styles = StyleSheet.create({
    
    container:{
        width:'100%',
        backgroundColor:'white',
        padding:30,
        flexDirection:'column',
        overflow:'hidden'
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
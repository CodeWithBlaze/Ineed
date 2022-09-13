import React from 'react';
import {TextInput,StyleSheet,Text} from 'react-native';
import { PRIMARY_COLOR } from '../../constant/Color';
import InfoHeadingText from './InfoHeadingText';
function InputBox({
    placeholder,
    value,
    setValue,
    customStyle,
    type,
    secureEntry,
    onError,
    multiline=false
}) {
    return (
        <>
        <TextInput
            placeholderTextColor={PRIMARY_COLOR}
            placeholder={placeholder}
            value={value}
            keyboardType={type}
            secureTextEntry={secureEntry?true:false}
            onChangeText={(nt)=>setValue(nt)}
            style={[styles.container,customStyle,onError?styles.errorStyle:null]}
            multiline={multiline}
        />
        {onError && <InfoHeadingText info={onError}/>}
        </>
        
        
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        paddingLeft:30,
        fontFamily:'Primary-Bold',
        borderRadius:30,
        backgroundColor:'#EFEEFF',
        color:PRIMARY_COLOR,
        marginBottom:15
    },
    errorStyle:{
        borderWidth:2,
        borderColor:'red'
    }
    
})
export default InputBox;
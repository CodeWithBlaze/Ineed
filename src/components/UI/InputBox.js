import React from 'react';
import {TextInput,StyleSheet} from 'react-native';
import { PRIMARY_COLOR } from '../../constant/Color';
function InputBox({placeholder,value,setValue,customStyle,type,secureEntry}) {
    return (
        <TextInput
        placeholderTextColor={PRIMARY_COLOR}
        placeholder={placeholder}
        value={value}
        keyboardType={type}
        secureTextEntry={secureEntry?true:false}
        onChangeText={(nt)=>setValue(nt)}
        style={[styles.container,customStyle]}
        />
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
    }
})
export default InputBox;
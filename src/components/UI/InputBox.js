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
    multiline=false,
    validator,
    name
}) {
    function hasValidationFailed(){
        if(name && name!=null && name!='' && validator && validator.isFieldInError(name)){
            const errors = validator.getErrorsInField(name);
            if(errors.length > 0) return {hasError:true,errors:errors}
            else return {hasError:false};
        }
        else
            return {hasError:false};

    }
    const checkInput  = hasValidationFailed()
    return (
        <>
        <TextInput
            placeholderTextColor={PRIMARY_COLOR}
            placeholder={placeholder}
            value={value}
            keyboardType={type}
            secureTextEntry={secureEntry?true:false}
            onChangeText={(nt)=>setValue(nt)}
            style={[styles.container,customStyle,checkInput.hasError?styles.errorStyle:null]}
            multiline={multiline}
        />
        {  checkInput.hasError &&
          <InfoHeadingText info={checkInput.errors[0]} customTextStyle={{color:'red',textAlign:'center'}}/>
        }
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
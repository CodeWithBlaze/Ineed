import React, { useState } from 'react';
import {StyleSheet,Image,View} from 'react-native';
import SafeAreaView from '../../components/container/SafeAreaView';
import { useNavigation } from '@react-navigation/native';
import {DARK_PRIMARY_COLOR, PRIMARY_COLOR} from '../../constant/Color';
import Form from '../../components/form/Form';
import InputBox from '../../components/UI/InputBox';
import Button from '../../components/UI/Button';
import LinkText from '../../components/UI/LinkText';
import { useDispatch, useSelector } from 'react-redux';
import { showErrorToast } from '../../utils/toast/Toast';
import { useValidation } from 'react-native-form-validator';
import { AuthValidator } from '../../utils/validations/AuthValidation';
import { SignInActions } from '../../backend/slices/SignInSlice';
import GoogleSignIn from '../../backend/hooks/GoogleSignIn';

function Login(props) {
    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const validator = useValidation({state:{email,password}});
    const dispatch = useDispatch();
    //----------------------------------------redux variables--------------------------
    const isLoading = useSelector(state=>state.signin.isLoading);
    const error = useSelector(state=>state.signin.error);
    //-----------------------------------------function---------------------------------
    function onSubmit(){
        const authAction = {type:SignInActions.SignInStarted.type,payload:{email,password,method}};
        if(AuthValidator(validator))
            dispatch(authAction)
    }
    return (
        <SafeAreaView customStyle={customStyles.container}>
            <Image source={{uri:'https://res.cloudinary.com/codecafe/image/upload/v1662698767/IneedAsset/WorkingMan_jk1i6f.png'}}
                style={styles.image}
            />
            <Form customStyle={customStyles.form} logoVisible>
                <InputBox
                placeholder={'Email'}
                value={email}
                type={'email-address'}
                setValue={setEmail}
                name={'email'}
                validator={validator}
                />
                <InputBox
                placeholder={'Password'}
                value={password}
                type={'default'}
                secureEntry={true}
                setValue={setPassword}
                name={'password'}
                validator={validator}
                />
                <Button
                title={'Sign In'}
                isLoading={isLoading}
                onPress={onSubmit}
                customButtonStyle={customStyles.button}
                customTextStyle={customStyles.buttonText}
                />
                <View style={styles.providerContainer}>
                    <GoogleSignIn/>
                </View>
                <LinkText 
                title={'Do not have a account ? Create one'} 
                customStyle={customStyles.loginText}
                onPress={()=>navigation.navigate('signup')}
                />
            </Form>
            {error && showErrorToast(error,()=>dispatch({type:SignInActions.hideError.type}))}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    image:{
        marginTop:15,
        width:240,
        height:240,
        marginBottom:5
    },
    providerContainer:{
        marginTop:15,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:15
    }
})
const customStyles = {
    container:{
        backgroundColor:PRIMARY_COLOR,
        flex:1,
        alignItems:'center'
    },
    form:{
        flex:1,
        elevation:60,
        borderTopRightRadius:90,
        borderTopLeftRadius:30,
    },
    button:{
        marginTop:15,
        backgroundColor:DARK_PRIMARY_COLOR,
        elevation:5,
        borderRadius:30,
    },
    buttonText:{
        fontSize:16
    },
    loginText:{
        color:DARK_PRIMARY_COLOR
    }
}
export default Login;
import React, { useState } from 'react';
import {StyleSheet,Image,View} from 'react-native';
import SafeAreaView from '../../components/container/SafeAreaView';
import { useNavigation } from '@react-navigation/native';
import {DARK_PRIMARY_COLOR, PRIMARY_COLOR} from '../../constant/Color';
import Form from '../../components/form/Form';
import InputBox from '../../components/UI/InputBox';
import Button from '../../components/UI/Button';
import { FacebookProvider, GoogleProvider } from '../../components/provider/Providers';
import LinkText from '../../components/UI/LinkText';

function Signup(props) {
    const navigation = useNavigation();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    return (
        
        <SafeAreaView customStyle={customStyles.container}>
            <Image source={{uri:'https://res.cloudinary.com/codecafe/image/upload/v1662662586/IneedAsset/Signup_form_m7cybv.png'}}
                style={styles.image}
            />
            <Form customStyle={customStyles.form} logoVisible>
                <InputBox
                placeholder={'Name'}
                value={name}
                type={'default'}
                setValue={setName}
                />
                <InputBox
                placeholder={'Email'}
                value={email}
                type={'email-address'}
                setValue={setEmail}
                />
                <InputBox
                placeholder={'Password'}
                value={password}
                type={'default'}
                secureEntry={true}
                setValue={setPassword}
                />
                <Button
                title={'Create Account'}
                customButtonStyle={customStyles.button}
                customTextStyle={customStyles.buttonText}
                />
                <View style={styles.providerContainer}>
                    <GoogleProvider title={'Sign Up'}/>
                    <FacebookProvider title={'Sign Up'}/>
                </View>
                <LinkText 
                title={'Already have a account ? Login here'} 
                customStyle={customStyles.loginText}
                onPress={()=>navigation.navigate('login')}
                />
            </Form>
            
        </SafeAreaView>
        
    );
}
const styles = StyleSheet.create({
    keyView:{flex:1},
    image:{
        marginTop:15,
        width:200,
        height:200,
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
export default Signup;
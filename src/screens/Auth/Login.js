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

function Login(props) {
    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
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
                />
                <InputBox
                placeholder={'Password'}
                value={password}
                type={'default'}
                secureEntry={true}
                setValue={setPassword}
                />
                <Button
                title={'Sign In'}
                customButtonStyle={customStyles.button}
                customTextStyle={customStyles.buttonText}
                />
                <View style={styles.providerContainer}>
                    <GoogleProvider title={'Sign In'}/>
                    <FacebookProvider title={'Sign In'}/>
                </View>
                <LinkText 
                title={'Do not have a account ? Create one'} 
                customStyle={customStyles.loginText}
                onPress={()=>navigation.navigate('signup')}
                />
            </Form>
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
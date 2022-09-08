import React from 'react';
import {Text} from 'react-native';
import SafeAreaView from '../../components/container/SafeAreaView';
import { useNavigation } from '@react-navigation/native';
function Login(props) {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Text>This is Login in Screen</Text>
            
        </SafeAreaView>
    );
}

export default Login;
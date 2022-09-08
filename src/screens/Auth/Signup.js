import React from 'react';
import {Text} from 'react-native';
import SafeAreaView from '../../components/container/SafeAreaView';
import { useNavigation } from '@react-navigation/native';
function Signup(props) {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Text>
                This is Signup page
            </Text>
        </SafeAreaView>
    );
}

export default Signup;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Auth/Login';
import Signup from '../../screens/Auth/Signup';
const Stack = createStackNavigator();

function Auth(props) {
    
    return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
    );
}

export default Auth;
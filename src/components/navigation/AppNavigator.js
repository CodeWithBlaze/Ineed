import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import {Text} from 'react-native';
function Home(){
    return <Text>Hello World</Text>
}
function AppNavigator(props) {
    
    return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    );
}

export default AppNavigator;
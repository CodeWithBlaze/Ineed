import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../BottomNavigationScreens/common/Chat';
import BottomNavigation from './BottomNavigation';
import MessageScreen from '../BottomNavigationScreens/common/MessageScreen';

function AppNavigation(props) {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Main" component={BottomNavigation} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="MessageScreen" component={MessageScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigation;
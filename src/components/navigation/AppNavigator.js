import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from '../../screens/navigation/BottomNavigation';

const Stack = createStackNavigator();

function AppNavigator(props) {
    
    return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="bottomNavigation" component={BottomNavigation} />
    </Stack.Navigator>
    );
}

export default AppNavigator;
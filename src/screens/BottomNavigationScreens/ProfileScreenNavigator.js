import { createStackNavigator } from '@react-navigation/stack';
import Profile from './ProfileNavigation/Profile';



const Stack = createStackNavigator();

function ProfileScreenNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default ProfileScreenNavigator;
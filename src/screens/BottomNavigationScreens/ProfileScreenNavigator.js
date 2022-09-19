import { createStackNavigator } from '@react-navigation/stack';
import EditProfile from './ProfileNavigation/EditProfile';
import Profile from './ProfileNavigation/Profile';



const Stack = createStackNavigator();

function ProfileScreenNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

export default ProfileScreenNavigator;
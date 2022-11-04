import { createStackNavigator } from '@react-navigation/stack';
import EditProfile from './ProfileNavigation/EditProfile';
import MyBookings from './ProfileNavigation/MyBookings';
import MyJobs from './ProfileNavigation/MyJobs';
import Profile from './ProfileNavigation/Profile';



const Stack = createStackNavigator();

function ProfileScreenNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="MyBookings" component={MyBookings} />
      <Stack.Screen name="MyJobs" component={MyJobs} />
    </Stack.Navigator>
  );
}

export default ProfileScreenNavigator;
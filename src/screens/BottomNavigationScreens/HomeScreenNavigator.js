import { createStackNavigator } from '@react-navigation/stack';
import JobDetails from './common/JobDetails';
import Home from './HomeNavigation/Home';
const Stack = createStackNavigator();

function HomeScreenNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="JobDetail" component={JobDetails} />
    </Stack.Navigator>
  );
}

export default HomeScreenNavigator;
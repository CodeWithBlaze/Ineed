import { createStackNavigator } from '@react-navigation/stack';
import JobDetails from './common/JobDetails';
import Search from './SearchNavigation/Search';


const Stack = createStackNavigator();

function SearchScreenNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="JobDetail" component={JobDetails} />
    </Stack.Navigator>
  );
}

export default SearchScreenNavigator;
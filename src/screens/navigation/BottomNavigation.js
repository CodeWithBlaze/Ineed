import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import {LIGHT_GREY_COLOR} from '../../constant/Color';
import CircularIconButton from '../../components/UI/CircularIconButton';
import { Entypo } from '@expo/vector-icons';
import JobForm from '../BottomNavigationScreens/JobForm';
import HomeScreenNavigator from '../BottomNavigationScreens/HomeScreenNavigator';
import SearchScreenNavigator from '../BottomNavigationScreens/SearchScreenNavigator';
import ProfileScreenNavigator from '../BottomNavigationScreens/ProfileScreenNavigator';
import Notification from '../BottomNavigationScreens/Notification';


const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle:{
            borderTopLeftRadius:25,
            borderTopRightRadius:25,
            height:60,
            elevation:5
        },
        tabBarActiveTintColor:'black',
        tabBarInactiveTintColor:LIGHT_GREY_COLOR
    }}>
      <Tab.Screen name="home" component={HomeScreenNavigator} options={{
        tabBarIcon:({focused})=><FontAwesome name="home" size={24} color={focused?'black':LIGHT_GREY_COLOR}/>,
       }}/>
      <Tab.Screen name="search" component={SearchScreenNavigator} options={{
        tabBarIcon:({focused})=><FontAwesome name="search" size={20} color={focused?'black':LIGHT_GREY_COLOR}/>,
       }}/>
      <Tab.Screen name="job" component={JobForm} options={{
        tabBarButton:(props)=><CircularIconButton onPress={props.onPress} CustomIcon={<Entypo name="plus" size={50} color="white" />} size={70} customButtonStyle={customStyle.addJobButton}/>,
       }}/>
      <Tab.Screen name="notification" component={Notification} options={{
        tabBarIcon:({focused})=><FontAwesome name="bell" size={20} color={focused?'black':LIGHT_GREY_COLOR}/>,
       }}/>
      <Tab.Screen name="profile" component={ProfileScreenNavigator} options={{
        tabBarIcon:({focused})=><FontAwesome name="user" size={20} color={focused?'black':LIGHT_GREY_COLOR}/>,
       }}/>
    </Tab.Navigator>
  );
}
const customStyle={
  addJobButton:{
    bottom:30,
    elevation:5
  }
}
export default BottomNavigation;
import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { useSelector } from 'react-redux';
import Auth from './src/components/navigation/Auth';
import AppNavigation from './src/screens/navigation/AppNavigation';

function MainApp(props) {
    const user = useSelector(state=>state.user);
    return (
        <NavigationContainer>
        <RootSiblingParent>
            {
                user ? <AppNavigation/>:<Auth/>
            }
        </RootSiblingParent>
        </NavigationContainer>
    );
}

export default MainApp;
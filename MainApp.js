import { NavigationContainer } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';
import { useDispatch, useSelector } from 'react-redux';
import { authChangeListener } from './src/backend/functions/Auth';
import Auth from './src/components/navigation/Auth';
import AppNavigation from './src/screens/navigation/AppNavigation';

function MainApp(props) {
    const user = useSelector(state=>state.signup.user);
    const dispatch = useDispatch()
    const activateAuthChangeListener = useCallback(()=>{
            authChangeListener(dispatch);
    },[])
    
    useEffect(()=>
        activateAuthChangeListener()
    ,[activateAuthChangeListener])
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
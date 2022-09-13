import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import Auth from './src/components/navigation/Auth';
import BottomNavigation from './src/screens/navigation/BottomNavigation';
export default function App() {
  const [fontsLoaded] = useFonts({
    'Brand': require('./assets/fonts/Pacifico.ttf'),
    'Primary-Bold':require('./assets/fonts/Quicksand-Bold.ttf'),
    'Primary-Medium':require('./assets/fonts/Quicksand-Medium.ttf'),
    'Primary-Regular':require('./assets/fonts/Quicksand-Regular.ttf'),
    'Primary-Semibold':require('./assets/fonts/Quicksand-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <RootSiblingParent>
        {
          true ? <BottomNavigation/>:<Auth/>
        }
      </RootSiblingParent>
    </NavigationContainer>
  );
}

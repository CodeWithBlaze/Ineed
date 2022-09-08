import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/components/navigation/AppNavigator';
import Auth from './src/components/navigation/Auth';
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
        {
          false ? <AppNavigator/>:<Auth/>
        }
    </NavigationContainer>
  );
}

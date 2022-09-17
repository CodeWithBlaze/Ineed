import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import MainApp from './MainApp';
import { Provider } from 'react-redux';
import store from './src/backend/slices/index';



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
    <Provider store={store}>
      <MainApp/>
    </Provider>
  );
}

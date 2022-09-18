//----------------------------------dependencies-------------------------------------
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp,getApps,getApp} from 'firebase/app';
import {
    initializeAuth,
    getReactNativePersistence,
    getAuth
} from 'firebase/auth/react-native';
//-------------------------------------variables-------------------------------------
let app = null;
let auth = null;
//-------------------------------------config-------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyB6fowL9N19OQkCejLwOOaZjByaEbxYonE",
    authDomain: "ineed-3fdde.firebaseapp.com",
    projectId: "ineed-3fdde",
    storageBucket: "ineed-3fdde.appspot.com",
    messagingSenderId: "1050406836673",
    appId: "1:1050406836673:web:14e628ddc71b19c5f5b740"
};
//-------------------------------------firebase apps-------------------------------------
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
    });
    
    } else {
    app = getApp();
    auth = getAuth(app);
}
export {
    app,
    auth
}
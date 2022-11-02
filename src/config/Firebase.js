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
    apiKey: "AIzaSyBJJjm-xFgQb18v2h9cvwSYPooOI424DMo",
    authDomain: "ineed-87083.firebaseapp.com",
    projectId: "ineed-87083",
    storageBucket: "ineed-87083.appspot.com",
    messagingSenderId: "800443487314",
    appId: "1:800443487314:web:788c842fc7eaf8af27bb8b"
};
//-------------------------------------firebase apps-------------------------------------
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig)
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
    });
    } else {
    app = getApp();
    auth = getAuth(app);
}


export {
    app,
    auth,
}
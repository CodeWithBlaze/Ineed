import React, { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { GoogleAuthProvider } from 'firebase/auth';
import { googleSignIn } from '../functions/Auth';
import { GoogleProvider } from '../../components/provider/Providers';


WebBrowser.maybeCompleteAuthSession();
function GoogleSignIn(props) {
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
        {
          clientId: '1050406836673-r776s2nvuqfan3igkohoh275tkdhu6un.apps.googleusercontent.com',
        },
    );
    useEffect(() => {
        if (response?.type === 'success') {
          const { id_token } = response.params;
          const credential = GoogleAuthProvider.credential(id_token);
          googleSignIn(credential);
        }
    }, [response]);
    return (
       <GoogleProvider title={'Sign In'} onPress={()=>promptAsync()}/>
    );
}

export default GoogleSignIn;
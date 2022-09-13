import React from 'react';
import {View,StatusBar as st} from 'react-native';
import { BACKGROUND_COLOR, PRIMARY_COLOR } from '../../constant/Color';
import { StatusBar } from 'expo-status-bar';
function SafeAreaView({children,customStyle}) {
    return (
        <View style={[{paddingTop:st.currentHeight,backgroundColor:BACKGROUND_COLOR},customStyle]}>
            {children}
            <StatusBar style="light" backgroundColor={PRIMARY_COLOR}/>
        </View>
    );
}

export default SafeAreaView;
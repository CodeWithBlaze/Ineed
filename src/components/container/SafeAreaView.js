import React from 'react';
import {View,StatusBar} from 'react-native';
import { BACKGROUND_COLOR } from '../../constant/Color';
function SafeAreaView({children,customStyle}) {
    return (
        <View style={[{paddingTop:StatusBar.currentHeight,backgroundColor:BACKGROUND_COLOR},customStyle]}>
            {children}
        </View>
    );
}

export default SafeAreaView;
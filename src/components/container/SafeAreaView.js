import React from 'react';
import {View,StatusBar} from 'react-native';
function SafeAreaView({children,customStyle}) {
    return (
        <View style={[{paddingTop:StatusBar.currentHeight},customStyle]}>
            {children}
        </View>
    );
}

export default SafeAreaView;
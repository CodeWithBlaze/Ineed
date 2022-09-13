import React from 'react';
import {View,StyleSheet} from 'react-native';
import { LIGHT_GREY_COLOR } from '../../constant/Color';
function Seperator({customStyle}) {
    return (
        <View style={[styles.container,customStyle]}>

        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        borderWidth:0.5,
        borderColor:LIGHT_GREY_COLOR,
        
    }
})
export default Seperator;
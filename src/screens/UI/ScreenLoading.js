import React from 'react';
import { View,StyleSheet,ActivityIndicator } from 'react-native';
import {PRIMARY_COLOR} from '../../constant/Color';
function ScreenLoading({size='large',color=PRIMARY_COLOR}) {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} color={color}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    }
})
export default ScreenLoading;
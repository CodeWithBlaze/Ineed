import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { LIGHT_GREY_COLOR } from '../../constant/Color';

function ProgressBar({progress}) {
    return (
        <View style={styles.container}>
            <View style={[styles.bar,{width:progress}]}>
                <Text style={styles.progressText}>{progress}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:30,
        backgroundColor:LIGHT_GREY_COLOR,
        borderRadius:20,
        overflow:'hidden',
        marginBottom:30
    },
    bar:{
        justifyContent:'center',
        flex:1,
        backgroundColor:'#00C851',
        alignItems:'center'
    },
    progressText:{
        fontSize:12,
        fontFamily:'Primary-Bold',
        color:'white'
    }
})
export default ProgressBar;
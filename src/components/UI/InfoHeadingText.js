import React from 'react';
import {Text,StyleSheet} from 'react-native';
import { DARK_GREY } from '../../constant/Color';

function InfoHeadingText({info,customTextStyle}) {
    return (
        <Text style={[styles.formInfoHeading,customTextStyle]}>{info}</Text>
    );
}
const styles = StyleSheet.create({
    formInfoHeading:{
        fontSize:14,
        alignSelf:'flex-start',
        marginBottom:15,
        fontFamily:'Primary-Bold',
        color:DARK_GREY
    },
})
export default InfoHeadingText;
import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

function InfoText({customContainerStyle,customTextStyle,customValueStyle,heading,value}) {
    return (
        <View style={[styles.container,customContainerStyle]}>
            <Text style={[styles.heading,customTextStyle]}>{heading}</Text>
            <Text style={[styles.value,customValueStyle]}>{value}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    
})
export default InfoText;
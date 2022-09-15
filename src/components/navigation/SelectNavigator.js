import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { PRIMARY_COLOR } from '../../constant/Color';

function SelectNavigator({children,optionList=[],active,updateActiveComponent}) {
    if(optionList.length === 0)
        return null;
    else if(optionList.length > 3)
        throw new Error('Element Exceeds more than 3')
    
    
    return (
        <>
        <View style={styles.container}>
            {optionList.map(option=><Text key={option.id} style={[styles.options,active.id === option.id ? styles.activeOption:null]} onPress={()=>updateActiveComponent(option)}>{option.title}</Text>)}
        </View>
        <View style={styles.showDetails}>
            {children}
        </View>        
        </>
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'white',
        padding:30,
        borderRadius:15,
        elevation:15
    },
    options:{
        fontFamily:'Primary-Bold',
        color:'black',
    },
    activeOption:{
        color:PRIMARY_COLOR,
        borderBottomWidth:3,
        paddingBottom:10,
        borderBottomColor:PRIMARY_COLOR,

    },
    showDetails:{
        width:'100%',
        marginTop:15,
        borderRadius:15,
        elevation:15,
        height:500,
        overflow:'hidden',
        backgroundColor:'white'
    }
})
export default SelectNavigator;
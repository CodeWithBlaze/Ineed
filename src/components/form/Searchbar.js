import React from 'react';
import { View,StyleSheet,TextInput } from 'react-native';
import { DARK_PRIMARY_COLOR } from '../../constant/Color';
import Button from '../UI/Button';
import InputBox from '../UI/InputBox';
function Searchbar({onPress,value,setValue}) {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
            <InputBox 
            placeholder={'Search'}
            customStyle={customStyle.searchBar}
            value={value}
            setValue={setValue} 
            />
            <Button icon={'search'} customButtonStyle={customStyle.searchButton} iconSize={15}
            onPress={onPress}
            />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        paddingTop:15,
    },
    searchContainer:{
        width:'100%',
        alignItems:'center',
        position:'relative'
    },
    textBox:{

    },

})
const customStyle = {
    searchBar:{
        width:'90%',
        borderRadius:5
    },
    searchButton:{
        width:45,
        height:45,
        borderRadius:5,
        position:'absolute',
        right:22,
        top:2,
        backgroundColor:DARK_PRIMARY_COLOR
    }
}
export default Searchbar;
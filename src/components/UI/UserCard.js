import React from 'react';
import { View,StyleSheet } from 'react-native';
import { LIGHT_GREY_COLOR } from '../../constant/Color';
import CircularImage from './CicularImage';
import IconText from './IconText';

function UserCard({customContainerStyle,rating,image}) {
    return (
        <View style={[styles.userinfo,customContainerStyle]}>
                <CircularImage 
                url={image}
                size={80}
                
                />
                <IconText 
                title={rating} 
                icon={'star'} 
                iconSize={20} 
                iconColor='orange'
                customContainerStyle={customStyle.textContainer}
                customTextStyle={{fontSize:12}}
                />
        </View>
    );
}
const styles = StyleSheet.create({
    userinfo:{
        width:'30%',
        alignItems:'center',
        paddingTop:15,
        // backgroundColor:'red'
    },
})
const customStyle = {
    textContainer:{
        alignItems:'center',
        marginTop:15,
        borderWidth:1,
        borderColor:LIGHT_GREY_COLOR,
        padding:10,
        borderRadius:25
    }
}
export default UserCard;
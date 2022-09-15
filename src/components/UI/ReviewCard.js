import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import CircularImage from './CicularImage';
import { AirbnbRating } from 'react-native-ratings';
import { DARK_GREY, LIGHT_GREY_COLOR, PRIMARY_COLOR } from '../../constant/Color';
function ReviewCard({item,size,rating}) {
    return (
       <View style={styles.container}>
            <View style={styles.userDetailContainer}>
                <CircularImage
                url={item.image}
                size={size}
                />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{item.name}</Text>
                    <AirbnbRating
                        count={5}
                        showRating={false}
                        defaultRating={item.rating}
                        size={12}
                        isDisabled={true}
                        ratingContainerStyle={{alignSelf:'flex-start',marginTop:5}}
                    />
                </View>
            </View>
            <Text style={styles.review}>{item.review}</Text>
       </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:270,
        padding:15,
        borderRadius:15,
        borderWidth:0.5,
        borderColor:LIGHT_GREY_COLOR,
        backgroundColor:PRIMARY_COLOR,
        elevation:5,
        marginRight:15
    },
    userDetailContainer:{
        flexDirection:'row',
    },
    userInfo:{
        width:'80%',
        backgrondColor:'red',
        marginLeft:10,
        paddingHorizontal:5,
        marginBottom:10
    },
    name:{
        width:'100%',
        fontFamily:'Primary-Semibold',
        color:'white'
    },
    review:{
        fontFamily:'Primary-Semibold',
        fontSize:13,
        color:'white'
    }
})
export default ReviewCard;
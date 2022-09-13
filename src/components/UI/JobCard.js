import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text,View,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import { DARK_GREY, LIGHT_GREY_COLOR } from '../../constant/Color';
import CircularImage from './CicularImage';
import IconText from './IconText';
function JobCard({item,customContainerStyle}) {
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('JobDetail')}>

        <View style={[styles.container,customContainerStyle]}>
            <View style={styles.userinfo}>
                <CircularImage 
                url={item.image}
                size={80}
                
                />
                <IconText 
                title={item.rating} 
                icon={'star'} 
                iconSize={20} 
                iconColor='orange'
                customContainerStyle={customStyle.textContainer}
                customTextStyle={{fontSize:12}}
                />
            </View>
            <View style={styles.userDetails}>
                <Text style={styles.JobPerson}>{item.name}</Text>
                <Text style={styles.Job}>{item.service}</Text>
                <View style={styles.JobDetails}>
                <IconText 
                icon={'money'} 
                iconSize={14} 
                iconColor={DARK_GREY}
                title={item.charge}
                customContainerStyle={{width:'50%'}}
                customTextStyle={{fontSize:14,color:DARK_GREY,marginRight:15}}
                />
                <IconText 
                icon={'tv'} 
                iconSize={14} 
                iconColor={DARK_GREY}
                title={item.mode}
                customContainerStyle={{width:'50%'}}
                customTextStyle={{fontSize:14,color:DARK_GREY}}
                />
                <IconText 
                icon={'language'} 
                iconSize={14} 
                iconColor={DARK_GREY}
                title={item.language}
                customContainerStyle={{width:'50%'}}
                customTextStyle={{fontSize:14,color:DARK_GREY,marginRight:15}}
                />
                <IconText 
                icon={'calendar'} 
                iconSize={14} 
                iconColor={DARK_GREY}
                title={item.date}
                customContainerStyle={{width:'50%'}}
                customTextStyle={{fontSize:14,color:DARK_GREY}}
                />
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:350,
        minHeight:200,
        overflow:'hidden',
        borderRadius:15,
        backgroundColor:'white',
        
    },
    JobDetails:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    userinfo:{
        width:'30%',
        alignItems:'center',
        paddingTop:15,
        // backgroundColor:'red'
    },
    userDetails:{
        padding:15,
        width:'70%',
        // backgroundColor:'green'
    },
    JobPerson:{
        fontFamily:'Primary-Bold',
        fontSize:18,
        marginBottom:5
    },
    Job:{
        color:DARK_GREY,
        fontFamily:'Primary-Bold',
        fontSize:15,
        marginBottom:15
    }

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
export default JobCard;
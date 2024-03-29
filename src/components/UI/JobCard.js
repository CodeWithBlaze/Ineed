import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text,View,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import { DARK_GREY } from '../../constant/Color';
import JobDetailsProperty from './JobDetailsProperty';
import UserCard from './UserCard';
function JobCard({item,customContainerStyle}) {
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('JobDetail',{id:item._id})}>

        <View style={[styles.container,customContainerStyle]}>
            <UserCard rating={item.user_uid.rating} image={item.user_uid.image}/>
            <View style={styles.userDetails}>
                <Text style={styles.JobPerson}>{item.title}</Text>
                <Text style={styles.Job}>{item.user_uid.name}</Text>
                <View style={styles.JobDetails}>
                <JobDetailsProperty 
                item={item} 
                iconColor={DARK_GREY} 
                textColor={DARK_GREY}
                size={14}
               
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
    
    userDetails:{
        padding:15,
        width:'70%',
        // backgroundColor:'green'
    },
    JobPerson:{
        fontFamily:'Primary-Bold',
        fontSize:16,
        marginBottom:5
    },
    Job:{
        color:DARK_GREY,
        fontFamily:'Primary-Bold',
        fontSize:15,
        marginBottom:15
    }

})

export default JobCard;
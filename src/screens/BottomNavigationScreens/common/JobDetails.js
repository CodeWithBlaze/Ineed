import React, { useState,useRef } from 'react';
import { ScrollView, Text,StyleSheet,View, FlatList } from 'react-native';
import SafeAreaView from '../../../components/container/SafeAreaView';
import SelectNavigator from '../../../components/navigation/SelectNavigator';
import IconText from '../../../components/UI/IconText';
import JobDetailsProperty from '../../../components/UI/JobDetailsProperty';
import ReviewCard from '../../../components/UI/ReviewCard';
import UserCard from '../../../components/UI/UserCard';
import { DARK_GREY, PRIMARY_COLOR } from '../../../constant/Color';
import { reviews } from '../../../temp/Data';
import Button from '../../../components/UI/Button';
import useFetchJob from '../../../hooks/useFetchJob';
import { extractTimeFromString } from '../../../utils/common/extra';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { booking_api } from '../../../constant/Data';
import { showErrorToast, showSuccessToast } from '../../../utils/toast/Toast';
import {NotificationActions} from '../../../backend/slices/NotificationSlice'
import useCountStudentEnrolled from '../../../hooks/useCountStudentEnrolled';
import ScreenLoading from '../../UI/ScreenLoading';

const iconColor = 'white';
const textColor = "white";
const size = 24;
const textSize = 16;



const OptionsList = [
    {
        id:0,
        title:'Description',
        
    },
    {
        id:1,
        title:'Detail',
        
    },
    {
        id:2,
        title:'Instructor',
    },
]

function JobDetails({route}) {
    const scrollRef = useRef();
    const job_id = route.params.id;
    const [jobDetails,setJobDetails,detailsLoading] = useFetchJob(job_id)
    const enrollCount = useCountStudentEnrolled(job_id)
    const [optionsList,setOptionsList] = useState(OptionsList);
    const [active,setActive] = useState(OptionsList[0]);
    const user = useSelector(state=>state.signup.user);
    const user_bookings = useSelector(state=>state.booking.bookings)
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch()
    function scrollClickHandler(id){
        if(optionsList[id] && optionsList[id].scrollCoords && optionsList[id].scrollCoords.y)
            scrollRef.current.scrollTo({y:optionsList[id].scrollCoords.y})
    }
    function updateActiveComponent(option){
        scrollClickHandler(option.id)
        setActive(option)
    }
    function setActiveOnScroll(scrollValue){
        
        if(scrollValue < optionsList[1].scrollCoords.y)
            setActive(optionsList[0]);
        else if(scrollValue < optionsList[2].scrollCoords.y)
            setActive(optionsList[1]);
        else
            setActive(optionsList[2]);
    }
    function isJobPresentInBooking(){
        return user_bookings.includes(job_id);
    }
    function onBook(){
        setLoading(true);
        axios.post(booking_api,{
            student_id:user.uid,
            job_id:job_id,
            valid_up_to:jobDetails.endingDate,
        })
        .then(res=>showSuccessToast('Booking confirmed'))
        .catch(err=>showErrorToast('Booking Failed'))
        .finally(()=>{
            setLoading(false);
            dispatch({type:NotificationActions.getNotificationStarted.type,payload:{user:user.uid}})
        })
    }
    function buttonBasedOnUser(){
        if(jobDetails && jobDetails.user_uid && jobDetails.user_uid.uid && user.uid === jobDetails.user_uid.uid){
            return <View>
                <Button 
                customButtonStyle={{...customStyle.actionBtn,marginBottom:0}}
                title={'Edit Job'}
                isLoading={loading}
                onPress={()=>onEdit()}
                customTextStyle={customStyle.actionText}
                />
                <Button 
                customButtonStyle={{...customStyle.actionBtn,backgroundColor:'#FF7F7F',borderWidth:1,borderColor:'red'}}
                title={'Delete Job'}
                isLoading={loading}
                onPress={()=>onDelete()}
                customTextStyle={{...customStyle.actionText,color:'red'}}
                />
            </View>
        }
        else if(!isJobPresentInBooking()){
            return <Button 
                customButtonStyle={customStyle.actionBtn}
                title={'Book Now'}
                isLoading={loading}
                onPress={()=>onBook()}
                customTextStyle={customStyle.actionText}
            />
        }
        else{
            return <Button 
            customButtonStyle={customStyle.actionBtn}
            title={'Cancel Booking'}
            isLoading={loading}
            onPress={()=>onCancel()}
            customTextStyle={customStyle.actionText}
            />
        }
    }
    function onCancel(){

    }
    function onEdit(){

    }
    function onDelete(){

    }
    if(detailsLoading)
        return <ScreenLoading/>
    return (
        <SafeAreaView customStyle={{flex:1,padding:15,paddingTop:60}}>
            <SelectNavigator 
            optionList={optionsList} 
            updateActiveComponent={updateActiveComponent}
            active={active}
            >
            <ScrollView 
            style={{flex:1,padding:15,backgroundColor:PRIMARY_COLOR}} 
            ref={scrollRef}
            onMomentumScrollEnd={(event)=>setActiveOnScroll(event.nativeEvent.contentOffset.y)}
            >
            <View  onLayout={(event)=>{
                const layout = event.nativeEvent.layout;
                const newOptions = [...OptionsList];
                newOptions[0].scrollCoords = layout;
                setOptionsList(newOptions);
            }}
            style={{margin:15}}
            >
            <Text style={styles.heading}>{jobDetails.title}</Text>
            <Text style={styles.description}>{jobDetails.description}</Text>
            {
                (jobDetails && jobDetails.user_uid &&  jobDetails.user_uid.uid && (user.uid !== jobDetails.user_uid.uid)) ?buttonBasedOnUser():null
            }
            </View>
            <View style={styles.propertyContainer} onLayout={(event)=>{
                const layout = event.nativeEvent.layout;
                OptionsList[1].scrollCoords = layout;
                const newOptions = [...OptionsList];
                newOptions[1].scrollCoords = layout;
                setOptionsList(newOptions);
            }}>
            <JobDetailsProperty 
            item={jobDetails} 
            iconColor={'white'} 
            textColor={'white'}
            customContainerStyle={{marginBottom:16}}
            showEndingDate={true}
            />
            <IconText 
                icon={'clock-o'} 
                iconSize={size} 
                iconColor={iconColor}
                title={extractTimeFromString(jobDetails.time)}
                customContainerStyle={{width:'30%',marginBottom:15}}
                customTextStyle={{fontSize:textSize,color:textColor,marginRight:15}}
            />
            {
                jobDetails.mode === 'physical' && <IconText 
                icon={'road'} 
                iconSize={size} 
                iconColor={iconColor}
                title={'2km'}
                customContainerStyle={{width:'50%',marginBottom:25}}
                customTextStyle={{fontSize:textSize,color:textColor,marginRight:15}}
            />
            }
            <IconText 
                icon={'users'} 
                iconSize={size} 
                iconColor={iconColor}
                title={'Currently Enrolled Student '+enrollCount}
                customContainerStyle={{width:'100%'}}
                customTextStyle={{fontSize:textSize,color:textColor,marginRight:15}}
            />
            {
                (jobDetails && jobDetails.user_uid &&  jobDetails.user_uid.uid && (user.uid !== jobDetails.user_uid.uid)) ?buttonBasedOnUser():null
            }
            </View>
            <View style={styles.instructor} onLayout={(event)=>{
                const layout = event.nativeEvent.layout;
                OptionsList[2].scrollCoords = layout;
                const newOptions = [...OptionsList];
                newOptions[2].scrollCoords = layout;
                setOptionsList(newOptions);
            }}>
            {jobDetails && jobDetails.user_uid && 
            <View style={styles.user}>
                    <UserCard rating={jobDetails.user_uid.rating || 0} image={jobDetails.user_uid.image}/>
                    <View style={styles.userDetails}>
                        <Text style={styles.JobPerson}>{jobDetails.user_uid.name}</Text>
                        <Text style={styles.Job}>{jobDetails.user_uid.profession}</Text>
                    </View>
            </View>
            }
                {jobDetails && jobDetails.user_uid && <Text style={[[styles.Job,styles.instructorDescription]]}>
                {jobDetails.user_uid.description}
                </Text>}
                
                <FlatList
                data={reviews}
                renderItem={({item})=><ReviewCard item={item} size={40}/>}
                horizontal={true}
                snapToInterval={285}
                showsHorizontalScrollIndicator={false}
                />
            </View>
            {
                buttonBasedOnUser()
            }
        </ScrollView>
            </SelectNavigator>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    heading:{
        fontFamily:'Primary-Bold',
        color:'white',
        fontSize:25,
        marginBottom:20
    },
    description:{
        fontFamily:'Primary-Semibold',
        fontSize:16,
        lineHeight:25,
        color:'white',
    },
    propertyContainer:{
        margin:15,
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:30,
        paddingTop:30,
        marginBottom:60
    },
    instructor:{
        backgroundColor:'white',
        padding:15,
        marginBottom:15,
        borderRadius:15,
        paddingBottom:30
    },
    JobPerson:{
        fontFamily:'Primary-Bold',
        fontSize:15,
        marginBottom:5
    },
    Job:{
        color:DARK_GREY,
        fontFamily:'Primary-Bold',
        fontSize:14,
        marginBottom:15
    },
    user:{
        flexDirection:'row',
    },
    userDetails:{
        marginTop:15,
        width:'60%',
        marginLeft:15
    },
    instructorDescription:{
        marginTop:15,
        marginLeft:5,
        lineHeight:20,
        marginBottom:30
    }
})
const customStyle = {
    actionBtn:{
        width:'100%',
        backgroundColor:'white',
        borderRadius:5,
        marginTop:20,
        marginBottom:60
    },
    actionText:{
        color:PRIMARY_COLOR
    }
}
export default JobDetails;
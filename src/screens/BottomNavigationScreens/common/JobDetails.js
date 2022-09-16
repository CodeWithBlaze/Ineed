import React, { useState,useRef } from 'react';
import { ScrollView, Text,StyleSheet,View, FlatList } from 'react-native';
import SafeAreaView from '../../../components/container/SafeAreaView';
import SelectNavigator from '../../../components/navigation/SelectNavigator';
import IconText from '../../../components/UI/IconText';
import JobDetailsProperty from '../../../components/UI/JobDetailsProperty';
import ReviewCard from '../../../components/UI/ReviewCard';
import UserCard from '../../../components/UI/UserCard';
import { DARK_GREY, PRIMARY_COLOR } from '../../../constant/Color';
import { cardData, reviews } from '../../../temp/Data';
import Button from '../../../components/UI/Button';


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

function JobDetails(props) {
    const scrollRef = useRef();
    const [optionsList,setOptionsList] = useState(OptionsList);
    const [active,setActive] = useState(OptionsList[0]);
    
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
            <Text style={styles.heading}>Job Title</Text>
            <Text style={styles.description}>The central place of “text” as a means of organising language in order to construct what people come to think of as “knowledge” is a phenomenon affecting all educators, students, and citizens of modern societies. This volume offers various voices and perspectives including those of Ron Carter and Michael Halliday on the role of text in education and society. </Text>
            <Button 
            customButtonStyle={customStyle.actionBtn}
            title={'Book Now'}
            customTextStyle={customStyle.actionText}
            />
            </View>
            <View style={styles.propertyContainer} onLayout={(event)=>{
                const layout = event.nativeEvent.layout;
                OptionsList[1].scrollCoords = layout;
                const newOptions = [...OptionsList];
                newOptions[1].scrollCoords = layout;
                setOptionsList(newOptions);
            }}>
            <JobDetailsProperty 
            item={cardData[0]} 
            iconColor={'white'} 
            textColor={'white'}
            customContainerStyle={{marginBottom:16}}
            />
            <IconText 
                icon={'clock-o'} 
                iconSize={size} 
                iconColor={iconColor}
                title={'12:45'}
                customContainerStyle={{width:'50%',marginBottom:15}}
                customTextStyle={{fontSize:textSize,color:textColor,marginRight:15,marginLeft:10}}
            />
            <IconText 
                icon={'road'} 
                iconSize={size} 
                iconColor={iconColor}
                title={'2km'}
                customContainerStyle={{width:'50%',marginBottom:25}}
                customTextStyle={{fontSize:textSize,color:textColor,marginRight:15,marginLeft:10}}
            />
            <IconText 
                icon={'users'} 
                iconSize={size} 
                iconColor={iconColor}
                title={'Currently Enrolled Student 50'}
                customContainerStyle={{width:'100%'}}
                customTextStyle={{fontSize:textSize,color:textColor,marginRight:15,marginLeft:10}}
            />
            <Button 
            customButtonStyle={customStyle.actionBtn}
            title={'Book Now'}
            customTextStyle={customStyle.actionText}
            />
            </View>
            <View style={styles.instructor} onLayout={(event)=>{
                const layout = event.nativeEvent.layout;
                OptionsList[2].scrollCoords = layout;
                const newOptions = [...OptionsList];
                newOptions[2].scrollCoords = layout;
                setOptionsList(newOptions);
            }}>
                <View style={styles.user}>
                    <UserCard rating={'4.3'} image={'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/156367-tv-news-feature-every-marvel-movie-and-show-to-watch-before-black-widow-image10-9lcwr2ywcm.jpg'}/>
                    <View style={styles.userDetails}>
                        <Text style={styles.JobPerson}>{'Mrs Kushina Uzumaki'}</Text>
                        <Text style={styles.Job}>{'UI/UX Designer,MongoDB developer'}</Text>
                    </View>
                </View>
                <Text style={[[styles.Job,styles.instructorDescription]]}>
                Kushina Uzumaki is the red-haired, willful mother of the titular protagonist Naruto Uzumaki. She was known for her fiery personality, her containment of the Nine-Tailed Beast Kurama, and her relationship with Naruto's father Minato Namikaze.
                However, she wasn't eclipsed by her famous partner, the Fourth Hokage. Though fans didn't get to see much of Kushina throughout the series, since her appearances were limited to the occasional flashback, she quickly became a fan favorite. Her love for Naruto and her strength of character shine through in the anime, leaving fans in tears when she makes her on-screen appearances.
                </Text>
                
                <FlatList
                data={reviews}
                renderItem={({item})=><ReviewCard item={item} size={40}/>}
                horizontal={true}
                snapToInterval={285}
                showsHorizontalScrollIndicator={false}
                />
            </View>
            <Button 
            customButtonStyle={customStyle.actionBtn}
            title={'Book Now'}
            customTextStyle={customStyle.actionText}
            />
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
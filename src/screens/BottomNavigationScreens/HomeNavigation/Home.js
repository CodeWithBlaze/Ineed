import React from 'react';
import { Text,StyleSheet,View, FlatList,Image, ScrollView } from 'react-native';
import SafeAreaView from '../../../components/container/SafeAreaView';
import {DARK_PRIMARY_COLOR, PRIMARY_COLOR} from '../../../constant/Color';
import Button from '../../../components/UI/Button';
import CicularImage from '../../../components/UI/CicularImage';
import { cardData, SponseredTeachers } from '../../../temp/Data';
import CategortList from '../../../components/UI/CategortList';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

function ListImageContainer({item}){
    if(item.type === 'spacers')
        return <Spacers space={80}/>
    return <View style={styles.imageContainer}>
        <CicularImage 
                size={160}
                customStyle={customStyle.images} 
                showRing
                url={item.image}
        />
    </View>
    
}
function Spacers({space}){
    return <View style={{width:space}}></View>
}
function Home(props) {
    const navigation = useNavigation();
    const user = useSelector(state=>state.signup.user);
    return (
        
        <SafeAreaView customStyle={{flex:1}}>
            <ScrollView>
            <View style={styles.sponsorContainer}>
                <Image source={{uri:'https://res.cloudinary.com/codecafe/image/upload/v1662745661/IneedAsset/Group_1062_nu91ec.png'}}
                style={{width:180,height:180,position:'absolute',top:-30,left:-50}}
                />
                <Image source={{uri:'https://res.cloudinary.com/codecafe/image/upload/v1662745661/IneedAsset/Group_1062_nu91ec.png'}}
                style={{width:180,height:180,position:'absolute',bottom:-30,right:-50}}
                />
                <Ionicons 
                name="chatbox-outline" 
                size={30} color="white" 
                style={styles.chatBox}
                onPress={()=>navigation.navigate('Chat')}
                />
                <View style={styles.headingText}>
                    <Text style={styles.mainHeading}>DAILY PICK</Text>
                    <Text style={styles.subHeading}>Best Teachers</Text>
                </View>
                <FlatList
                snapToInterval={250}
                decelerationRate={0}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                data={[{id:0,type:'spacers'},...SponseredTeachers,{id:SponseredTeachers.length + 1,type:'spacers'}]}
                renderItem={ListImageContainer}
                keyExtractor={item=>item.id}
                horizontal={true}
                />
                <View style={styles.callToAction}>
                    <Button icon={'bookmark'} size={20} customButtonStyle={customStyle.callToAction}/>
                    <Button title={'Try Now'} customButtonStyle={customStyle.mainBtn}
                    customTextStyle={{color:PRIMARY_COLOR,fontSize:16}}
                    />
                </View>
            </View>
            <CategortList type={'duration/one?id='+user.uid} category={'Explore'}/>
            <CategortList type={'duration/one?id='+user.uid} category={'Oneday Boost'}/>
            <CategortList type={'duration/week?id='+user.uid} category={'Weekly Dose'}/>
            <CategortList type={'duration/month?id='+user.uid} category={'Join Batch'} customContainerStyle={{marginBottom:60}}/>
            
            </ScrollView>
           
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    sponsorContainer:{
        paddingTop:30,
        height:400,
        backgroundColor:PRIMARY_COLOR,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        paddingBottom:40,
        overflow:'hidden',
        
    },
    imageContainer:{
        marginHorizontal:35,
    },
    headingText:{
        width:'100%',
        marginBottom:20
    },
    mainHeading:{
        fontFamily:'Primary-Semibold',
        fontSize:14,
        textAlign:'center',
        color:'white'
    },
    subHeading:{
        fontSize:22,
        fontFamily:'Primary-Bold',
        textAlign:'center',
        color:'white'
    },
    callToAction:{
        flexDirection:'row',
        justifyContent:'center'
    },
    chatBox:{
        position:'absolute',
        top:5,
        right:20
    }
    
})
const customStyle = {
    images:{
        elevation:15,
    },
    callToAction:{
        width:60,
        height:60,
        borderRadius:15,
        backgroundColor:DARK_PRIMARY_COLOR,
        marginRight:15,
        elevation:15
    },
    mainBtn:{
        backgroundColor:'white',
        width:160,
        borderRadius:10,
        elevation:15
    }
}
export default Home;
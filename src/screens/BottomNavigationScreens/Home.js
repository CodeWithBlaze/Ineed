import React from 'react';
import { Text,StyleSheet,View, FlatList, Dimensions, ScrollView } from 'react-native';
import SafeAreaView from '../../components/container/SafeAreaView';
import {DARK_PRIMARY_COLOR, PRIMARY_COLOR} from '../../constant/Color';
import { Entypo } from '@expo/vector-icons';
import Button from '../../components/UI/Button';
import CicularImage from '../../components/UI/CicularImage';
import { SponseredTeachers } from '../../temp/Data';

function ListImageContainer({item}){
    if(item.type)
        return <Spacers/>
    return <View style={styles.imageContainer}>
        <CicularImage 
                size={160}
                customStyle={customStyle.images} 
                showRing
                url={item.image}
        />
    </View>
    
}
function Spacers(){
    return <View style={{width:80}}></View>
}
function Home(props) {
    return (
        
        <SafeAreaView customStyle={{flex:1}}>
            <ScrollView>
            <View style={styles.sponsorContainer}>
                <Button 
                CustomIcon={<Entypo name="menu" size={40} color="white" />}
                customButtonStyle={customStyle.customMenuStyle}
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
            <View style={styles.CategoryJobContainer}>
                <Text style={styles.categoryText}>Explore</Text>
            </View>
            </ScrollView>
           
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    sponsorContainer:{
        height:450,
        backgroundColor:PRIMARY_COLOR,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        paddingBottom:40
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
    CategoryJobContainer:{
        marginTop:10,
        paddingHorizontal:30,
        paddingVertical:15,
        width:'100%',
        backgroundColor:'white'
    },
    categoryText:{
        fontSize:25,
        fontFamily:'Primary-Bold'    
    }
    
})
const customStyle = {
    customMenuStyle:{
        width:100,
        marginTop:15
    },
    images:{
        elevation:15,
    },
    callToAction:{
        width:60,
        height:60,
        borderRadius:15,
        backgroundColor:DARK_PRIMARY_COLOR,
        marginRight:15
    },
    mainBtn:{
        backgroundColor:'white',
        width:160,
        borderRadius:10
    }
}
export default Home;
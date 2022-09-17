import React from 'react';
import { FlatList } from 'react-native';
import JobCard from '../../components/UI/JobCard';
import {cardData} from '../../temp/Data';
import SafeAreaView from '../../components/container/SafeAreaView';
function Notification(props) {
    return (
        <SafeAreaView customStyle={customStyle.container}>
            <FlatList
                data={cardData}
                renderItem={({item})=><JobCard item={item} customContainerStyle={{marginBottom:15}} status={true``}/>}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}
const customStyle = {
    container:{
        paddingTop:35,
        alignItems:'center'
    }
}
export default Notification;
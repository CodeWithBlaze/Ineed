import React from 'react';
import { View,Text,FlatList,StyleSheet } from 'react-native';
import useFetchJob from '../../hooks/useFetchJob';
import JobCard from './JobCard';

function Spacers({space}){
    return <View style={{width:space}}></View>
}
function CardItemList({item}){
    if(item.type === 'spacers')
        return <Spacers space={30}/>
    return  <JobCard item={item} customContainerStyle={{marginRight:30}}/>
}
function CategortList({category,type,customContainerStyle}) {
    const [data,setData] = useFetchJob(type)
    if(data.length === 0)
    return null;
    return (
        <View style={[styles.CategoryJobContainer,customContainerStyle]}>
                <Text style={styles.categoryText}>{category}</Text>
                <FlatList
                style={{paddingLeft:30}}
                snapToInterval={380}
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                horizontal={true}
                data={[...data,{_id:1,type:'spacers'}]}
                renderItem={CardItemList}
                keyExtractor={item=>item._id}
                />
        </View>
    );
}
const styles = StyleSheet.create({
    CategoryJobContainer:{
        marginTop:10,
        paddingVertical:15,
        width:'100%',
        paddingBottom:0
    },
    categoryText:{
        paddingLeft:30,
        fontSize:25,
        fontFamily:'Primary-Bold',
        marginBottom:15    
    }
})
export default CategortList;
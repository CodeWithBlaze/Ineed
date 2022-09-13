import React, { useState } from 'react';
import {StyleSheet,ScrollView,View,Modal,Text, FlatList } from 'react-native';
import SafeAreaView from '../../../components/container/SafeAreaView';
import { DARK_GREY, PRIMARY_COLOR } from '../../../constant/Color';
import IconText from '../../../components/UI/IconText';
import Searchbar from '../../../components/form/Searchbar';
import { cardData} from '../../../temp/Data';
import JobCard from '../../../components/UI/JobCard';
import Seperator from '../../../components/UI/Seperator';
import { useNavigation } from '@react-navigation/native';

function JobResult({item}){
    return <View>
        <JobCard item={item}/>
        <Seperator customStyle={{marginBottom:15}}/>
    </View>
}
function Search(props) {
    const [modalVisible,setModalVisible] = useState(false);
    const navigation = useNavigation();
    return (
        <SafeAreaView customStyle={{flex:1,backgroundColor:PRIMARY_COLOR}}>
            <Modal animationType='slide' visible={modalVisible}>
                <Text>Hello World</Text>
                <Text onPress={()=>setModalVisible(false)}>Close Modal</Text>
            </Modal>
            <Searchbar/>
            <View style={styles.container}>
                <View style={styles.resultFilterContainer}>
                <Text style={styles.result}>Result</Text>
                <IconText icon={'filter'} iconSize={28} iconColor={DARK_GREY} onPress={()=>navigation.navigate('signup')}/>
                </View>
                <View style={styles.resultListContainer}>
                    <FlatList 
                    data={cardData}
                    renderItem={JobResult}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item=>item.id}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:15,
        backgroundColor:'white',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        padding:30
    },
    resultFilterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15
    },
    result:{
        fontFamily:'Primary-Bold',
        fontSize:20
    }
})
export default Search;
import SafeAreaView from "../../../components/container/SafeAreaView";
import ChatUser from "../../../components/Chat/ChatUser";

import { FlatList, Text,StyleSheet,View } from "react-native";
import { reviews } from "../../../temp/Data";
import Seperator from '../../../components/UI/Seperator';
import { LIGHT_GREY_COLOR, PRIMARY_COLOR } from "../../../constant/Color";
function Chat(props) {
    
    return (
        <SafeAreaView customStyle={{flex:1,backgroundColor:'white'}}>
            <Text style={styles.heading}>Messages</Text>
            <View style={styles.chatUserContainer}>
            <FlatList
            data={reviews}
            renderItem={({item})=><ChatUser user={item}/>}
            ItemSeparatorComponent={()=><Seperator/>}
            />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    heading:{
        padding:15,
        fontSize:20,
        textAlign:'center',
        backgroundColor:PRIMARY_COLOR,
        borderBottomWidth:1,
        borderBottomColor:LIGHT_GREY_COLOR,
        fontFamily:'Primary-Bold',
        color:'white',
        paddingBottom:20,

    },
    chatUserContainer:{
        padding:20
    }
})
export default Chat;
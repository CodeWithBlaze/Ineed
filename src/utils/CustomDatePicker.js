import  DateTimePicker  from '@react-native-community/datetimepicker';
import { StyleSheet, Text, View } from 'react-native';
import { PRIMARY_COLOR } from '../constant/Color';

export default function CustomDatePicker({
    show,
    setShow,
    date,
    onChange,
    message=''
    }){
   return (
            <View style={{width:'100%'}}>
            {
                show && 
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                is24Hour={true}
                onChange={onChange}
            />
            }
            {message &&<Text style={styles.formSubHeading}>{message}</Text>}
            <Text style={styles.displayBox} onPress={()=>setShow(true)}>{date.toDateString()}</Text>
            </View>
        )
}
const styles = StyleSheet.create({
    formSubHeading:{
        width:'100%',
        fontSize:17,
        paddingVertical:15,
        fontFamily:'Primary-Semibold'
    },
    displayBox:{
        padding:15,
        backgroundColor:'#EFEEFF',
        color:PRIMARY_COLOR,
        borderRadius:5,
        width:'100%',
        marginBottom:15,
        fontFamily:'Primary-Bold'
    }
})
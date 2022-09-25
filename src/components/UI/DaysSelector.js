import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PRIMARY_COLOR } from '../../constant/Color';
const days = ['Mon','Tue','Wed','Thr','Fri','Sat','Sun'];
function DaysSelector({selectedDays,setSelectedDays}) {
    let newDaysArray = [];
    function addDay(day){
        if(selectedDays.includes(day))
            newDaysArray = selectedDays.filter(selectedDay=>selectedDay != day);
        else
            newDaysArray = [...selectedDays,day];
        newDaysArray.sort((a,b)=>{
            return days.indexOf(a) - days.indexOf(b)
        });
        setSelectedDays(newDaysArray);
    }
    function isSelected(day){
        return selectedDays.includes(day);
    }
    return (
        <View style={styles.container}>
            {
                days.map(day=><Text style={[styles.dayContainer,isSelected(day)?styles.active:null]} 
                    key={day}
                    onPress={()=>addDay(day)}>
                        {day}
                    </Text>)
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginLeft:3
    },
    dayContainer:{
        marginRight:15,
        marginBottom:15,
        backgroundColor:'#EFEEFF',
        padding:15,
        fontFamily:'Primary-Bold',
        fontSize:12,
        borderRadius:5,
        color:PRIMARY_COLOR,
        elevation:5
    },
    active:{
        backgroundColor:'#90ee90',
        color:'#65a765'
    }
})
export default DaysSelector;
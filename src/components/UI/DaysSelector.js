import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PRIMARY_COLOR } from '../../constant/Color';
const initial_days = ['Sun','Mon','Tue','Wed','Thr','Fri','Sat']
function DaysSelector({selectedDays,setSelectedDays,duration}) {
    const [days,setDays] =useState(initial_days)
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
    function calculateDaysBetweenDates(){
        const date1 = new Date(duration.startingDate)
        const time1 = date1.getTime();
        const date2 = new Date(duration.endingDate)
        const time2 = date2.getTime();
        const day_available = (time2 - time1)/(1000*60*60*24) + 1
        if(day_available < 7){
            const day1 = date1.getDay()
            const filtered_days = [];
            let value = day1;
            for(let i = 1;i<=day_available;i++)
                filtered_days.push(initial_days[(value++)%7])
            setDays(filtered_days)
        }
        else
            setDays(initial_days)
    }
    useEffect(()=>{
        calculateDaysBetweenDates()
    },[duration])
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
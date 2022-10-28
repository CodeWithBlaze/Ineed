import React,{useState} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import SafeAreaView from '../../components/container/SafeAreaView';
import Form from '../../components/form/Form';
import Button from '../../components/UI/Button';
import InputBox from '../../components/UI/InputBox';
import {  PRIMARY_COLOR } from '../../constant/Color';
import DropDownPicker from 'react-native-dropdown-picker';
import { calculateDateDuration } from '../../utils/DateDuration';

import ListDetails from '../../components/UI/ListDetails';
import InfoHeadingText from '../../components/UI/InfoHeadingText';
import CustomDatePicker from '../../utils/CustomDatePicker';
import DaysSelector from '../../components/UI/DaysSelector';
import { useDispatch, useSelector } from 'react-redux';
import  DateTimePicker  from '@react-native-community/datetimepicker';
import { addDocument } from '../../backend/functions/Database';
import { showErrorToast, showSuccessToast } from '../../utils/toast/Toast';
import { NotificationActions } from '../../backend/slices/NotificationSlice';

function JobForm(props) {
    //--------------redux------------------------------
    const user = useSelector(state=>state.signup.user);
    const dispatch = useDispatch();
    //---------------Mode Picker------------------------
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('virtual');
    const [items, setItems] = useState([
        {label: 'Virtual', value: 'virtual'},
        {label: 'Physical', value: 'physical'}
    ]);
    //---------------Duration Picker------------------------
    const [openDuration, setOpenDuration] = useState(false);
    const [valueDuration, setValueDuration] = useState('one');
    const [itemsDuration, setItemsDuration] = useState([
        {label: '1 Day', value: 'one'},
        {label: 'One Week', value: 'week'},
        {label: 'One Month', value: 'month'},
        {label:'Custom',value:'custom'}
    ]);
    //---------------Date Picker------------------------
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        setShow(false);
        setDate(selectedDate);
        if(valueDuration === 'week' || valueDuration === 'month')
            setEndDate(calculateDateDuration(valueDuration,selectedDate))
    };
    //second date picker
    const [enddate, setEndDate] = useState(new Date());
    const [showEndDate, setShowEndDate] = useState(false);
    const onChangeEndDate = (event, selectedDate) => {
        setShowEndDate(false);
        setEndDate(selectedDate);
    };
    //---------------Time Picker------------------------
    const [time, setTime] = useState(new Date());
    const [showTime,setShowTime] = useState(false);
    const onChangeTime = (event, selectedTime) => {
        setShowTime(false);
        setTime(selectedTime);
    };
    //---------------Inputs------------------------
    const [jobTitle,setJobTitle] = useState('');
    const [jobDescription,setJobDescription] = useState('');
    const [experience,setExperience] = useState('');
    const [fee,setFee] = useState('');
    const [enrollLimit,setEnrollLimit]=useState('');
    const [tags,setTags] = useState([]);
    const [tagInput,setTagInput] = useState('');
    const [Cancellation,setCancellation] = useState('');
    const [selectedDays,setSelectedDays] = useState([]);
    //------------Tags Function--------------------
    function addTag(){
        let tempTagInput = tagInput;
        tempTagInput = tempTagInput.trim().toLowerCase();
        if(tempTagInput === ''){
            alert('Blank string is not allowed as tag');
            return;
        }
        if(tags.includes(tempTagInput)){
            alert('Same Tag is not allowed')
            return;
        }
        tags.push(tempTagInput);
        setTagInput('');
    }
    function deleteTag(tag){
        setTags(tags.filter(t=>t!=tag))
    }
    //---------------------loaders-------------------------
    const [isLoading,setLoading] = useState(false);
    //---------------------loaders-------------------------
    //---------------------picker function------------------------------------
    function onPickerChange(current_value){
        if(current_value === 'one')
            return;
        else if(current_value === 'custom')
            return;
        else{
            const calculatedDate = calculateDateDuration(current_value,date)
            setEndDate(calculatedDate)
        }
    }
    //---------------------picker function------------------------------------

    function SubmitForm(){
        setLoading(true);
        const formData = {
            title:jobTitle,
            description:jobDescription,
            duration:valueDuration,
            startingDate:date,
            endingDate:enddate,
            days:selectedDays,
            time:time,
            mode:value,
            fees:fee,
            enrollLimit:enrollLimit,
            experience:experience,
            tags:tags,
            cancellationChance:Cancellation,
            currentlyEnrolledStudent:0,
            status:'active', //status can be active,inactive,expired
            uid:user.uid
        }
        addDocument('Jobs',formData).then(()=>{
            setLoading(false);
            showSuccessToast('Job Created Successfully')
            const notification = {
                type:'success',
                title:'You created a new job',
                subtitle:`Job named ${jobTitle} was created Successfully`,
                uid:user.uid
            }
            dispatch({type:NotificationActions.addNotificationDatabaseStarted.type,payload:{notification}})
        }).catch(err=>{
            setLoading(false);
            showErrorToast(err.message)
            const notification = {
                type:'fail',
                title:'Job Creation Failed',
                subtitle:`Job named ${jobTitle} was not created`,
                uid:user.uid
            }
            dispatch({type:NotificationActions.addNotificationDatabaseStarted.type,payload:{notification}})
        })
    }
    return (
        <SafeAreaView customStyle={{flex:1}}> 
            
            <Form logoVisible>
                <Text style={styles.formHeading}>Create new Job</Text>
                <InputBox 
                customStyle={customstyle.input} 
                placeholder={'Job Title'}
                value={jobTitle}
                setValue={setJobTitle}
                type={'default'}
                />
                <InputBox 
                placeholder={'Job Description'}
                multiline
                customStyle={{...customstyle.input,...customstyle.multilineBox}}
                value={jobDescription}
                setValue={setJobDescription}
                />
                <Text style={styles.formSubHeading}>Select Duration</Text>
                <DropDownPicker
                    open={openDuration}
                    value={valueDuration}
                    items={itemsDuration}
                    listMode={'MODAL'}
                    placeholder={'1 Day'}
                    setOpen={setOpenDuration}
                    setValue={setValueDuration}
                    setItems={setItemsDuration}
                    onChangeValue={onPickerChange}
                    style={{backgroundColor:'#EFEEFF',borderWidth:0,marginBottom:30}}
                    textStyle={{fontFamily:'Primary-Semibold',color:PRIMARY_COLOR}}
                    labelStyle={{color:PRIMARY_COLOR}}
                />
                { valueDuration === 'one' ? 
                    <CustomDatePicker
                    show={show}
                    setShow={setShow}
                    date={date}
                    onChange={onChange}
                    message={'Select a date'}
                    />
                    :
                    <View style={{width:'100%',marginBottom:60}}>
                        <CustomDatePicker
                        show={show}
                        setShow={setShow}
                        date={date}
                        onChange={onChange}
                        message={'Select starting date'}
                        />
                        <CustomDatePicker
                        show={showEndDate}
                        setShow={setShowEndDate}
                        date={enddate}
                        onChange={onChangeEndDate}
                        message={valueDuration === 'custom'?'Select a date':'Ending date (auto generated)'}
                        />
                    </View>
                }
                {valueDuration !== 'one' && !showEndDate && !openDuration && <DaysSelector selectedDays={selectedDays} setSelectedDays={setSelectedDays} duration={{startingDate:date,endingDate:enddate}}/>}
                {
                showTime && 
                <DateTimePicker
                testID="dateTimePicker"
                value={time}
                is24Hour={true}
                mode={'time'}
                onChange={onChangeTime}
                />
                }
                <Text style={styles.formSubHeading}>Select Time of teaching</Text>
                <Text style={styles.displayBox} onPress={()=>setShowTime(true)}>{time.toTimeString()}</Text>
                <Text style={styles.formSubHeading}>Select Mode of teaching</Text>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    listMode={'MODAL'}
                    placeholder={'Virtual'}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={{backgroundColor:'#EFEEFF',borderWidth:0,marginBottom:15}}
                    textStyle={{fontFamily:'Primary-Semibold',color:PRIMARY_COLOR}}
                    labelStyle={{color:PRIMARY_COLOR}}
                />
                <View style={styles.formSection}>
                    <InputBox 
                    customStyle={{...customstyle.input,width:'40%',marginRight:15}} 
                    placeholder={'Fees/hr'} 
                    value={fee}
                    setValue={setFee}
                    />
                    <InputBox 
                    customStyle={{...customstyle.input,width:'55%'}} 
                    placeholder={'Enroll Limit 0 - 100'}
                    value={enrollLimit}
                    setValue={setEnrollLimit} 
                    />
                    
                </View>
                <InfoHeadingText info={'Setting enroll limit to one will set this job in one to one category . You can charge a higher rate in this type of jobs'}/>
                <Text style={styles.formSubHeading}>Experience in this Topic</Text>
                <InputBox 
                customStyle={customstyle.input} 
                placeholder={'Experience in years'}
                value={experience}
                setValue={setExperience}
                />
                <ListDetails 
                value={tagInput} 
                setValue={setTagInput}
                list={tags}
                addItem={addTag}
                removeItem={deleteTag}
                />
                <Text style={styles.formSubHeading}>Cancellation</Text>
                <InfoHeadingText info={'Rating will be decreased on the cancallation date and number of student enrolled'}/>
                <InputBox 
                customStyle={customstyle.input} 
                placeholder={'Cancellation Chance'}
                value={Cancellation}
                setValue={setCancellation}
                />
                <InfoHeadingText info={'This value will be shown to the users.'}/>
                <Button title={'Create Job'} 
                customButtonStyle={{borderRadius:5,marginBottom:80}}
                onPress={SubmitForm}
                isLoading={isLoading}
                />
            </Form>
            
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    formHeading:{
        paddingTop:15,
        fontSize:25,
        fontFamily:'Primary-Bold',
        marginBottom:25
    },
    formSubHeading:{
        alignSelf:'flex-start',
        fontSize:17,
        paddingVertical:15,
        fontFamily:'Primary-Semibold'
    },
    formSection:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center'
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
const customstyle = {
    input:{
        borderRadius:5
    },
    multilineBox:{
        height:180,
        paddingTop:20,
        textAlignVertical:'top'
    },
    
}
export default JobForm;
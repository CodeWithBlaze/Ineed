import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import Button from './Button';
import InputBox from './InputBox';
import IconText from './IconText';
import { DARK_GREY } from '../../constant/Color';
function ListDetails({value,setValue,list,addItem,removeItem}) {
    return (
        <>
        <InputBox 
            customStyle={customstyle.input} 
            placeholder={'Enter Tags'}
            value={value}
            setValue={setValue}
        />
        <View style={styles.listContainerView}>
            {
                list.map(item=><IconText 
                    key={item}
                    onPress={()=>removeItem(item)}
                    title={item} 
                    customContainerStyle={customstyle.listContainer}
                    customTextStyle={customstyle.listText}
                    />)
            }
        </View>
        {list.length > 0 && <Text style={styles.formInfoHeading}>Press on the tag to remove the tag</Text>}
        <Button title={'Add Tag'} 
        customButtonStyle={{borderRadius:5}}
        onPress={()=>addItem()}
        />
        </>
    );
}
const styles = StyleSheet.create({
    listContainerView:{
        width:'100%',
        backgroundColor:'white',
        borderRadius:5,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    formInfoHeading:{
        
        fontSize:14,
        marginBottom:15,
        fontFamily:'Primary-Bold',
        color:DARK_GREY
    },
})
const customstyle = {
    input:{
        borderRadius:5
    },
    listContainer:{
        marginBottom:15,
        backgroundColor:'#90ee90',
        padding:15,
        marginRight:17,
        borderRadius:5,
        elevation:5
    },
    listText:{
        color:'#65a765',
        fontSize:14,
    }
}
export default ListDetails;
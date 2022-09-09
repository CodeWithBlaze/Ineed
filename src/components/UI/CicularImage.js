import React from 'react';
import { Image,StyleSheet,TouchableOpacity } from 'react-native';
const RingCloseness = 15;
function CicularImage({url,size=24,customStyle,customContainerStyle,showRing}) {
    return (
        <TouchableOpacity style={[customContainerStyle,showRing?{...styles.container,width:size+RingCloseness,height:size+RingCloseness,borderRadius:0.5*(size+RingCloseness)}:null]}>
            <Image source={{uri:url}}
            style={[{width:size,height:size,borderRadius:0.5*size},customStyle]}
            />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        borderColor:'white',
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        elevation:12
    }
})
export default CicularImage;
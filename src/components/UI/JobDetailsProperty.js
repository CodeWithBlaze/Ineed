import React from 'react';
import IconText from './IconText';

function getIconBasedOnStatus(status){
    if(status === 'accepted')
        return 'check-circle';
    else if(status === 'cancelled')
        return 'times-circle';
    else
        return 'adjust'
}
function getColorBasedOnStatus(status){
    if(status === 'accepted')
        return 'green';
    else if(status === 'cancelled')
        return 'red';
    else
        return 'orange'
}
function JobDetailsProperty({item,iconColor,textColor,size,customContainerStyle={}}) {
    return (
        <>
                <IconText 
                icon={'money'} 
                iconSize={size} 
                iconColor={iconColor}
                title={item.charge}
                customContainerStyle={{width:'50%',...customContainerStyle}}
                customTextStyle={{fontSize:size,color:textColor,marginRight:15}}
                />
                <IconText 
                icon={'tv'} 
                iconSize={size} 
                iconColor={iconColor}
                title={item.mode}
                customContainerStyle={{width:'50%',...customContainerStyle}}
                customTextStyle={{fontSize:size,color:textColor}}
                />
                <IconText 
                icon={'language'} 
                iconSize={size} 
                iconColor={iconColor}
                title={item.language}
                customContainerStyle={{width:'50%',...customContainerStyle}}
                customTextStyle={{fontSize:size,color:textColor,marginRight:15}}
                />
                <IconText 
                icon={'calendar'} 
                iconSize={size} 
                iconColor={iconColor}
                title={item.date}
                customContainerStyle={{width:'50%',...customContainerStyle}}
                customTextStyle={{fontSize:size,color:textColor}}
                />
        </>
    );
}

export default JobDetailsProperty;
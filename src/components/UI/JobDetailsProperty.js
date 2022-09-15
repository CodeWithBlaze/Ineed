import React from 'react';
import IconText from './IconText';

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
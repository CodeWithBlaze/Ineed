import React from 'react';
import { extractDateFromString } from '../../utils/common/extra';
import IconText from './IconText';
function getProperDuration(duration){
    if(duration == 'one')
        return '1 Day'
    else if(duration == 'week')
        return '1 Week'
    else if(duration == 'month')
        return '1 Month'
    else
        return 'custom'
}
function JobDetailsProperty({item,iconColor,textColor,size,customContainerStyle={}}) {
    return (
        <>
                <IconText 
                icon={'money'} 
                iconSize={size} 
                iconColor={iconColor}
                title={'Rs '+ item.fees + "/hr"}
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
                title={item.language || 'English'}
                customContainerStyle={{width:'50%',...customContainerStyle}}
                customTextStyle={{fontSize:size,color:textColor,marginRight:15}}
                />
                <IconText 
                icon={'refresh'} 
                iconSize={size} 
                iconColor={iconColor}
                title={getProperDuration(item.duration)}
                customContainerStyle={{width:'50%',...customContainerStyle}}
                customTextStyle={{fontSize:size,color:textColor,marginRight:15}}
                />
                <IconText 
                icon={'calendar'} 
                iconSize={size} 
                iconColor={iconColor}
                title={extractDateFromString(item.startingDate)}
                customContainerStyle={{width:'50%',...customContainerStyle}}
                customTextStyle={{fontSize:size,color:textColor}}
                />
                
        </>
    );
}

export default JobDetailsProperty;
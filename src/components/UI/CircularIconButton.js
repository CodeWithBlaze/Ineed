import React from 'react';
import Button from './Button';

function CircularIconButton({icon,iconSize,onPress,size,customButtonStyle,CustomIcon}) {
    return (
        <Button 
        icon={icon} 
        iconSize={iconSize}
        onPress={onPress}
        CustomIcon={CustomIcon}
        customButtonStyle={{
            width:size,
            height:size,
            borderRadius:0.5 * size,
            ...customButtonStyle
        }}
        />
    );
}

export default CircularIconButton;
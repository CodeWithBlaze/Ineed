import { FontAwesome } from '@expo/vector-icons';

import React from 'react';

function Icon({icon,iconSize,color}) {
    return <FontAwesome name={icon} size={iconSize} color={color} />
}

export default Icon;
import { LIGHT_GREY_COLOR } from "../../constant/Color";
import Button from "../UI/Button";

export function GoogleProvider({onPress,title}){
    return <Button
    image={'https://res.cloudinary.com/codecafe/image/upload/v1662664871/IneedAsset/social_media_logo_w1tpus.png'}
    title={title}
    iconSize={30}
    customButtonStyle={customStyles.providerButton}
    customTextStyle={customStyles.providerText}
    />
}
export function FacebookProvider({onPress,title}){
        return  <Button
                image={'https://res.cloudinary.com/codecafe/image/upload/v1662664898/IneedAsset/social_media_facebook_efurah.png'}
                title={title}
                iconSize={30}
                customButtonStyle={customStyles.providerButton}
                customTextStyle={customStyles.providerText}
                />
}
const customStyles = {
    providerButton:{
        width:130,
        height:50,
        borderRadius:30,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:LIGHT_GREY_COLOR,
        justifyContent:'space-around',
        paddingRight:15,
        
    },
    providerText:{
        color:'black',
        
    }
}
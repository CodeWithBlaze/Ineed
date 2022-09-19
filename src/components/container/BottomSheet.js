import { ScrollView, View } from "react-native";
import BottomSheet from "react-native-easy-bottomsheet";

function BottomSheetModal({children,title,isVisible,setVisible,customStyle}) {
    return (
        <View>
        <BottomSheet
            bottomSheetTitle={title}
            bottomSheetStyle={[{
            backgroundColor: "white",
            maxHeight: "50%",
            minHeight: "30%",
            },customStyle]}
            setBottomSheetVisible={setVisible}
            bottomSheetVisible={isVisible}
        >
            <ScrollView style={{paddingTop:15,paddingLeft:15}}>
                {children}
            </ScrollView>
        </BottomSheet>
    </View>
    );
}

export default BottomSheetModal;
import Toast from 'react-native-root-toast';

export function showErrorToast(message){
    Toast.show(message, {
        duration: Toast.durations.LONG,
        position: 40,
        shadow: true,
        backgroundColor:'#FF8A8A',
        textColor:'#FF2E2E',
        opacity:1,
        animation: true,
        hideOnPress: true,
        delay: 0,
    });
}
export function showInfoToast(message){
    Toast.show(message, {
        duration: Toast.durations.LONG,
        position: 40,
        shadow: true,
        backgroundColor:'#8A8AFF',
        textColor:'#2E2EFF',
        opacity:1,
        animation: true,
        hideOnPress: true,
        delay: 0,
    });
}
export function showSuccessToast(message){
    Toast.show(message, {
        duration: Toast.durations.LONG,
        position: 40,
        shadow: true,
        backgroundColor:'#8AFF8A',
        textColor:'#00D100',
        opacity:1,
        animation: true,
        hideOnPress: true,
        delay: 0,
    });
}

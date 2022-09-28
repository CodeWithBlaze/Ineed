import NotificationCard from "../UI/NotificationCard";

export function SuccessNotifcation({text,subtitle}){
    return (
        <NotificationCard color={'green'} icon={'check'} title={text} subtitle={subtitle}/>
    )
}
export function FailureNotifcation({text,subtitle}){
    return (
        <NotificationCard color={'red'} icon={'remove'} title={text} subtitle={subtitle}/>
    )
}
export function InfoNotifcation({text,subtitle}){
    return (
        <NotificationCard color={'#FAD02C'} icon={'info'} title={text} subtitle={subtitle}/>
    )
}

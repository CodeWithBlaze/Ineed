import { ScrollView } from "react-native";
import ScreenLoading from "../../screens/UI/ScreenLoading";
import JobCard from "../UI/JobCard";
import SafeAreaView from "./SafeAreaView";

function JobContainer({data,isLoading,item=null}) {
    if(isLoading)
        return <ScreenLoading/>
    return (
        <SafeAreaView customStyle={{flex:1,marginTop:15}}>
            <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:'center'}}>
                {
                    data.map(job=><JobCard item={item ? job[item]:job} key={job._id} customContainerStyle={{width:'95%',marginBottom:15,elevation:15}}/>)
                }
            </ScrollView>
        </SafeAreaView>
    );
}

export default JobContainer;
export function calculateDateDuration(duration,date){
    const endDatePredict = new Date(date);
    if(duration  === 'week')
        endDatePredict.setDate(endDatePredict.getDate() + 1*7);
    else if(duration === 'month')
        endDatePredict.setMonth(endDatePredict.getMonth() + 1);
    
    return endDatePredict
}
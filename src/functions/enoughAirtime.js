function enoughAirtime(usage, amount) {
    const usageArr = usage.split(','); 
    let callTotal = 0;
    let smsTotal = 0;
    
    usageArr.forEach(item => {
        if(item == 'sms') {
            smsTotal += 2;
        } else if(item == 'call') {
            callTotal += 3;
        }
    });

    const cost = smsTotal + callTotal;

    if(cost > amount) {
        return 'Out of cash...'
    }

    return 'R' + (amount - cost).toFixed(2);
}
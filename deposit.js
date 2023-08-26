
function deposiBtnClick(){
    // new deposit amount by function
    const newDepositAmount = getElementValueById('deposit-input');
    // previous deposit total by function 
    const previousDepositTotal = getElementTextById('deposit-total');
    // calculate new deposit total  
    const newDepositTotal = newDepositAmount + previousDepositTotal;
    // set deposit total by function 
    setElementTextById('deposit-total', newDepositTotal);
    // get total balance by function 
    const previousBalanceTotal = getElementTextById('balance-total');
    // calculte new balance total 
    const newBalanceTotal = newDepositAmount + previousBalanceTotal;
    // set balance total by function 
    setElementTextById('balance-total', newBalanceTotal);
}





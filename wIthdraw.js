function withdrawBtnClick() {
    // get input value by function 
    const newWithdrawAmount = getElementValueById('withdraw-input');
    // get withdraw total by function 
    const previousWithdrawTotal = getElementTextById('withdraw-total');
    // calculate new withdraw total 
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    // set withdraw total by function 
    setElementTextById('withdraw-total', newWithdrawTotal);
    // get balance total by function 
    const previousBalanceTotal = getElementTextById('balance-total');
    // calculate balance toatal 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount ; 
    // set balance total by function 
    setElementTextById('balance-total', newBalanceTotal);

}

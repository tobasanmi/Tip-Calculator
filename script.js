function tipCalculator(){
    let billAmt = document.getElementById('bill-amount').value;
    let serviceQual = document.getElementById('service-quality').value;
    let tipAmt = document.getElementById('tipamount').value;
    let totalAmt = document.getElementById('total-amount').value;
    let totalPerson = document.getElementById('total-per-person').value;
    let numOfPeople = document.getElementById('No-of-people').value;
    if(billAmt ==="" || serviceQual == 0){alert ('Please enter values');}
    let totalTip = billAmt * serviceQual;
    let amountPaid = parseFloat(totalTip) + parseFloat(billAmt);
    let amountPerPerson =parseFloat(amountPaid) / parseFloat(numOfPeople);
    document.getElementById('tipamount').innerHTML = '₦' + totalTip;
    document.getElementById('total-amount').innerHTML = '₦' + amountPaid;
    document.getElementById('total-per-person').innerHTML = '₦' + amountPerPerson;
}
document.getElementById('calculatebtn').onclick = function (){
    tipCalculator();
}
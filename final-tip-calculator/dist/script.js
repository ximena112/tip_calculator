//declaring variables and assigning them text boxes
var billAmount = document.getElementById('billInput'); //text bill amnt

var partyNumber = document.getElementById('partySize'); //text party size

var fivePerBtn = document.querySelector('.fivePercent');

var tenPerBtn = document.querySelector('.tenPercent');

var fifteenBtn = document.querySelector('.fifteenPercent');

var twentyBtn = document.querySelector('.twentyPercent');

var cstmBtn = document.querySelector('.customTipBtn');

var tipResults = document.getElementById('tipAmount');

var tipTotal = document.getElementById('totalTIP');

var newTotal = document.getElementById('newBillTotal');

//functions for each button
function calcFive(){
  var billInput = billAmount.value;
  var partySize = partyNumber.value;
  var tipAmount = (billInput *.05) / partySize ;
  tipAmount = (Math.round(tipAmount *100)/100 ).toFixed(2);
  //tipAmount.toFixed(2);
  tipResults.innerHTML = 'A 5% tip would equal $' + tipAmount + ' for each guest.';
  
  var totalTIP = (billInput * .05);
  totalTIP = (Math.round(totalTIP*100)/100).toFixed(2);
  tipTotal.innerHTML = 'Total tip is $' + totalTIP + '.';
  
  var newBillTotal = ((billInput) + (billInput * .05));
  newBillTotal = (Math.round(newBillTotal)/100).toFixed(2);
  newTotal.innerHTML = 'New Bill Total including Tip: ' + '$'+ newBillTotal + '.';
  }

function calcTen(){
  var billInput = billAmount.value;
  var partySize = partyNumber.value;
  var tipAmount = (billInput * .1) / partySize;
  tipAmount = (Math.round(tipAmount *100)/100 ).toFixed(2);
  tipResults.innerHTML = 'A 10% tip would equal $' + tipAmount + ' for each guest.';
  
  var totalTIP = (billInput * .1);
  totalTIP = (Math.round(totalTIP*100)/100).toFixed(2);
  tipTotal.innerHTML = 'Total tip is $' + totalTIP + '.';  
}

function calcFifteen(){
  var billInput = billAmount.value;
  var partySize = partyNumber.value;
  var tipAmount = (billInput * .15) / partySize;
  tipAmount = (Math.round(tipAmount *100)/100 ).toFixed(2);
  //tipAmount.toFixed(2);
  tipResults.innerHTML = 'A 15% tip would equal $' + tipAmount + ' for each guest.';
  
  var totalTIP = (billInput * .15);
  totalTIP = (Math.round(totalTIP*100)/100).toFixed(2);
  tipTotal.innerHTML = 'Total tip is $' + totalTIP + '.';  
}

function calcTwenty(){
  var billInput = billAmount.value;
  var partySize = partyNumber.value;
  var tipAmount = (billInput * .20) / partySize;
  tipAmount = (Math.round(tipAmount *100)/100 ).toFixed(2); //short hand for bottom code:
  //tipAmount =Math.round(tipAmount *100)/100;
 // tipAmount.toFixed(2);
  tipResults.innerHTML = 'A 20% tip would equal $' + tipAmount + ' for each guest.';  //shows message inside HTML paragraph called tipResults/tipamount
  
  var totalTIP = (billInput * .20);
  totalTIP = (Math.round(totalTIP*100)/100).toFixed(2);
  tipTotal.innerHTML = 'Total tip is $' + totalTIP + '.';  
}

function calcCustom(){
  var billInput = billAmount.value;
  var partySize = partyNumber.value;
  var customTipAmount = (document.querySelector('#customTip').value) /100; //input needs to be converted to decimal
  var tipAmount = (billInput * customTipAmount) /partySize;
  tipAmount = (Math.round(tipAmount *100)/100 ).toFixed(2);
  //tipAmount.toFixed(2);
  tipResults.innerHTML = 'A ' + (customTipAmount * 100) + '% ' + ' '+ ' tip would equal $' + tipAmount + ' for each guest.';
  var totalTIP = (billInput * customTipAmount);
  totalTIP = (Math.round(totalTIP*100)/100).toFixed(2);
  tipTotal.innerHTML = 'Total tip is $' + totalTIP + '.';
}

//adding click event to each button
fivePerBtn.addEventListener('click', calcFive);
tenPerBtn.addEventListener('click', calcTen);
fifteenBtn.addEventListener('click', calcFifteen);
twentyBtn.addEventListener('click',calcTwenty);
cstmBtn.addEventListener('click',calcCustom);
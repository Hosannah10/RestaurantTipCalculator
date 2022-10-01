// JavaScript source code
var totalDiv = document.getElementById("totalTip")
    totalDiv.style.display = "none";

function calc() {
    var amount = document.getElementById("billamt").value
    var servicePercent = document.getElementById("serviceQual").value
    var serviceAmt = servicePercent/100
    var people = document.getElementById("peopleamt").value
    if (amount == "" || amount == NaN || amount == 0) {
        alert("Enter valid Inputs")
    }
    if (servicePercent == 0 || people < 1 || people =="") {
        alert("Enter number")
    }
    var total = (amount*serviceAmt)/people                 
    totalDiv.innerHTML = total.toFixed(2)
    totalDiv.style.display = "block"
}
//Note: NaN means Not a Number; 2 in the bracket above refers to the decimal places.


document.getElementById("calculate").addEventListener("click", function () {
    calc()
})
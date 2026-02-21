console.log("Script is runni9ng");
let a = "15";

let b = 15;
console.log(typeof a);
a = Number(a);
console.log(typeof a);

if (a > b) {
    //if block only
    console.log(a + " a is greater then b");
}
else if (b > a) {
    console.log("b is greater then a ");
}
else {
    console.log("condition failed");
}



let vara, varb, result;

function getval() {
    vara = document.getElementById('one').value;
    varb = document.getElementById('two').value;
    vara = Number(vara);
    varb = Number(varb);


}

//switch 
let day = "tuesday";
switch (day) {
    case "monday":
        console.log("It is Monday");
        alert("This is monday");
        break;
    case "tuesday":
        console.log("It is tuesday");
        break;
    case "wednesday":
        console.log("It is wednesday");
        break;
    case "thusday":
        console.log("It is thusday");
        break;
    case "friday":
        console.log("It is friday");
        break;
    case "saturday":
        console.log("It is saturday");
        break;
    case "sunday":
        console.log("It is sunday");
        break;
    default:
        console.log("The day does not exhist. . . .");


}

//function and button code

function addition() {
    // console.log("Function got called");
    getval();
    result = vara + varb;
    // console.log(vara,varb,result);
    setresult();
}

function substraction() {
    getval();
    result = vara - varb;
    setresult();
}
function division() {
    getval();
    result = vara / varb;
    setresult();
}
function multi() {
    getval();
    result = vara * varb;
    setresult();
}
function setresult() {

    // console.log(" result got called");
    document.getElementById('result').innerText = result;
}


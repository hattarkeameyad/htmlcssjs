
//arrow funcions

let a, b, result;
function substraction(a, b) {

    console.log(a - b);
}

let add = (a, b) => console.log(a + b);

let multi = (a, b) => {
    result = a * b;
    console.log(result);
}

substraction(20, 30);

add(40, 50);

multi(10, 5);

//iife function immediately invoked
(function () {
    console.log("iife function got called");
})();
a = 40; b = 30;

(function () {
    a = 20, b = 40;
    console.log("division with iife  " + a / b);
})();


console.log("------------------------------------");
// Call Back funcion

function aniket(bucket) {
    console.log("Within the main function...");
    bucket();
}

function sayHello() {

    console.log("Call Back function is getting called .....");
    console.log("Hello");
}

function saybye() {

    console.log("Call Back function is getting called .....");
    console.log("bye...........");
}

aniket(sayHello);
// aniket(saybye);


//example 2


function calculate(a, b, operation) {
    return operation(a, b);
}

function add1(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

let y = calculate(5, 3, add1);
console.log("This is log " + calculate(5, 3, add1));       // 8
console.log("This is variable  " + y);
console.log(calculate(5, 3, multiply));



//clousure demo



function myfun() {

    let c = 20;
    console.log("This is my function ");
    return c;

}

console.log(myfun());

console.log(myfun());

//new example

function outerFunction() {
    let outerVariable = "I am from outer";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const res = outerFunction();
res();
res();
res();


//example 2
function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    }
}

const increment = counter();

console.log("Called for the first time  " + increment()); // 1
console.log("Called for the second time " + increment()); // 2


//Event listener

function setupButton(message) {
    const button = document.getElementById("mybutton");

    if (!button) {
        console.log("Button not found");
        return;
    }

    button.addEventListener("click", function () {
        console.log(message);
    });
}

setupButton("Button clicked!");

//data privacy

function createUser() {
    let password = "12345";

    return {
        checkPassword: function (input) {
            return input === password;
        }
    }
}

const user = createUser();

console.log(user.checkPassword("12345")); // true
console.log(user.checkPassword("1234f5")); // true

console.log(user.password);
console.log(user.checkPassword("12345")); // true









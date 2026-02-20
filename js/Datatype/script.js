let number = 10;
let str = "10";
let bool = true;
let ab;
let nl = null;
// b=234234;

console.log("value and its type: " + number + " type " + typeof number);
console.log("value and its type: " + str + " type " + typeof str);
console.log("value and its type: " + bool + " type " + typeof bool);
console.log("value and its type: " + ab + " type " + typeof ab);
console.log("value and its type: " + nl + " type " + typeof nl);

//non primitive types

let b = [10, 20, 40];

let student = { name: "Pratik", desig: "fullstack", vehicle: "bike" };

console.log("value and its type: " + student.name + " type " + student.vehicle);
console.log("value and its type: " + b + " type " + typeof b);

function functionone() {

    console.log("Function is called");
}

functionone();
console.log("value and its type:  type " + typeof functionone);

for (let i = 0; i < 5; i++) {

    functionone();
    console.log("Iteration number:" + i);
}


let g1 = 10;
let g2 = g1;
g2 = 20;
console.log("Print value of g1 :" + g1);
console.log("Print value of g2 :" + g2);


console.log("array non primitive");

let arr1=[10,20,3];
let arr2=arr1;

arr2[1]=40;
console.log("-----------------------------------------------------");
console.log(arr1[1]);



let obj1 = { name: "John" };
let obj2 = obj1;

obj2.name = "Sam";

console.log(obj1.name);



// console.log("This is a value of b and its type: "+str+" type "+ typeof str);
// console.log("This is a value of b and its type: "+str+" type "+ typeof str);

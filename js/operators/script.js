let a=25;
let res=2**2;

console.log(res);
a=5;
let b='5';
console.log( b==a);
console.log(a===b);

console.log('5'==5)  ;      // true
console.log('5'===5) ;      // false


//logical operator

let aa=5;
let bb=10;
let c=25;
let d=20;

let res1=aa>bb && c>d;
console.log("result "+res1);

 res1=aa>bb || c>d;
console.log("result "+!(res1));

a=20;
a+=5; 
console.log(a);

a=25;
b=3;
a%=b;
console.log(a);
a=5;
a**=5;
console.log(a);


//ternary operator

let age=8;

let res2=age>=18 ? "you are an adult" : "you are a minor";
console.log(res2);

//uninary operator

let x='5';
console.log("typeof "+typeof x);

x=+x;
console.log("typeof "+typeof x);

let z="ameya";
z=+z;
console.log(z); // NaN

let q=5;
q=-q;

console.log(q); // -5
q=+q;


console.log("---------Increment and decrement--------");
let qa = 5;
console.log(++qa); // 6
console.log(qa++); // 6
console.log(qa);   // 7


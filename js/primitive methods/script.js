//tofixed
let n = 3.365345;
console.log(typeof n)
let converted = n.toFixed(2);
console.log(` typeof variable ${converted} and the value is now ${typeof converted} `);

// using precision

// n=2.234234234;
converted = n.toPrecision(2);
console.log(`precision value: ${converted}`);

let b = 34.43534;
console.log(typeof b);

b = b.toString(); // b="34";

console.log(typeof b)

//parseint
b = parseInt(b);

console.log(typeof b, b);

//parsefloat

b = "234.234234";
b = parseFloat(b);
console.log(typeof b, b);

//array sort method
//problem with this it sorts lexicographically
let arr = [14, 11, 5];
let q = arr.sort();
console.log(`Original array ${arr} and after sorting it is  ${q}`);

//right way to sort array 

arr.sort((a, b) => a - b);

console.log(`after sorting it is  ${arr}`);

arr.sort((a, b) => b - a);
console.log(`after sorting it is  ${arr}`);

//Mathamatical Methods

let p, o, e, r;
p = 2, o = 4, e = 34, r = 234;

let maximumvalue=Math.max(p,o,e,r);
console.log(`Maximum value ${maximumvalue}`);

let minvalue=Math.min(p,o,e,r);
console.log(`Minimum value ${minvalue}`);

let z="34.2134"
let ceil=Math.ceil(z);
console.log(`ceil value ${ceil}`);

z="34.2134"
flr=Math.floor(z);
console.log(`floor value ${flr}`);

z="34.5556"
rnd=Math.round(z);
console.log(`round value ${rnd}`);

let sqr=525;
let cubert=999;

let sqrt1,cbrt1;

sqrt1=Math.sqrt(sqr);
cbrt1=Math.cbrt(cubert);

console.log(`This is square root ${sqrt1}  and cuberoot ${cbrt1}`);

p=2,q=4;
console.log(` This is power   ${ Math.pow(p,q)} This is genrerating random function which is ${ Math.random()}`);
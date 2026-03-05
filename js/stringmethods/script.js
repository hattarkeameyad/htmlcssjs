let b = 25;
console.log("Script started . . .");

let string1 = "Ameya";
let string2 = 'Pratik';
let string3 = ' Kacha papad pakka pappad';

let longstring="         a quick brown fox jumps over the lazy dog a quick brown fox jumps over the lazy dog a quick brown fox jumps over the lazy dog          ";

console.log("This is my string ", string1 + " Thisis another string " + string2);
console.log(`This is my string ${string1} This is another string ${string2}`);

console.log(`String length of the string 1 is ${string1.length}`);

console.log(`What is the charecter at 3 in string 1 ${ string1.charAt(3)}`);

console.log(`The first occcurence of z ${ longstring.indexOf('z')} the first occurance of q ${longstring.indexOf('q')}`);

console.log(`The last occcurence of z ${ longstring.lastIndexOf('z')} the last occurance of q ${longstring.lastIndexOf('q')}`);


let caps=longstring.toUpperCase();
console.log(`This is uppercaed statement ${caps}` );
caps=caps.toLowerCase();
console.log(`This is lowercased statement ${caps}` );

let chck=string1.startsWith('A');
console.log(`Does string 1 starts with A ?  ${chck}`);

chck=string2.endsWith('k');
console.log(`Does string 2 ends with k ?  ${chck}`);

console.log(`This is original string before replacement ${string3}`);

let res=string3.replace('p','r');

console.log(`result ${ res }`);

res=string3.replaceAll('p','z');

console.log(`result ${ res }`);

let res2=longstring.split(' ');

console.log(res2);

let string4=" html,css,js,mongo,react,express,team player,proactive ";
res2=string4.split(',');
console.log(res2);

let string5="I love Panipuri.";

res2=string5.slice(1);
console.log(res2);
res2=string5.slice(1,6);
console.log(res2);

console.log(longstring);

res2=longstring.trim();

console.log(res2);



//foreach method

let arr = [10, 20, 30];
arr.forEach(function (item) {
    console.log(item);
});


//map

let arr1 = [2, 3, 4];

let newArr = arr1.map(function (item) {

    return item * 1;

});
console.log(newArr);

//filter

let ar3 = [10, 15, 20, 25, 30];
let evenNumbers = ar3.filter(function (item) {
    return item % 2 === 0;
});
console.log(evenNumbers);

//some

let ar5 = [3, 13, 15, 19, 21];
let hasEven = ar5.some(function (item) {
    return item % 2 === 0;
});
console.log(hasEven);

//every

let a = [11, 23, 39, 333];
let allEven = a.every(function (item) {
    return item % 2 !== 0;
});
console.log("eveery ", allEven);

//find

let abc = [11, 12, 15, 246, 21];
let firstEven = abc.find(function (item) {
    return item % 2 === 0;
});
console.log(firstEven);

//reduce
let pq = [2, 3, 4];
let product = pq.reduce((prev, curr) => prev + curr, 0);
console.log(product);

//splice
//one parameter

let myarr=[1,2,3,4,5,6,7,8,9];

console.log("before splice",myarr);
myarr.splice(5);
console.log("after splice",myarr);

//two parameters
//Splice syntax- splice(starting_index, deleteCount, inserting elements)
myarr=[1,2,3,4,5,6,7,8,9];
console.log("before splice",myarr);
myarr.splice(3,2);
console.log("after splice",myarr);

//with three parameters

myarr=[1,2,3,4,5,6,7,8,9];
console.log("before splice",myarr);
myarr.splice(2,2,999,88888,7777,6666,5555,444);
console.log("after splice",myarr);
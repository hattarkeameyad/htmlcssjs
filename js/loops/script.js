

//while loop

let a = 1;

while (a <= 20) {
    console.log("Number of iterations: " + a);
    a++;
}

console.log(a);
//dowhile 
do {
    console.log("this is iteration" + a);
    a++;
} while (a <= 20);

//for loop
for (a = 0; a <= 20; a++) {

    console.log("Iteration in for:" + a);
}

//for of 

let arr = [10, 20, 50, 60, 70];
let index, value;
for (value of arr) {

    console.log("Value when using for of : " + value);
}

//for in 

for (index in arr) {

    console.log("Value when using for in : " + index);
}


for (index in arr) {

    console.log("Index position of the array element:  " + index + " Has value " + arr[index]);
    
}

console.log(arr[2]);



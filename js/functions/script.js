//function and type of functions
function hellowworld() {
    console.log("Basic function");
    console.log("Helo world");
}

//parameterised function
let a, b;
function functionwithvariables(a, b) {
    console.log("function with variables.");
    console.log(a + b);

}

//default parameter function

function withdefaultvalue(a, b = 40) {

    console.log("defalt parameter function");
    console.log(a + b);


}

//function returning the values

function myfunction(a, b) {
    console.log("Value with the returning statement");
    let result = a + b;
    return result;
}

//Function as an expression

let add=function(a,b){
    console.log("This is function as an expression");
    console.log(a+b);
}

//callsection

hellowworld();

functionwithvariables(10, 20);

withdefaultvalue(10, 10);

withdefaultvalue(10);

let returningvalue = myfunction(20,30);
console.log(returningvalue);

console.log(myfunction(40,30));

add(20,60);




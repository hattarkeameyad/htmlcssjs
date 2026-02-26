let person1= {
    name: "Ameya",
    job: "Developer",
    email: "a@a.com",
    run: function () {
        console.log("I'm running i am person 1");
    }
};

let car={
    engine: "petrol", company:"suzuki",type:"sedan",mileage:"27 kmpl",
};


let person2= {
    name: "pratik",
    job: "Developer",
    email: "a@a.com",
    run: function () {
        console.log("I'm running i am person 2");
    }
};

console.log(person1.name);        // Dot notation
console.log(person1["job"]);      // Bracket notation
person2.run();   
person1.run();

console.log(car['company']);

Object.freeze(person1);

person1.name="harshada";
console.log(person1['name']);

delete car.type;
console.log(car);

let mergedvarialble= {...person1,...car};

console.log(mergedvarialble);

console.log(Object.entries(person1));
let key=Object.entries(car);

console.log(key);

console.log(Object.values(person2));

Object.seal(person2);
person2.college="Mgm";
person2.job="devops"

console.log(person2);
//seal

let user = { name: "Ameya", age: 25 };

Object.seal(user);
console.log(user);

user.age = 30;      // Allowed
console.log(user);
user.city = "Pune"; // Not allowed
user.name="sadhana";
console.log(user);
delete user.name;   // Not allowed
console.log(user);
// Arrays start 

	let arr = [5, 7, 8, 9, 6];
    let arr2 = [5, 7, 8, 9, 6];
    console.log("array.length : "+arr.length);

    let a,b;
    a=1;
    b=5;
    console.log(a===b);
    console.log(a,b);
    a=b;
    b=10;
    console.log(a,b);

    console.log("strictly checking refrence:",arr===arr2);
    arr=arr2;

    console.log("arrays assigned to each other:",arr===arr2);
    console.log(arr+" two arrays  "+arr2);
    arr[1]=23;
    console.log(arr+" two arrays  "+arr2);


//array methods

let myarr=[1,2,3,4,5,6];
console.log(myarr);
myarr.push(7);

myarr.push(8);
myarr.push(8);
console.log(myarr);

myarr.pop();
console.log(myarr);
let abc=myarr.pop();
console.log(abc);
myarr.shift();
console.log(myarr);

myarr.unshift(123);
console.log(myarr);

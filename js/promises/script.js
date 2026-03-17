
const p = new Promise((resolve, reject) => {

    let success = 1;
    if (success == 1) {
        resolve("The code executed successfully");
    }

    else if (success != 1) {
        reject('error .....');
    }
});

p.then(result => {
    console.log(result);
});

p.catch(error => {
    console.log(error);
})


// -------------another promise

console.log('----anotherpromise---------');
let mood = "bad";

const p2 = new Promise(function (resolve, reject) {


    let mood2 = "good";

    const p3 = new Promise(function (resolve, reject) {

        if (mood2 === "good") {
            setTimeout(() => resolve("take 10 lakh"), 2000);
        }
        else {
            setTimeout(() => reject("I will not give"), 2000);
        }
    });

    console.log(p3);

    p3.then(res => console.log(res))
    p3.catch(err => console.log(err));
    if (mood === "good") {
        setTimeout(() => resolve("take 1 lakh"), 2000);
    }
    else {
        setTimeout(() => reject("I will not give"), 2000);
    }
});

console.log(p);

p2.then(res => {

    let mood = "good";

    const p2 = new Promise(function (resolve, reject) {

        if (mood === "good") {
            setTimeout(() => resolve("take 1 lakh and this is result of first promises resolve methods result"), 2000);
        }
        else {
            setTimeout(() => reject("I will not give"), 2000);
        }
    });

    console.log(p);

    p2.then(res => console.log(res))
    p2.catch(err => console.log(err));
})
p2.catch(err => {

    let mood = "bad";

    const p2 = new Promise(function (resolve, reject) {

        if (mood === "good") {
            setTimeout(() => resolve("take 1 lakh this is result of the first promises failure or reject methods "), 2000);
        }
        else {
            setTimeout(() => reject("I will not give"), 2000);
        }
    });

    console.log(p);

    p2.then(res => console.log(res))
    p2.catch(err => console.log(err));
});

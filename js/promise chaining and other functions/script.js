
let calculation_in_promisechain = (udata) => {

    return
}


document.getElementById("mybutton").addEventListener('click', () => {


    let p = new Promise((resolve, reject) => {
        let udatacomponent = document.getElementById('userdata');
        console.log(udatacomponent);
        let udata = udatacomponent.value;
        udata = parseInt(udata);
        resolve(udata * 2);
    })
        .then(data => {
            data *= 2;
            console.log('2ndpromise');
            return data;
        })
        .then(data => {
            data *= 2;
            console.log('3ndpromise');

            return data;
        })
        .then(data => {
            data *= 2;
            console.log('4 promise');
            return data;
        })
        .then(data => {
            document.getElementById('outputdisplay').value = data;
            console.log('6 promise');
            return data;
        })
        .catch(err => { console.log(err) })
})


// ---------------------Promiseall-------------

// const promise1 = Promise.resolve("   " + 3 + "");

const promise3 = new Promise(resolve =>
    setTimeout(() => resolve("this is promise no 3 "), 3000)
);


const promise4 = new Promise(resolve =>
    setTimeout(() => resolve("this is 4th promise"), 2000)
);


Promise.all([ promise4, promise3])
    .then(values => console.log("All Promises completed successfully" + values))
    .catch(error => console.log("one of the promise is failed." + error));


// -------------simple race example
const p5 = new Promise(resolve =>
    setTimeout(() => resolve("First"), 2000)
);

const p6 = new Promise(resolve =>
    setTimeout(() => resolve("Second"), 5000)
);

Promise.race([p5, p6])
    .then(result => console.log(result));


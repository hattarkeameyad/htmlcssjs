const p1 = Promise.reject("Success 1");

const p2 = Promise.reject("Failed");

const p3 = new Promise(resolve =>
    setTimeout(() => resolve("Success 2"), 1000)
);

Promise.allSettled([p1, p2, p3])
    .then(results => console.log(results));


// -----------Promise.any

Promise.any([p1, p2, p3])
    .then(result => console.log(result));

// -------------------Login example with promise

let uname, vpass;

let checklogin = (username, password) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "Ameya" && password === "1234") {
                resolve("Login Successfull");
            }
            else {
                reject("Login failed");
            }
        }, 5000)
    }
    )
}

document.getElementById('btnlogin').addEventListener('click', () => {
    vuname = document.getElementById('uname').value;
    vpass = document.getElementById('pass').value;

    checklogin(vuname, vpass)
        .then(result => {
            document.getElementById('statuscheck').innerHTML = "Successfull . . .";
            console.log("Login successfull");
        })
        .catch(err => {
            let status = document.getElementById('statuscheck');
            status.innerHTML = "Wrong credentials"
            status.style.color = 'red';

            console.log(err)
        })

});

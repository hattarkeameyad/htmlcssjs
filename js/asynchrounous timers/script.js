let timeoutfunction = setTimeout(() => {
    console.log("settimeout ... .........................");
}, 1000);

let x = 1;
if (x === 0) clearTimeout(timeoutfunction);


let count = 0;

let myvar = setInterval(() => {
    count++;
    console.log("This will be printing after every 2 second" + count);
    if (count >= 10) {
        clearInterval(myvar);
    }
}, 2000);

function updateData() {
    setTimeout(() => {
        document.getElementById("result").innerHTML = "Data Loaded Successfully";
    }, 2000);
}


//settimeout with parameters

const greet = (name) => {
    console.log("Hello, " + name);
};

setTimeout(greet, 1000, "John");



//another example of all together

const counter = {
    count: 0,
    intervalId: null,

    start: function () {
        this.intervalId = setInterval(() => {
            this.count++;
            console.log(this.count);

            if (this.count >= 10) {
                this.stop();
            }
        }, 1000);
    },

    stop: function () {
        clearInterval(this.intervalId);
        console.log("Counter stopped");
    }

};

counter.start();



//callback function hell



setTimeout(() => {
    console.log("Step 1 completed-------------------");
    setTimeout(() => {
        console.log("Step 2 completed-----------------");
        setTimeout(() => {
            console.log("Step 3 completed------------------");
            setTimeout(() => {
                console.log("Step 4 completed------------------");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

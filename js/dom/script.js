

let heading = document.getElementsByTagName('h1');
console.log(heading);

let cbtn = document.getElementById('ccolor');
let ccbtn = document.getElementById('ccolors');
let change_heading_color = () => {

    for (let items of heading) {
        console.log(items);
        items.style.backgroundColor = "red";

    }

}
cbtn.addEventListener("click", change_heading_color);

ccbtn.addEventListener('click', () => {
    heading[3].style.backgroundColor = "white";
});

//classselector

let clsname1 = document.getElementsByClassName('firstyear');
let clsname2 = document.getElementsByClassName('secondyear');

document.getElementById('frst').addEventListener('click', () => {
    for (let items of clsname1) {
        console.log(items);
        items.style.backgroundColor = "orange";

    }
});

document.getElementById('scnd').addEventListener('click', () => {
    for (let items of clsname2) {
        console.log(items);
        items.style.backgroundColor = "yellow";
        items.style.position = "absolute";
    }
});

//queryselector
let qobj = document.querySelector('.heading');
console.log(qobj);
document.getElementById('qselect').addEventListener('click', () => { qobj.style.fontSize = "64px"; });
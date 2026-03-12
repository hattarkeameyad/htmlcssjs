
// BUTTON CLICK EVENT + TOGGLE

let btn = document.getElementById("colorBtn");
let box = document.getElementById("box");

btn.addEventListener("click", () => {
    box.classList.toggle("active");
});

// MOUSE EVENTS

box.addEventListener("mouseover", () => {
    console.log("Mouse entered box");
    box.classList.toggle('newone');



});

box.addEventListener("mouseout", () => {
    console.log("Mouse left box");
    box.style.transform = "translateX(50px)";
});


// KEYBOARD EVENT

let input = document.getElementById("inputbox");

input.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key);
});


// FORM EVENT

let form = document.getElementById("myform");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted");
});

// EVENT DELEGATION

let list = document.getElementById("fruitList");

list.addEventListener("click", (event) => {
    console.log("You clicked:", event.target.textContent);
});

// EVENT PROPAGATION (BUBBLING)

let container = document.getElementById("container");
container.addEventListener("click", () => {
    console.log("Container clicked");
});

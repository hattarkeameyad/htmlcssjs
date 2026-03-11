document.addEventListener('keydown', function (event) {
    document.getElementById('heading').innerText = "This buttone was pressed " + event.key;
    switch (event.key) {
        case "ArrowLeft":
            // Code to execute when the left arrow is pressed
            console.log('Left arrow pressed!');
            break;
        case "ArrowRight":
            // Code to execute when the right arrow is pressed
            console.log('Right arrow pressed!');
            break;
        case "ArrowUp":
            // Code for the up arrow
            console.log('up arrow pressed!');
            break;
        case "ArrowDown":
            // Code for the down arrow
            console.log('down arrow pressed!');
            break;
        default:
            console.log(event.key);
    }
});

let input = document.querySelector("input");

input.addEventListener("input", function () {
    console.log("User is typing");
});


window.addEventListener("scroll", function () {
    console.log("Page is scrolling");
});

let mousex, mousey;

let icon = document.getElementById('myicon');
icon.style.position = 'absolute';
document.addEventListener('mousemove', (event) => {

    mousex = event.clientX;
    mousey = event.clientY;
    // console.log(mousex,mousey);
    icon.style.transform=`translate(${mousex}px,${mousey}px)`;
});
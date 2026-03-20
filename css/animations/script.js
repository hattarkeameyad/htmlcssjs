let box = document.getElementById("box2");
box.addEventListener('mouseover', () => {

    console.log("Mouseover triggered");
    box.classList.add('animate__animated');
    box.classList.add('animate__bounceInUp');

});

box.addEventListener('animationend', () => {

    console.log("Mouseover triggered");
    box.classList.remove('animate__bounceInUp');
    box.classList.remove('animate__animated');

});
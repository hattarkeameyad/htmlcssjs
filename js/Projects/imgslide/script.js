let sliderobj = document.getElementById('sl');
let nxt = document.getElementById('nxt');
let prev = document.getElementById('prev');
let maxnumberofimage = 4;
let index = 0;
let next = () => {

    index++;
    if (index >= maxnumberofimage) {
        index = 0;
    }
    sliderobj.style.transform = `translateX(-${300 * index}px)`;

}
let previous = () => {
    if (index <= 0) {
        index = maxnumberofimage;
    }
    index--;

    sliderobj.style.transform = `translateX(-${300 * index}px)`;
}
nxt.addEventListener('click', next);
prev.addEventListener('click', previous);

setInterval(next,4000);
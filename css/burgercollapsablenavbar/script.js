const hamburger = document.getElementById('hamburger');
const menue=document.getElementById('menue');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menue.classList.toggle('visibility');
})
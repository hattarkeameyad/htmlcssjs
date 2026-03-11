
let mario = document.getElementById('mario');
let x = 0;
let xcord, ycord;
document.addEventListener('mousemove', (event) => {
    xcord = event.clientX;
    ycord = event.clientY;
    console.log(xcord, ycord)
    mario.style.transform = `translate(${xcord}px,${ycord}px)`;
});
document.addEventListener('keydown', (event) => {

    console.log(`${event.key} was pressed`);

    switch (event.key) {
        case 'ArrowRight':
            x += 20;
            mario.style.transform = `translateX(${x}px)`;
            if (x >= 1000) x = 0;
            break;

        case 'ArrowLeft':
            x -= 20;
            mario.style.transform = `translateX(${x}px)`;  
            if (x <= 0) x = 1000;
            break;
        case ' ':
            let fball = document.createElement('div');
            let fballimg = document.createElement('img');

            document.body.appendChild(fball);
            fball.appendChild(fballimg);

            fballimg.src = 'images.png';

            fball.classList.add('fireball');
            fballimg.id = 'fballimg';

            let firex = xcord;
            let firey = ycord;

            let xmove = firex;

            fball.style.position = "absolute";
            fball.style.left = `${firex}px`;
            fball.style.top = `${firey}px`;

            let shoot = setInterval(() => {

                xmove += 10;   // move right

                fball.style.left = `${xmove}px`;
                fball.style.top = `${firey}px`;

                if (xmove > window.innerWidth-100 ) {
                    clearInterval(shoot);
                    fball.remove();
                }

            }, 15);


            break;
    }

});
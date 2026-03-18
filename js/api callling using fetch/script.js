
// https://fakestoreapi.com/products

let printingdata = (rdata) => {
    console.log(rdata);
    rdata.forEach(element => {

        console.log(element.title);
        console.log(element.image);
        console.log(element.price);
        console.log(element.description);
        let cnt = document.getElementById('c1');

        //creating div element card
        let divcard = document.createElement('div');
        divcard.classList.add('card');
        cnt.appendChild(divcard);

        //adding img holder and image
        let divimgholder = document.createElement('div');
        divimgholder.classList.add('imgholder');
        //adding productimage
        let prodimg = document.createElement('img');
        prodimg.id = 'prodimg';
        prodimg.src = element.image;
        divimgholder.appendChild(prodimg);
        //adding the title into the page
        let ptitle = document.createElement('span');
        ptitle.id = 'title';
        ptitle.innerHTML = element.title;
        //adding the price 
        let pprice = document.createElement('span');
        pprice.id = 'price';
        pprice.innerHTML = element.price;
        //adding the button inside the code
        let btn = document.createElement('button');
        btn.value = "Buy Now";
        btn.classList.add('btnbuynow');
        btn.innerText = "Buy Now";
        divcard.append(divimgholder, ptitle, pprice, btn);

    });

}
fetch('https://fakestoreapi.com/products')
    .then(response => {
        // console.log(response);
        return response.json()
    })
    .then(data => { printingdata(data) })
    .catch(err => console.log(err))

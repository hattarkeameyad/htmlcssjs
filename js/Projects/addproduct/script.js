let btn = document.getElementById('addprod');
let prodname, description, price,imageurl,container;


btn.addEventListener('click', () => {


    imageurl=document.getElementById("produrl");
    prodname = document.getElementById('productname');
    description = document.getElementById('description');
    price= document.getElementById('price');

    //element creation
    let prodcard=document.createElement('div');
    let image=document.createElement('img');
    let producttitle=document.createElement('span');
    let productdesc=document.createElement('span');
    let pricel=document.createElement('span');

    //injecting product inot the dom

    container=document.getElementById('c1');

    container.appendChild(prodcard);
    prodcard.append(image,producttitle,productdesc,pricel);
    

//adding the classes and id's to component
    prodcard.classList.add('prodcard');
    image.id='prodimg';
    producttitle.id="productname";
    productdesc.id='proddesc';
    pricel.id="price";

//adding values to those components
    image.src= imageurl.value;
    producttitle.innerText=prodname.value;
    productdesc.innerText=description.value;
    pricel.innerText=price.value;


});
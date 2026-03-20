//  https://fakestoreapi.com/products


async function getdata() {

    try {
        let myval = await fetch('https://fakestoreapi.com/products');
        let obj = await myval.json();
        printingdata(obj);
    }
    catch (errr) {
        console.log(errr);
    }
}


function printingdata(obj) {

    obj.forEach(element => {
        console.log(element.title);
    });

}
getdata(); 
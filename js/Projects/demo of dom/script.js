function elementbyid() {
    let title = document.getElementById("mainTitle");
    title.textContent = "DOM Selection in Action";
}
function elementbyclassname() {
    let paragraphs = document.getElementsByClassName("info");
    paragraphs[0].style.color = "red";
    paragraphs[1].style.color = "blue";
}

function elementbytagname() {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.fontWeight = "bold";
    }
}
function queryselector() {
    let firstParagraph = document.querySelector(".info");
    firstParagraph.style.backgroundColor = "yellow";
}
function queryselectorall() {
    let allParagraphs = document.querySelectorAll(".info");
    allParagraphs.forEach(function (item) {
        item.style.border = "1px solid black";
        console.log(`${item.textContent}`);



    });
    console.log(allParagraphs);
    console.log(`This is the count for this perticular class ${allParagraphs.length}`);
    let idValue = document.getElementById("p3").id;
    console.log(idValue);

    let obj = document.getElementsByTagName('li');
    obj[1].innerText = "There was banana before i ate it "
    obj[2].innerHTML = "<a href='www.google.com'> THis is now a link</a>";

}
/* document.querySelector("#mainTitle");
document.querySelector("ul li");
document.querySelector(".info");*

}*/

let title = document.getElementById("title");
let paragraphs = document.getElementsByClassName("info");
let input = document.getElementById("nameInput");
function manipulateDOM() {

    //  Select elements
    // textContent (change text)
    title.textContent = "Hello " + input.value;

    //  style manipulation
    title.style.color = "blue";
    title.style.textAlign = "center";

    // classList manipulation
    title.classList.toggle("bigText");

    //  innerHTML (change HTML structure)
    paragraphs[0].innerHTML = "<b>Paragraph updated using innerHTML</b>";
    // innerText   
    paragraphs[1].innerText = "Paragraph changed using innerText";

    //  style multiple elements
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.add("highlight");
    }

    //  value property
    input.value = ""; // clear input field
}
let removeclass = () => {
    console.log(" entered removed");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.toggle("highlight");
    }

}


let addimg = () => {
    let imageurl = document.getElementById('imgurl');
    let newdiv=document.createElement('div');
    let container=document.getElementById('c1');
    newdiv.classList.add('child');
    container.appendChild(newdiv);
    let imgofthechild=document.createElement('img');
    imgofthechild.classList.add('frameimg');
    imgofthechild.src=imageurl.value;
    newdiv.appendChild(imgofthechild);
    let allchild=document.querySelectorAll('.child');
allchild.forEach((selectedchild)=>
{

    selectedchild.addEventListener('mouseenter',()=>{
        console.log("eventtriggered");
        selectedchild.style.transform="scale(1.8)";
        selectedchild.style.transition="transform ease 0.5s";
        
    });
      selectedchild.addEventListener('mouseleave',()=>{
        console.log("eventtriggered");
        selectedchild.style.transform="scale(1)";
        selectedchild.style.transition="transform ease 0.5s";
        
    });
});


}


// Welcome Message
window.onload = function(){

    console.log("Welcome to Ancient Flavours");

};

// Search Function
function searchFood(){

let input=document.getElementById("search").value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let title=card.querySelector("h2").innerText.toLowerCase();

if(title.includes(input)){

card.style.display="block";

}
else{

card.style.display="none";

}

});

}

// Open Region Pages
function openRegion(page){

window.location.href=page;

}

// Logout
function logout(){

let answer=confirm("Do you want to logout?");

if(answer){

window.location.href="index.html";

}

}
const firebaseConfig = {

apiKey: "AIzaSyCG3JBcpFRyDq44IreJz49G2YNeGHUjC5I",

authDomain: "kcse-2026-portal.firebaseapp.com",

projectId: "kcse-2026-portal",

storageBucket: "kcse-2026-portal.firebasestorage.app",

messagingSenderId: "396115235814",

appId: "1:396115235814:web:670d05659848d261d6bc27"

};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

let selectedProduct = "";

function payNow(product){
selectedProduct = product;
document.getElementById("popup").style.display = "flex";
}

function closePopup(){
document.getElementById("popup").style.display = "none";
}

function iPaid(){
alert("Waiting approval from admin...");
}

function sendWhatsapp(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;

let message =
"Hello Engineer Gido%0A%0A" +
"Name: " + name + "%0A" +
"Phone: " + phone + "%0A" +
"Purchased: " + selectedProduct + "%0A%0A" +
"I have completed payment.";

window.open(
"https://wa.me/254704956915?text=" + message,
"_blank"
);

}

function openAdmin(){
document.getElementById("adminPanel").style.display = "flex";
}

function loginAdmin(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === "jinxzen" && pass === "2222"){

document.getElementById("adminPanel").style.display = "none";

document.getElementById("dashboard").style.display = "block";

}else{
alert("Wrong login details");
}

}

function approveUser(){

alert(
"✅ Payment Approved Successfully"
);

window.open(
"https://teacher.co.ke",
"_blank"
);

}

/* COUNTDOWN */

let examDate = new Date("Nov 1, 2026 08:00:00").getTime();

let x = setInterval(function(){

let now = new Date().getTime();

let distance = examDate - now;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById("timer").innerHTML =
"KCSE Countdown: " + days + " Days Remaining";

},1000);

const buyers = [

"Brian",
"Mercy",
"Kevin",
"Faith",
"John",
"Sharon",
"Ian"

];

const products = [

"KCSE Predictions",
"Setbook Notes",
"Past Papers",
"Subject Notes"

];

function showLiveSale(){

let buyer =
buyers[Math.floor(Math.random() * buyers.length)];

let product =
products[Math.floor(Math.random() * products.length)];

document.getElementById("liveSale").innerHTML =
"🔥 " + buyer + " just purchased " + product;

}

setInterval(showLiveSale,5000);

function toggleMenu(){

document
.getElementById("menuLinks")
.classList.toggle("show-menu");

}

window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.display = "none";

},2000);

});
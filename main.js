"use script"

let ratingNummer;
let ratingBox = document.querySelector(".btn-rating--box");
let ratingResult = document.querySelector("#selected");
let submitBtn = document.querySelector(".btnSubmit");
let rating = document.querySelector("#rating");
let thanks =  document.querySelector("#thanks");


ratingBox.addEventListener("click", event => {
    ratingNummer = event.target.innerText;
    ratingResult.innerText = ratingNummer;
    console.log(ratingNummer);
});
submitBtn.addEventListener("click", () => {
    if (ratingNummer > 0 && ratingNummer <= 5){
        rating.style.display = "none";
        thanks.style.display = "block";
    } else {alert("you have to give Rate first")}
});
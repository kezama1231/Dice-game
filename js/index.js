var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

var diceImage = "images/dice" + randomNumber1 + ".png";
var diceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").attributes.src.value = diceImage;
document.querySelector(".img2").attributes.src.value = diceImage2;

//or

//document.querySelector(".img2").setAttribute("src", diceImage2);

//if diceImage > then player 1 wins. If less player 2 wins.
if (diceImage > diceImage2) {
  document.querySelector("h1").textContent = "Player 1 wins";
}

if (diceImage < diceImage2) {
  document.querySelector("h1").textContent = "Player 2 wins";
}

if(diceImage == diceImage2){
  document.querySelector("h1").textContent = "Draw !";
}

$("#reloadBtn").click(function(){
  location.reload();
});

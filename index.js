var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1

var diceImage1 = document.querySelector('.img1');
var diceImage2 = document.querySelector('.img2');

diceImage1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
diceImage2.setAttribute("src", "images/dice" + randomNumber1 + ".png");
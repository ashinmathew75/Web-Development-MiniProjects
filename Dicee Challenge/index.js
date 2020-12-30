
// create 2 random number between 1 to 6
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

// get random image based on random number betweem dice1.png to dice6.png
var randomDiceSource1 = "images/dice" + randomNumber1 + ".png";
var randomDiceSource2 = "images/dice" + randomNumber2 + ".png";

var diceImage1 = document.querySelectorAll("img")[0];
diceImage1.setAttribute("src", randomDiceSource1);

var diceImage2 = document.querySelectorAll("img")[1];
diceImage2.setAttribute("src", randomDiceSource2);

// player 1 wins
if(randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins! "
}
else if (randomNumber1<randomNumber2) {   //player 2 wins
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins! "
}
else {  // both player have same dice =  draw
  document.querySelector("h1").innerHTML = "Draw!";
}

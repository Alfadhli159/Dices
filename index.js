// الكود الخاص باللاعب رقم 1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "images/dice"+randomNumber1+".png";
var diceSource1 = document.querySelector(".img1").setAttribute("src", randomDiceImage1);

// الكود الخاص باللاعب رقم 2

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "images/dice"+randomNumber2+".png";
var diceSource2= document.querySelector(".img2").setAttribute("src", randomDiceImage2);

// تحديد من الفائز باستخدام الجمله الشرطية اف

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Plyer1 Wins! "
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = "Plyer2 Wins! "

}
else {   document.querySelector("h1").innerHTML = "Draw ! "
}

var randomNumber = Math.random();
randomNumber = Math.round((randomNumber*6)+1);
if (randomNumber === 1){
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if (randomNumber === 2) {
  document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if (randomNumber === 3) {
  document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if (randomNumber === 4) {
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if (randomNumber === 5) {
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else if (randomNumber === 6) {
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
}

var randomNumber2 = Math.random();
randomNumber2 = Math.round((randomNumber2*6)+1);

if (randomNumber2 === 1){
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if (randomNumber2 === 2) {
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if (randomNumber2 === 3) {
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if (randomNumber2 === 4) {
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if (randomNumber2 === 5) {
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else if (randomNumber2 === 6) {
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
}


if (randomNumber > randomNumber2){
  document.querySelector(".winner").innerHTML = "🥇Player 1 Wins";
}
else if(randomNumber===randomNumber2){
    document.querySelector(".winner").innerHTML = "Draw";
}
else{
    document.querySelector(".winner").innerHTML = "🥇Player 2 Wins";
}

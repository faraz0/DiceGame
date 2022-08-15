var num1 = Math.floor(Math.random()*6+1);
var num2 = Math.floor(Math.random()*6+1);

// var img1 = document.querySelector("img.img1");
// var img2 = document.querySelector("img.img2");

if(num1===num2){
document.querySelector("h1.h1-result").innerHTML = "It's a DRAW!"
document.querySelector("img.giffy2").setAttribute("src", "nothing");
}

if(num1>num2)
document.querySelector("h1.h1-result").innerHTML="Player 1 wins!";
if(num1<num2)
document.querySelector("h1.h1-result").innerHTML="Player 2 wins!";

if(num1===1) {
  document.querySelector("img.img1").setAttribute("src", "images/d1.png");
}
if(num1===2) {
  document.querySelector("img.img1").setAttribute("src", "images/d2.png");

}
if(num1===3) {
  document.querySelector("img.img1").setAttribute("src", "images/d3.png");

}
if(num1===4) {
  document.querySelector("img.img1").setAttribute("src", "images/d4.png");

}
if(num1===5) {
  document.querySelector("img.img1").setAttribute("src", "images/d5.png");

}
if(num1===6) {
  document.querySelector("img.img1").setAttribute("src", "images/d6.png");

}

if(num2===1) {

  document.querySelector("img.img2").setAttribute("src", "images/d1.png");

}
if(num2===2) {

  document.querySelector("img.img2").setAttribute("src", "images/d2.png");
}
if(num2===3) {

  document.querySelector("img.img2").setAttribute("src", "images/d3.png");
}
if(num2===4) {

  document.querySelector("img.img2").setAttribute("src", "images/d4.png");
}
if(num2===5) {

  document.querySelector("img.img2").setAttribute("src", "images/d5.png");
}
if(num2===6) {

  document.querySelector("img.img2").setAttribute("src", "images/d6.png");
}

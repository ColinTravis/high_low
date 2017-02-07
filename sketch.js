var guesses
var attempts = 0;
var win
var lose
var numberWin


function setup() {
  createCanvas(windowWidth,windowHeight)
  rectMode(CENTER)
  textAlign(CENTER)
}

function generateNumber() {
  numberWin = Math.floor(Math.random()*100);
  console.log(numberWin);
}

generateNumber();

function highLow(){
  if (guesses > 0) {
    guesses--;
    if (true) {

    }
  }
}

function draw() {
  background(62, 153, 135)
  strokeWeight(0)
  fill(215, 157, 79)
  rect(windowWidth/2,windowHeight/2,600,600);
  fill(77, 135, 240)
rect(windowWidth/2.4,windowHeight/1.5,200,200);
rect(windowWidth/1.7,windowHeight/1.5,200,200);
  fill(240)
  textSize(13)
  text("Try to guess the number of guesses you have.", windowWidth/2.4, windowHeight/1.25 , 200, 300);
  text("Try to guess the number of guesses you have.", windowWidth/1.7, windowHeight/1.25 , 200, 300);

  textSize(46)
  textFont("Segoe UI");
  fill(240)
  text("Try to guess the number of guesses you have.", windowWidth/2, windowHeight/2 , 500, 500);
}

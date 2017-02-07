// Number of Guesses
var guessesLeft = 3
// Guess Attempt
var guess
// Generate Winning number
var numberWin
// Create the text box and button
var input, button, answer


function setup() {
  createCanvas(windowWidth,windowHeight)
  input = createInput();
  input.position(windowWidth/2.2, windowHeight/2);

  button = createButton('GUESS');
  button.position(windowWidth/2.1, windowHeight/1.8);
  // Actually run the guessing function
  button.mousePressed(playGuess)

  answer = createElement('h2','Your answer is...')

  answer.position(windowWidth/2, windowHeight/1.5)
  rectMode(CENTER)
  textAlign(CENTER)
}


// Randomizes the number
function generateNumber() {
  numberWin = Math.floor(Math.random()*10);
  console.log(numberWin);
}

// Here's where the actual game happens. The guess is placed into the text field, and then the too high/low estimator runs
function playGuess(){
  guess = input.value();
  console.log(guess);
  highLow();
}

// Start generating a number right away
generateNumber();

// Determine if guess is too high or too low.
function highLow(){
  if (guessesLeft > 0) {
    guessesLeft--;
    if (guess > numberWin) {
      answer.html('Definitely not that many..')
      console.log("too high");
      console.log(guessesLeft);
    } else if (guess < numberWin) {
      answer.html('Not Quite Enough')
      console.log("too low");
      console.log(guessesLeft);
    }else {
      answer.html("2 but nobody knows how they got in there.")
      console.log("game win");
      return;
    }
  }
  else {
    answer.html("You're out of guesses")
    console.log("You're out ");
  }
}

function draw() {
  background(62, 153, 135)
//   strokeWeight(0)
//   fill(215, 157, 79)
//   rect(windowWidth/2,windowHeight/2,600,600);
//   fill(77, 135, 240)
// rect(windowWidth/2.4,windowHeight/1.5,200,200);
// rect(windowWidth/1.7,windowHeight/1.5,200,200);
//   fill(240)
//   textSize(13)
//   text("Try to guess the number of guesses you have.", windowWidth/2.4, windowHeight/1.25 , 200, 300);
//   text("Try to guess the number of guesses you have.", windowWidth/1.7, windowHeight/1.25 , 200, 300);

  textSize(46)
  textFont("Helvetica");
  fill(240)
  text("How many flies does it take to screw in a light bulb?", windowWidth/2, windowHeight/2 , 500, 500);

}

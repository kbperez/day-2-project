function guessAnumber(counter, number, rando ){

var number;
var rando = Math.floor(Math.random() * 11); //Random number 0-10
var counter = 0;

while (number !== rando) { //While loop to keep guessing
  number = parseInt(prompt('Guess a number from 0-10?'));
  console.log('Guessed', number);

  if (isNaN(number)) {
    alert ('Your response was not a number.  Please enter a number.');

  }else if (number < rando) {
    alert ('Sorry you guessed too low.');
    console.log('counter:', counter);

  } else if (number > rando) {
    alert ('Sorry you guessed too high.');
    console.log('counter:', counter);

  }

  counter++;
  console.log('counter:', counter);
}

  alert ('You got it right!  Number of tries was ' + counter);
  console.log('counter:', counter)

}

guessAnumber();

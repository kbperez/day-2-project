'use strict';
// Asking for user's name
var user = prompt('Thank you for your interest in candidate Karen Perez.  What is your name?');
console.log ('User name:',user);

//Question 1 What's my state name?
var homeState = prompt(user + ', nice to meet you!  Let\'s answer a few "Yes or No" questions about Karen.  Is Karen from Michigan?');

console.log('State correct?', homeState);
homeState = homeState.toLowerCase();
console.log('State correct?', homeState);

if (homeState === 'y' || homeState === 'yes') {
  alert('You are correct; Karen was born in Michigan. She went to Michigan State University.');
} else {
alert ('Karen is originally from Michigan and went to MSU.');
}
//Question 2 Married
var married = prompt(user + ', next question.  Is Karen married?');

console.log('Married correct?', married);
married = married.toLowerCase();
console.log('Married correct?', married);

if (married === 'y' || married === 'yes') {
  alert('You are correct; Karen is married.');
} else {
alert ('Actually, Karen has been married for 21 years.');
}

//Question 3 Have Kids
var kids = prompt(user + ', third question.  Does Karen have kids?');

console.log('Kids correct?', kids);
kids = kids.toLowerCase();
console.log('Kids correct?', kids);

if (kids === 'y' || kids === 'yes') {
  alert('You are correct! In fact, Karen has 4 kids.');
} else {
alert ('In fact, Karen has 4 kids.');
}

//Question 4 Dog
var dog = prompt(user + ', another question.  Is Karen a cat owner?');

console.log('Pet correct?', dog);
dog = dog.toLowerCase();
console.log('Pet correct?', dog);

if (dog === 'n' || dog === 'no') {
  alert('You are correct! In fact, Karen has a dog - a black lab named Rochester.');
} else {
alert ('No, Karen has a black lab named Rochester.');
}

//Question 5 At CodeFellows
var fellow = prompt(user + ', is Karen studying at CodeFellows?');

console.log('CodeFellow?', fellow);
fellow = fellow.toLowerCase();
console.log('Pet correct?',fellow);

if (fellow === 'y' || fellow === 'yes') {
  alert('You are correct! Karen is enrolled in Code 201 at CodeFellows.  Thank you for taking the time to get to know Karen.');
} else {
alert ('Actually, Karen is studying at CodeFellows and working hard.  Thank you for taking the time to get to know Karen.');
}

// Guess a number between 0-10, unlimited tries
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


// Array of states I've lived or worked in. -->
var states = ['MI' ,'GA' ,'SC' ,'NY', 'OK', 'CT', 'WI'];
var flag = false;
var guess = prompt('Can you guess a state other than WA that I have lived or worked in?  You get 6 tries.  Use the 2 letter postal abbreviation for your answer.');

guess = guess.toUpperCase(); //Alway upper case

for (var j = 0; j<5; j++) { //Outer loop for tries

console.log('Outer loop', guess, j)

     for (var i =0; i<states.length; i++) { //Inner loop to check array
      console.log('Inner loop', states[i],flag)

      if (guess === states[i]) { //If the correct answer do stuff
        console.log('Correct');
        alert('Great job! You are correct.');
        flag = true;
        j = 99;
        break;

      }

    }
  if (!flag) { //To reguess
  var guess = prompt('Sorry that\'s wrong.  ' + (5-j) + ' more attempts. Try again.');
  guess = guess.toUpperCase(); //Alway uoper case
  console.log('reset',guess);
}
}

if (!flag) { //If you didn't guess the state in 6 tries
  alert('Sorry, no more tries.  The states I\'ve lived or worked in are MI, GA, SC, NY, OK, CT, WI.');
} //END or prompts

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

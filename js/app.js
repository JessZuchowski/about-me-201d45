'use strict';

var guest, coding, games, fiction, hiking, collecting;

// Intro Question - Name
guest = prompt('What is your name?');
alert('Hi ' + guest +', it is lovely to meet you. My name is Jess.');
console.log('Asked for a guest name, result : ' + guest);
//Asked for a guest name, returned name in alert, logged answer.


// Question 1 - yes/y/other(no)
var coding = function() {
coding = prompt('Do you like coding?');
if (coding.toLowerCase() === 'yes') {
  alert('I am just learning coding and am having fun.');
} else if (coding.toLowerCase() === 'y') {
  alert('Direct answer, I like coding too.');
} else {
  alert('Coding takes a lot of effort to learn.'); }
console.log('Asked about coding, result : ' + coding);
}
//Asked about coding, return different alerts for 'yes' 'y' or other answers. Yes/Y adjust to lower case. Logs answer.


// Question 2 - yes/y/other(no)
var games = function() {
games = prompt('Do you like playing video games?');
if (games.toLowerCase() === 'yes') {
  alert('Me too, especially fantasy RPGs.');
} else if (games.toLowerCase() === 'y') {
  alert('Same here, but I have not had much time for them lately.');
} else {
  alert('I hope you enjoy other types of games, then.');
}
console.log('Asked about games, result : ' + games);
}
//Asked about video games, return different alerts for 'yes' 'y' or other answers. Yes/Y adjust to lower case. Logs answer.


// Question 3 - yes/y/other(no)
var fiction = function() {
fiction = prompt('Do you like reading fiction?');
if (fiction.toLowerCase() === 'yes') {
  alert('I read more sci-fi and fantasy than anything else.');
} else if (fiction.toLowerCase() === 'y') {
  alert('Fiction is my favorite genre.');
} else {
  alert('I try to read other things too, like JS tutorials.');
}
console.log('Asked about fiction, result : ' + fiction);
}
//Asked about reading fiction, return different alerts for 'yes' 'y' or other answers. Yes/Y adjust to lower case. Logs answer.


// Question 4 - yes/y/other(no)
var hiking = function() {
hiking = prompt('Do you like hiking in the woods?');
if (hiking.toLowerCase() === 'yes') {
  alert('I like looking for mushrooms while out hiking.');
} else if (hiking.toLowerCase() === 'y') {
  alert('I love being out in the forest.');
} else {
  alert('You might enjoy getting out more.');
}
console.log('Asked about hiking, result : ' + hiking);
}
//Asked about hiking, return different alerts for 'yes' 'y' or other answers. Yes/Y adjust to lower case. Logs answer.


// Question 5 - yes/y/other(no)
var collecting = function() {
collecting = prompt('Do you like collecting things?');
if (collecting.toLowerCase() === 'yes') {
  alert('I have a few collections including succulents, insects, and small wooden chests.');
} else if (collecting.toLowerCase() === 'y') {
  alert('I am happy with the art I have collected over the years.');
} else {
  alert('I might have too many collections, do I really need to keep acorns?');
}
console.log('Asked about collections, result : ' + collecting);
}
//Asked about collections, return different alerts for 'yes' 'y' or other answers. Yes/Y adjust to lower case. Logs answer.


// Question 6 - Number Guessing
var countriesGuess = function() { 
var countriesNumber = 8;
var countriesGuess = prompt('Can you guess the number of countries I have been to? Pick from 1-10.');
for (var guess = 3; guess > 0; guess--){
  if (countriesGuess > countriesNumber) {
    console.log('Asked to guess a number of countries, result : ' + countriesGuess , 'was too big');
    countriesGuess = prompt ('' + countriesGuess + ' is too big. Guess again.');   
  } else if (countriesGuess < countriesNumber) {
    console.log('Asked to guess a number of countries, result : ' + countriesGuess , 'was too small');
    countriesGuess = prompt ('' + countriesGuess + ' is too small. Guess again.');
  } else if (countriesGuess == countriesNumber) {
    console.log('Asked to guess a number of countries, result : ' + countriesGuess , 'was correct');
    countriesGuess = alert ('That is correct! I hope to visit more some day.');
    break;
  } else {
    countriesGuess = prompt ('Please supply a numeric value.');
  }
}
}
// What I played around with: I tried using alerts instead of prompts at first and that did not run through the script. Changing to prompts allowed script to run. I initailly wrote console.logs after the prompts but that did not yield intended results, so I went back and watched some code review. Switching logs with prompts worked. Had to remember to keep correct guess as an alert so that guessing prompts would stop there. Having === for correct guess did not yield intended results, changing to == worked but I'm not sure if it's the best fix. 
// What I ended up with: Asked to guess a number between 1-10 corresponding to countries been to. Gave a total of 4 guesses. Set guesses to 3 with a countdown using --. Logs each answer given with how it relates to correct number.        


// Question 7 - Guessing with Multiple Correct Answers
var outletGuess = function() {
var creativeOutlets = ['cooking', 'sewing', 'drawing'];
var outletGuess = prompt('Can you guess one of my favorite creative outlets?');
for (var guesses = 5; guesses > 0; guesses--){
  if (outletGuess.toLowerCase() === creativeOutlets[0]) {
    console.log('Asked to guess a creative outlet, result : ' + outletGuess , 'was a correct answer.');
    outletGuess = alert ('I cook almost every day and have the most fun baking cookies!');
    break;
  } else if (outletGuess.toLowerCase() === creativeOutlets[1]) {
    console.log('Asked to guess a creative outlet, result : ' + outletGuess , 'was a correct answer.');
    outletGuess = alert ('I like to sew small things like dice bags.');
    break;
  } else if (outletGuess.toLowerCase() === creativeOutlets[2]) {
    console.log('Asked to guess a creative outlet, result : ' + outletGuess , 'was a correct answer.');
    outletGuess = alert ('I usually draw in Photoshop, mostly fantasy character portraits.');
    break;
  } else {
    outletGuess = prompt ('' + outletGuess +' sounds fun, but try guessing something like woodworking or coding.');
    console.log('Asked to guess a creative outlet, result : ' + outletGuess , 'was incorrect.');
  }
}
}
// Uses an array for three possible correct answers. Guesses are set to 5 inside of the for loop, giving a total of 6. Each correct answer gives a different alert with more information about my favorite creative outlet, then breaks out of the loop. An incorrect guess give a prompt that reads back the guess as well as hints at the format I'm looking for. Console.logs are kept for all answers. 
coding();
games();
fiction();
hiking();
collecting();
countriesGuess();
outletGuess();

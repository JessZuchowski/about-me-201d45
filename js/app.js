'use strict';

var guest, coding, games, fiction, hiking, collecting;

guest = prompt('What is your name?');
alert('Hi ' + guest +', it is lovely to meet you. My name is Jess.');
console.log('Asked for a guest name, result : ' + guest);
//Asked for a guest name, returned name in alert, logged answer.

coding = prompt('Do you like coding?');
if (coding.toLowerCase() === 'yes') {
  alert('I am just learning coding and am having fun.');
} else if (coding.toLowerCase() === 'y') {
  alert('Direct answer, I like coding too.');
} else {
  alert('Coding takes a lot of effort to learn.'); }
console.log('Asked about coding, result : ' + coding);
//Asked about coding, return different alerts for 'yes' 'y' or other answers. Yes/Y adjust to lower case. Logs answer.

games = prompt('Do you like playing video games?');
if (games.toLowerCase() === 'yes') {
  alert('Me too, especially fantasy RPGs.');
} else if (games.toLowerCase() === 'y') {
  alert('Same here, but I have not had much time for them lately.');
} else {
  alert('I hope you enjoy other types of games, then.');
}
console.log('Asked about games, result : ' + games);
//Asked about video games, return different alerts for 'yes' 'y' or other answers. Yes/Y adjust to lower case. Logs answer.

fiction = prompt('Do you like reading fiction?');
if (fiction.toLowerCase() === 'yes') {
  alert('I read more sci-fi and fantasy than anything else.');
} else if (fiction.toLowerCase() === 'y') {
  alert('Fiction is my favorite genre.');
} else {
  alert('I try to read other things too, like JS tutorials.');
}
console.log('Asked about fiction, result : ' + fiction);
//Asked about reading fiction, return different alerts for 'yes' 'y' or other answers. Yes/Y adjust to lower case. Logs answer.

hiking = prompt('Do you like hiking in the woods?');
if (hiking.toLowerCase() === 'yes') {
  alert('I like looking for mushrooms while out hiking.');
} else if (hiking.toLowerCase() === 'y') {
  alert('I love being out in the forest.');
} else {
  alert('You might enjoy getting out more.');
}
console.log('Asked about hiking, result : ' + hiking);
//Asked about hiking, return different alerts for 'yes' 'y' or other answers. Yes/Y adjust to lower case. Logs answer.

collecting = prompt('Do you like collecting things?');
if (collecting.toLowerCase === 'yes') {
  alert('I have a few collections including succulents, insects, and small wooden chests.');
} else if (collecting.toLowerCase() === 'y') {
  alert('I am happy with the art I have collected over the years.');
} else {
  alert('I might have too many collections, do I really need to keep acorns?');
}
console.log('Asked about collections, result : ' + collecting);
//Asked about collections, return different alerts for 'yes' 'y' or other answers. Yes/Y adjust to lower case. Logs answer.

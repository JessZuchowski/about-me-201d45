'use strict';

var coding, games, fiction, hiking, collecting;


coding = prompt('Do you like coding?');
if (coding === 'yes') {
  alert('I am just learning coding and am having fun.');
} else {
  alert('Coding takes a lot of effort to learn.');
}
console.log('Asked about coding, result : ' + coding);

games = prompt('Do you like playing video games?');
if (games === 'yes') {
  alert('I like playing fantasy RPGs.');
} else {
  alert('I hope you enjoy other types of games, then.');
}
console.log('Asked about games, result : ' + games);

fiction = prompt('Do you like reading fiction?');
if (fiction === 'yes') {
  alert('I read more sci-fi and fantasy than anything else.');
} else {
  alert('I try to read other things too, like JS tutorials.');
}
console.log('Asked about fiction, result : ' + fiction);

hiking = prompt('Do you like hiking in the woods?');
if (hiking === 'yes') {
  alert('I like looking for mushrooms while out hiking.');
} else {
  alert('You might enjoy getting out more.');
}
console.log('Asked about hiking, result : ' + hiking);

collecting = prompt('Do you like collecting things?');
if (collecting === 'yes') {
  alert('I have a collection of insects.');
} else {
  alert('I might have too many collections, do I really need to save acorns?');
}

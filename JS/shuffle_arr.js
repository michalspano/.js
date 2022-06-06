// Shuffling an array in JavaScript using the Fisher-Yates algorithm
// Language: javascript

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var foo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var shuffledArr = shuffle(foo);

console.log(shuffledArr);

// Create an associative array 
// to store the following:
// character value: index value
// a-z: 0-25
// Declare dictionary
var dictionary = {};
for (var i = 0; i < 26; i++) {
    var letter = String.fromCharCode(i + 97);
    var index = i;
    dictionary[letter] = index;
}
for (var key in dictionary) {
    console.log(key + ": " + dictionary[key]);
}

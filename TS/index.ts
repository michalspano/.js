// Create an associative array 
// to store the following:
// character value: index value
// a-z: 0-25

// Declare an empty dictionary
let dictionary: { [key: string]: number } = {};

// Populate the dictionary with the values of the alphabet
for (let i = 0; i < 26; i++) {
    dictionary[String.fromCharCode(97 + i)] = i;
}

// Print all the associated values from the dictionary
for (let key in dictionary) {
    console.log(key + ": " + dictionary[key]);
}
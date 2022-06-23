/*
 # Function to check if a string is a palindrome.
 - we assume that the string be made of lowercase, alphanumeric characters.
 - we assume that the string is not empty.

 @param {string} str - the string to check.
 @return {boolean} - true if the string is a palindrome, false otherwise.
*/
const isPalindrome = (str: string): boolean => {
    if (str === '' || str === null) { return false; }
    let buff: string = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedBuff: string = buff.split('').reverse().join('');
    return buff === reversedBuff;
}
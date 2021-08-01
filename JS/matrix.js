// Declare global constants
const matrixArray = ['0', '1']; // Array with binary options
const LINE_MAX = 20; // Max number of chars in a single line

// Create matrix function
function matrix() 
{
    // Loop forever (not the best option, for simplistic purposes only)
    while (true)
    {
        // Define an empty string container
        var matrixString = String();

        // Invoke a loop with a boundary of 'LINE_MAX'
        for (let j = 0; j < LINE_MAX; j++)
        {
            // Choose random element from the binary array
            var identifier = Math.floor(Math.random() * matrixArray.length);
            // Add it to the string separated by a space
            matrixString += identifier + ' ';
        }
        // Prin out the final string repeatedly in the main while loop
        console.log(matrixString);
    }  
}

// Invoke the matrix function
matrix();

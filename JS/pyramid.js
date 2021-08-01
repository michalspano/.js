// Hash pyramid 
function createPyramid(height)
{
    // Create the upper part
    for (let i = 0; i < height; i++)
    {
        console.log(space.repeat(height - i) + hash.repeat(i) + hash + hash.repeat(i));
    }

    // Create the lower part
    for (let j = 1; j <= height; j++)
    {
        console.log(space.repeat(j) + hash.repeat(height - j) + hash + hash.repeat(height - j));
    }
}

// Create a spiral terminal effect
function spiral(height) 
{
    // Create constants for available symbols to choose from
    const symbol1 = '[', symbol2 = ']';
    function enumerate(par) 
    {
        // Return symbol1 is i-th instance is divisible by 2
        if (par % 2 == 0)
        {
            return symbol1;
        }
        else 
        {
            // Otherwise return the other symbol
            return symbol2;
        }
    }

    // Iterate with the boundary of predefined height
    for (let i = 1; i <= height; i++)
    {
        // Use returned value from the enumerate function
        var symbol = enumerate(i);
        // Print out the output
        console.log(space.repeat(height - i) + symbol.repeat(i) + symbol + symbol.repeat(height - i));
    }
}

// Declare constant char identifiers 
const space = ' ', hash = '#';
const MAX = 10;

// Invoke functions
// createPyramid(MAX);
spiral(MAX);

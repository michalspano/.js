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

// Create a constant height of the spiral
const HEIGHT = 15;

// Create constant 'space' identifier
const space = ' ';

// Invoke the spiral function
spiral(HEIGHT);
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

// Declare constant char identifiers 
const space = ' ', hash = '#';
const MAX = 10;

// Invoke the pyramid function
createPyramid(MAX);

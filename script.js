// Initialize the main function
function main(userRange) 
{
    var valueIsEven;

    // Iterate through the desired range
    for (let i = 1; i <= userRange; i++)
    {
        if (i % 2 == 0)
        {
            // Boolean value is set to true
            valueIsEven = true;

        }
        else
        {
            // Boolean value is set to false
            valueIsEven = false;
        }

        // Call the function with the value and it's divisibility bool value
        isEven(i, valueIsEven);
    }
}

// Determine whether a value is even or not
function isEven(num, val) 
{
    if (val)
    {
        // Prints out the value to be even
        console.log(num, "is even.");
    }
    else
    {
        // Prints out the value to be odd
        console.log(num, "is odd.");
    }   
}

// Calling the main function with the range as its paramater
main(20);
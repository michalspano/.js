function main(div) 
{
    for (let i = 1; i <= 100; i++)
    {
        if (isDivisible(i, div))
        {
            console.log(i, "is divisible by ", div);
        }
    }
}


function isDivisible(number, operator) 
{
    if (number % operator == 0)
    {
        return true;
    } 
    else
    {
        return false;
    }
}

main(5)

function myFunction(prompt: string) 
{
    for (let i = 0; i < 5; i++)
    {
        console.log("Hello, ", prompt);
    }
}

const userName: string = "Michal";
myFunction(userName);
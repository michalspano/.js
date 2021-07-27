// Create a default class
class userClas
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    prompt()
    {
        function enumarate(_age) 
        {
            return (100 - _age);
        }

        console.log("Hello,", this.name, "!");
        console.log("You need", enumarate(this.age), "years to be 100.\n")
    }
}

// Override the default class
class extendedUserClass extends userClas
{
    exportPrompt()
    {
        console.log("Name:",this.name, "\nAge:", this.age);
    }
}

// Constant values
const userName = "Michal", userAge = 18;

// Default class
let classInstance1 = new userClas(userName, userAge);
// classInstance1.prompt();

// New class
let classInstance2 = new extendedUserClass(userName, userAge);
classInstance2.prompt();
classInstance2.exportPrompt();
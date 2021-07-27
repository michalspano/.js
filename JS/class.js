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
        console.log("You need", enumarate(this.age), "years to be 100.")
    }
}

const userName = "Michal", userAge = 18;
let myPrompt = new userClas(userName, userAge);
myPrompt.prompt();
// Getters and setters in JS
class myClass
{
    constructor(size)
    {
        this.getSize(size);
    }

    getSize(par)
    {
        if (par < 0)
        {
            this.setSize(null);
        }
        else
        {
            this.setSize(par);
        }
    }
    setSize(par)
    {
        this.size = par;
    }
    prompt()
    {
        if (this.size != null) 
        {
            console.log("The size is", this.size, "\n");
        }
        else
        {
            console.log("Error: Invalid size!\n");
        }
    }
}


const num1 = 20 * 20;
let classInstance = new myClass(num1);
classInstance.prompt();
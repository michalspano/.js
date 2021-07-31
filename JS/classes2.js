const MAX = 20;

// Declare a new custom class
class Books
{
    // Definne a constructor to process the data
    constructor(person, book)
    {
        // Call the functions to evaluate data objects
        this.validatePerson(person);

        // Assign the book's the name if the validation was successful
        if (this.getBook(book.length))
        {
            this.book = book;
        }
        // Assign a null-type object
        else
        {
            this.book = null;
        }
    }

    // Function to validate the person's name
    validatePerson(name)
    {
        // Detect if name is empty or an empty space
        if (name == "" || name == " ")
        {
            // Assign 'Unnamed to the variable'
            const errorUser = "Unnamed";
            this.name = errorUser;
        }
        else 
        {   
            // Assign the name to the 
            this.name = name;
        }
    }

    // Validate the book's name
    getBook(bookNameLength)
    {
        /* 
        Using a const max. length of any book;
        detect if the boundary was crossed or if it's empty
        */

        if (bookNameLength <= MAX && bookNameLength > 0)
        {
            // Return true for the function
            return true;
        }
        else
        {
            // Return false for the function
            return false;
        }
    }

    // Prompt the user with validation
    mapData()
    {
        // Process suitable input
        if (this.book != null)
        {
            // Create a Map instance to store data
            dataContainer.set("Person1", [this.book, this.name]);
            console.log(dataContainer);
        }
        // Issue invalud input
        else 
        {
            console.log("Error!\n No Map object was created.")
        }
    }
}

// User default data values
const person1 = "Michal", book1 = "AI Quest";

// Creating a global Map object
var dataContainer = new Map();

// Create a new insntance of the class
let bookInstance = new Books(person1, book1);

// Invoke the prompt function from the class
bookInstance.mapData();

// Declaring a global max. value
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
            // Return a Map instance to store data
            var dataContainer = new Map();
            dataContainer.set("Person1", [this.book, this.name]);
            return dataContainer;
        }
        // Issue invalud input
        else 
        {
            // Return null
            console.log("Error!\n No Map object was created.")
            return null;
        }
    }
}

// User default data values
const person1 = "Michal", book1 = "AI";

// Create a new insntance of the class
let bookInstance = new Books(person1, book1);

// Invoke the prompt function from the class and get the returned value
let mapObject = bookInstance.mapData();

// Process the Map Object
function executeMap(map) 
{
    if (mapObject != null)
    {
        // If no null detected, print it out
        console.log(map);
    }
    else
    {
        // If null detected, print 'undefined'
        console.log(undefined);
    }    
}

// Execute the function with the parameter
executeMap(mapObject);

// Create an extended class
class modernBooks extends Books
{
    // Funnction to align the elements in a range
    specialIteration(MAX)
    {
        // Create a constant message to be displayed in every iteration
        const iterMessage = this.name + ": " + this.book;
        for (let i = 1; i <= MAX; i++)
        {
            // Create a local container 'shift'
            var shift;

            // Shift every second message by it's length
            if (i % 2 == 0)
            {
                shift = i + iterMessage.length;
            }
            else
            {
                shift = i;
            }
            // Output the message in a cycle
            console.log(" ".repeat(shift) + " " + iterMessage);
        }
    }
}

// Range is to be a random intiger from 1 through 30
const MAX_RANGE = Math.floor(Math.random() * 30) + 1;

// Create an instance of the extended class
let modernBooksInstance = new modernBooks(person1, book1);

// Call a method of the class
modernBooksInstance.specialIteration(MAX_RANGE);

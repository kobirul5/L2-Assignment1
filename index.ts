// Problem 1

function formatString(input: string, toUpper?: boolean): string {
    if (toUpper || typeof toUpper === "undefined") {
        const outPut = input.toUpperCase()
        return outPut;
    }
    else {
        return input.toLowerCase()
    }
}

console.log(formatString("Hello",))        // Output: "HELLO"
console.log(formatString("Hello", true))  // Output: "HELLO"
console.log(formatString("Hello", false))// Output: "hello"


// Problem 2

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filterData = items.filter((i) => i.rating >= 4)
    return filterData
}


const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

const filterRatingData = filterByRating(books);
console.log(filterRatingData)
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]


// Problem 3

function concatenateArrays<T>(...arrays: T[][]): T[] {
    let initialArray: T[] = [];
    for (let arr of arrays) {
        initialArray = initialArray.concat(arr)
    }
    return initialArray
}

const testArray = concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
const testArraye = concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]

console.log(testArray,testArraye, "----------------")


// Problem 4

class Vehicle {
    private make : string;
    private year: number;

    constructor(make: string, year: number){
        this.make = make;
        this.year = year;
    }

    getInfo():string {
        return `Make: ${this.make} Year: ${this.year}`
    }

}

class Car extends  Vehicle{
    private model : string;

    constructor (make: string, year: number, model : string){
        super(make,year)
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}



const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
myCar.getModel();  // Output: "Model: Corolla"

console.log("problem 5",myCar.getInfo(), myCar.getModel())


// Problem 6 

function processValue(value: string | number): number{
    let result :  number = 0
    if(typeof value === "string"){
        result = value.length;
    }else if(typeof value === "number"){
       result = (value * 2)
       console.log(result)
    }
    return result;
}

processValue("hello"); // Output: 5
processValue(10);      // Output: 20


// Problem 7


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend"
    }
    return "Weekday"
  }

getDayType(Day.Monday);   // Output: "Weekday"
getDayType(Day.Sunday);   // Output: "Weekend"


// Problem 8


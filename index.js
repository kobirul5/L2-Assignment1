// Problem 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function formatString(input, toUpper) {
    if (toUpper || typeof toUpper === "undefined") {
        var outPut = input.toUpperCase();
        return outPut;
    }
    else {
        return input.toLowerCase();
    }
}
console.log(formatString("Hello")); // Output: "HELLO"
console.log(formatString("Hello", true)); // Output: "HELLO"
console.log(formatString("Hello", false)); // Output: "hello"
// Problem 2
function filterByRating(items) {
    var filterData = items.filter(function (i) { return i.rating >= 4; });
    return filterData;
}
var books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
var filterRatingData = filterByRating(books);
console.log(filterRatingData);
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
// Problem 3
function concatenateArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var initialArray = [];
    for (var _a = 0, arrays_1 = arrays; _a < arrays_1.length; _a++) {
        var arr = arrays_1[_a];
        initialArray = initialArray.concat(arr);
    }
    return initialArray;
}
var testArray = concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
var testArraye = concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
console.log(testArray, testArraye, "----------------");
// Problem 4
var Vehicle = /** @class */ (function () {
    function Vehicle(make, year) {
        this.make = make;
        this.year = year;
    }
    Vehicle.prototype.getInfo = function () {
        return "Make: ".concat(this.make, " Year: ").concat(this.year);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, year, model) {
        var _this = _super.call(this, make, year) || this;
        _this.model = model;
        return _this;
    }
    Car.prototype.getModel = function () {
        return "Model: ".concat(this.model);
    };
    return Car;
}(Vehicle));
var myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
myCar.getModel(); // Output: "Model: Corolla"
console.log("problem 5", myCar.getInfo(), myCar.getModel());
// Problem 6 
function processValue(value) {
    var result = 0;
    if (typeof value === "string") {
        result = value.length;
    }
    else if (typeof value === "number") {
        result = (value * 2);
        console.log(result);
    }
    return result;
}
processValue("hello"); // Output: 5
processValue(10); // Output: 20
// Problem 7
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
}
getDayType(Day.Monday); // Output: "Weekday"
getDayType(Day.Sunday); // Output: "Weekend"
// Problem 8
// async function squareAsync(n: number): Promise<number>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(n<0){
//                 reject(new Error("Negative result Not Allowed"))
//             }
//             else{
//                 resolve(n*n);
//             }
//         }, 1000);
//     })
// }
// squareAsync(4).then(console.log);        // Output after 1s: 16
// squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed

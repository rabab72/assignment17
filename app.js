// Declare and initialize an empty multidimensional array
let multiDimArray = [];
// Declare and initialize a multidimensional array representing the given matrix
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
// Printing numeric counting from 1 to 10 with each number on a new line
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Taking input from the user for the number and length of the multiplication table
let tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// Printing the multiplication table
console.log("Multiplication table of " + tableNumber + " up to " + tableLength + ":");

for (let i = 1; i <= tableLength; i++) {
    let result = tableNumber * i;
    console.log(tableNumber + " * " + i + " = " + result);
}
// Array of fruits
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Printing items of the array using a for loop
console.log("Items of the array:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Counting: 1 to 15
document.write("<h3>Counting: </h3>");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

// Reverse counting: 10 to 1
document.write("<h3>Reverse counting: </h3>");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

// Even: 0 to 20
document.write("<h3>Even: </h3>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}

// Odd: 1 to 19
document.write("<h3>Odd: </h3>");
for (let i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}

// Series: 2k to 20k
document.write("<h3>Series: </h3>");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}
// Array of items
let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item in the array
function searchItem(item) {
    // Convert item to lowercase for case-insensitive search
    item = item.toLowerCase();

    // Flag to indicate if the item is found
    let found = false;

    // Loop through the array to search for the item
    for (let i = 0; i < A.length; i++) {
        if (A[i].toLowerCase() === item) {
            found = true;
            break;
        }
    }

    // Displaying result to the user
    if (found) {
        alert("Yes, the item '" + item + "' is found in the list.");
    } else {
        alert("No, the item '" + item + "' is not found in the list.");
    }
}

// Prompting the user for input and calling the searchItem function
let userInput = prompt("Enter the item you want to search:");
searchItem(userInput);
// Given array
let A = [24, 53, 78, 91, 12];

// Function to find the largest number in the array
function findLargestNumber(arr) {
    // Initialize the largest number with the first element of the array
    let largest = arr[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // If the current element is greater than the largest number, update the largest number
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    // Return the largest number
    return largest;
}

// Call the function to find the largest number in the array
let largestNumber = findLargestNumber(A);

// Display the result
console.log("The largest number in the array is: " + largestNumber);
let password = prompt("Enter your password:");

if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("OK");
    }
} else {
    alert("Password cannot be empty");
}
if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}
if (a === 1 && c === "Max") {
    alert("OK");
}
// Declare and assign values to two variables
let num1 = 10;
let num2 = 10;

// Test conditions using nested if statements
if (num1 === num2) {
    if (num1 <= num2) {
        alert("Both conditions passed.");
    }
}
let emptyArray = [];
let stringArray = ["Hello"];
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]); // This will alert "j"
var alphabet = ["j", "i", "j", "k", "l", "m", "n", "o"];
var length = alphabet.length;
alert("Total length of the array: " + length); // This will alert the total length of the array
// Creating an array with 1 string element
let array = ["firstElement"];

// Adding an additional element using push
array.push("secondElement");

// Creating an alert with the last element
alert(array[array.length - 1]); // This will alert "secondElement"
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop(); // Removes the last element from the array
console.log(Alphabet); // This will log ["h", "i", "j"]
var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(42); // Adds a number (42 in this case) to the end of the array
console.log(Alphabet); // This will log ["h", "i", "j", "k", 42]
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift(); // Removes the first element from the array
console.log(sizes); // This will log ["M", "XL", "XXL", "XXXL"]
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3); // Adds three number elements (1, 2, 3) to the beginning of the array
console.log(sizes); // This will log [1, 2, 3, "S", "M", "XL", "XXL", "XXXL"]
let array = ["firstElement"]; // Declare an array with one element
array.unshift("secondElement"); // Add a second element to the beginning of the array
alert(array[0]); // This will alert "secondElement"
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L"); // Inserts "L" into the array between "M" and "XL"
console.log(sizes); // This will log ["S", "M", "L", "XL", "XXL", "XXXL"]
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3); // Copies the first 3 sizes into a new array
console.log(regSizes); // This will log ["S", "M", "XL"]
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "hamster", "parrot"); // Removes "cat", "ox", and "duck" and adds "hamster" and "parrot" after "dog"
console.log(pets); // This will log ["dog", "hamster", "parrot", "frog"]
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2); // Removes "cat" and "ox" from the array
console.log(pets); // This will log ["dog", "duck", "frog"]
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5); // Copies elements from index 3 (inclusive) to index 5 (exclusive) into a new array
console.log(reducedPets); // This will log ["duck", "frog"]
for (let i = 0; i < 10; i++) {
    // Code to be executed inside the loop goes here
    console.log("Iteration " + (i + 1));
}
for (let i = 0; i <= 11; i++) {
    for (let i = 0; i <= 4; i++)
        for (let count = 0; count < 100; count++) {
            for (let i = 3; i > 0; i--) {
                let numberOfElements = array.length;
                let flag = true; // or false, depending on the desired initial value
                for (let i = 0; i < pets.length; i++) {

                    for (let i = 1; i <= 10; i++) {
                        if (i === 2) {
                            alert("Counter on the second iteration: " + i);
                            break;
                        }
                    }
                    // Assuming you have an array named "userNames" containing user names
                    let userNames = ["Alice", "Bob", "Charlie", "David"];

                    let firstName = prompt("Enter first name");

                    for (let i = 0; i < userNames.length; i++) {
                        if (userNames[i] === firstName) {
                            alert("Enter");
                            break;
                        } else if (i === userNames.length - 1) {
                            alert("Please write correct user name");
                        }
                    }
                    var matchFound = false;
                    for (var i = 0; i < list.length; i++) {
                        if (userInput === list[i]) {
                            alert("Match");
                            matchFound = true;
                            break;
                        }
                    }

                    if (!matchFound) {
                        alert("No match found");
                    }
                    var firstArr = ["a", "b", "c", "d", "e", "f"];
                    var secondArr = [1, 2, 3, 4, 5, 6];

                    for (let i = 0; i < firstArr.length; i++) {
                        for (let j = 0; j < secondArr.length; j++) {
                            console.log(firstArr[i] + secondArr[j]);
                        }
                    }
                    let password = "example"; // Assuming password is a non-empty string

                    if (password !== "") {
                        if (password.length <= 5) {
                            alert("Password must be greater than 5");
                        } else {
                            alert("OK");
                        }
                    }
                    if (a === 1) {
                        if (c === "Max") {
                            alert("OK");
                        }
                    }
                    if (a === 1 && c === "M") {
                        alert("OK");
                    }
                    let num1 = 10;
                    let num2 = 10;

                    if (num1 === num2) {
                        if (num1 <= num2) {
                            alert("Both conditions are true: num1 equals num2 and is less than or equal to num2.");
                        }
                    }
                    let emptyArray = [];
                    let arrayWithString = ["Hello"];
                    var alphabet = ["h", "i", "j", "k"];
                    var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
                    console.log(alphabet.length); // Output: 8
                    // Declare an array with one element
                    let myArray = ["apple"];

                    // Add a second element with index in the array
                    myArray[1] = "banana";

                    // Create an alert with the message as the new element
                    alert(myArray[1]); // This will alert "banana"
                    // Code an array with 1 string element
                    let myArray = ["apple"];

                    // Add an additional element to the array using push
                    myArray.push("banana");

                    // Create an alert whose message is the last element
                    alert(myArray[myArray.length - 1]); // This will alert "banana"
                    let Alphabet = ["h", "i", "j", "k"]; // Corrected the missing comma between "j" and "k"

                    // Remove the last element from the array using pop
                    Alphabet.pop();
                    let Alphabet = ["h", "i", "j", "k"]; // Corrected the missing comma between "j" and "k"

                    // Add a new element, a number, to the end of the array
                    Alphabet.push(5);
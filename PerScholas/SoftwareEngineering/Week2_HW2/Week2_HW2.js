/* 1. Write a program to add up all the elements of a number array.
 add up elements in a number array */
const addUp = (arr) => {
    let sum = 0;
    // Iterate through all elements 
    // and add them to sum 
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
}

// Driver code
const arr = [56, 56, 7, 8, 33];
console.log('\nSum of given array is ' + addUp(arr)+ '\n');

/* 2. Write a program to look for the user input in an array. When it finds the first occurrence, 
display the value and the index of that value */
let prompt = require('prompt-sync')();
const callPrompt = (input = prompt("Given array [56, 56, 7, 8, 33] select which value to find: ")) => input;
let userinput = Number(callPrompt());

function getOccurrence(arr, userinput) {
    //returns a filtered array with only the values entered ex: [56,56] and use .length 
    //to count its how many times it appears in the array
    return arr.filter((element) => (element === userinput)).length;
}
function inputOccursIndex(arr, userinput) {
    //create new array to store array positions
    let arrIndexStorage = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === userinput) {
            arrIndexStorage.push(i);
        }
    }
    return arrIndexStorage.toString();
}

console.log('\n'+ 'The number ' + userinput + ' occurs ' +
    getOccurrence(arr, userinput) + ' times in the array at index ' + inputOccursIndex(arr, userinput)+ '\n');

/* 3. Write a program to find the longest element in a string array. */
const longestArr = ['Ali', 'Alex', 'Henry', 'John'];
const longest = longestArr.reduce(
    (a, b) => {
        return a.length > b.length ? a : b;
    }
);

console.log('The longest string in the array ' + '[' + longestArr + '] is ' + longest+ '\n')
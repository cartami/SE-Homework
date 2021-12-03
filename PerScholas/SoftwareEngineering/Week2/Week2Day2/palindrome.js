
// example : var str = "Da.d";\
//Question 1
var prompt = require('prompt-sync')();
var str = prompt('Enter your palindrome: ');
//var str = "Da.d";
var strLength = str.length; //capture the length of the original string

// //Question 2. Lowercase the string and use the RegExp to remove unwanted characters from it like . or ,
var re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
console.log("The amount of  letters, numbers, and special characters in this string is " + strLength);
console.log()

var lowRegStr = str.toLowerCase().replace(re, '');
// str.toLowerCase() = "Da.d".toLowerCase() = "da.d"
// str.replace(/[\W_]/g, '') = "Da.d".replace(/[\W_]/g, '') = "dad"
// var lowRegStr = "dad";
console.log(str + 'converted to lowercase and all non-alphanumeric \ncharacters removed: ' + lowRegStr)
console.log()

var reverseStr = lowRegStr.split('').reverse().join('');
// lowRegStr.split('') = "dad".split('') = ["d", "a", "d"]
// ["d", "a", "d"].reverse() = ["d", "a", "d"]
// ["d", "a", "d"].join('') = "dad"
// So, "dad".split('').reverse().join('') = "dad";
// And, var reverseStr = "dad";
console.log(str + ' reversed is: ' + reverseStr)
console.log()

// Check if reverseStr is strictly equals to lowRegStr and return a Boolean using ternary operator
console.log('Is ' + str + '===' + reverseStr + '? ' + (lowRegStr === reverseStr ? true : false))// "dad" === "dad"? => true
console.log()

//Question 3
var str = prompt('Enter your a sentence: ');
console.log()
var word = prompt('Enter a word repeated in the sentence: ');
console.log()

// split the str string by spaces in splitString
var splitString = str.split(" ");

// search for pattern in splitString
var count = 0;
for (let i = 0; i < splitString.length; i++) {
    // if match found increase count
    if (word == (splitString[i]))
        count++;
}
console.log("How many times a user entered word occurs in given string " + count + ' times.');

//Question 4
var operator = prompt('Enter your calulator input Add,Subtract,Multiply,Divide or Exit: ');
console.log()
var numbers = prompt('Enter two numbers to calculate with space in between ');
console.log()
var re = /[^0-9]/g;
console.log()
var lowRegStr = numbers.toLowerCase().replace(re, ' ');
console.log(lowRegStr)
var splitString = lowRegStr.split(' ');
console.log(splitString)
var output;

switch (operator) {
    case 'Add':
        output = Number(splitString[0]) + Number(splitString[1]);
        break;

    case 'Subtract':
        output = Number(splitString[0]) - Number(splitString[1]);
        break;

    case 'Multiply':
        output = Number(splitString[0]) * Number(splitString[1]);
        break;

    case 'Divide':
        output = Number(splitString[0]) / Number(splitString[1]);
        break;

    case 'Exit':
        break;

    /* If user enters any other operator or char apart from
     * +, -, * and /, then display an error message to user
     * 
     */
    default:
        console.log("Invalid Option");
        return;
}
console.log("The numbers " + splitString[0] + ' ' + operator + ' ' + splitString[1] + " = " + output);

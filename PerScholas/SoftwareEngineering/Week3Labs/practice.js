/* 
function isPrime(num) {
    if(num < 2) return "not prime" + num;
        //divide by 2 and all numbers up to -1 than the number 
    for (let k = 2; k < num; k++){
      if( num % k == 0){
        return "not prime" + num;
      }
    }
    return num;
  }

  for(let i = 1; i<20; i++){
      console.log(isPrime(i));
  } */
/* var result = 'x ';
for (var i = 0; i < 11; i++) {

    for (var j = 0; j < 11; j++) {

        if(i == 0 && j > 0){
          result += '[' + j + ']';
        } 
        else if(j == 0 && i>0){
          result += '[' + i + '] ';
        } 
        else if(i>0 && j>0){
        result += (i*j) + ' ';
        }
    }
    result += '\n'
}

console.log(result); */

/* let i = 0;
let sum = 0;
while(i<11){
        sum = + i;
        i++;
}
 

    console.log("sum of numbers from 1-10 is :" +sum +'\n');


let j = 10;
let sumOfOdd = 0;
while(j<21){
    if(j % 2 == 0)
    console.log("this number is even" + j);
    else
    sumOfOdd = + j;
        j++;
}
 

    console.log("sum of the odd numbers from 10-20 is: " + sumOfOdd);
   
 */

/*     let prompt = require('prompt-sync')()

let num = prompt('enter a number: ')

console.log(num) */


//library for prompt
/* let prompt = require('prompt-sync')()

for(let r = 1; r<=5; r++)
{
    name = prompt('Enter your name: ') // asks you for name prompt for each row
    for(let c = 1; c<=6; c++){
        process.stdout.write(name + " "); //prints on each column by row
        //process.stdout.write(r.toString())
    }
    console.log()
} */


//prints triangle
var num = "";
var size = 5
for(var i=1; i<=size; i++)
{
  num = num + i
  console.log(num);
}
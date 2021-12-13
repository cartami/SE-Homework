const numbersTransverse = (value, index) => {
    return "Value: "+ value + " at Index: " + index;
  }
const numbers = [6, 4, 944, 16, 252];

console.log(numbers.map(numbersTransverse));

let numbersOutput = `numbers Array to transverse: ' ${[6, 4, 944, 16, 252]}'`
document.getElementById('initialArry').innerHTML= numbersOutput;

let numbersTransverseOutput = `numbersTransverseOutput: ' ${numbers.map(numbersTransverse)}'`
document.getElementById('transverseArry').innerHTML= numbersTransverseOutput;

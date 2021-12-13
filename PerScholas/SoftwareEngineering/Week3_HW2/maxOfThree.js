
function maxOfThree(celsius) 
{
    let max = Math.max(...array);
    //console.log(max); //46
    return max;
}

let array = [24,46,25];
let output = `max of Three in array [24,46,25] 'is ${maxOfThree(array)}'`
document.getElementById("maxOfThree").innerHTML= output;
function celsiusToFahrenheit(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
  console.log(message);
  return message;
}

function fahrenheitToCelsius(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.'; //conversion between degrees Celsius and Fahrenheit
  console.log(message);
  return message;
} 

let outputFahrenheit = `CelsiusToFahrenheit: ' ${celsiusToFahrenheit(14)}'`
document.getElementById("celsiusToFahrenheit").innerHTML= outputFahrenheit;


let outputCelsius = `FahrenheitToCelsius: ' ${fahrenheitToCelsius(66)}'`
document.getElementById("fahrenheitToCelsius").innerHTML= outputCelsius;
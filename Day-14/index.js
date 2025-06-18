function celsiusToFaherniet(input){
let fahrenheit = (input * 9/5) + 32;
return fahrenheit;
}

console.log(celsiusToFaherniet(45));
function fahrenheitToCelsius(input){
    let celsius = (input - 32) * 5/9;
    return celsius;
}
console.log(fahrenheitToCelsius(113));

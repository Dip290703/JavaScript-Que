// Qu:1
function calAreaOfReactangle(){
    let Length = parseInt(prompt("Enter the Length of Rectangle: "));
    let Width = parseInt(prompt("Enter the Width of Rectangle: "));
    let Area = Length * Width;
    return Area
}
// console.log("Area of Rectangle is: " + calAreaOfReactangle());

// Qu:2
 function isOddEven () {
    let number = parseInt(prompt("Enter a number: "));
    if(number% 2 === 0){
        console.log(`${number} is an Even number`);
        
    }else{
        console.log(`${number} is an Odd number`);
    }
 }
// isOddEven();

// Qu:3

function smallestNumber() {
    let num1 = parseInt(prompt("Enter first number: "));
    let num2 = parseInt(prompt("Enter second number: "));
    let num3 = parseInt(prompt("Enter third number: "));

    if (num1 < num2 && num1 < num3) {
        console.log(`${num1} is the smallest number`);
    } else if (num2 < num1 && num2 < num3) {
        console.log(`${num2} is the smallest number`);
    } else {
        console.log(`${num3} is the smallest number`);
    }
}   
// smallestNumber();
function smallestBiggest (){
    let num = []
    let n = parseInt(prompt("Enter the number of elements: "));
    for(let i = 0;i < n;i++){
        num.push(parseInt(prompt(`Enter number ${i + 1}: `)));
    }
    console.log(num);
    let small = num[0];
    for(let i= 1 ; i<n;i++) {
        if(num[i]<small){
            small = num[i];
        }
    }
    console.log(`The smallest number is: ${small}`);

    let big = num[0];
    for(let i= 1 ; i<n;i++) {
        if(num[i]>big){
            big = num[i];
        }
    }
    console.log(`The largest number is: ${big}`);
}
// smallestBiggest();

// Qu:4

function reverseString (string) {
    let reversed = ''
    for (let i = string.length-1 ; i >= 0 ; i --){
        reversed += string[i];
    }
    return reversed;
}
//console.log(reverseString("Hello World"));

function reverseString2 (string) {
    let reversed = string.split('').reverse().join('');
    return reversed;
}
//console.log(reverseString2("Hello World"));

// Qu:5

function factorial(n){
    let factorial = 1
    if(n === 0 || n === 1){
        return factorial;
    }
    for (let i = 1; i<=n;i++){
        factorial = factorial * i;
    }
    return factorial;
}
//console.log(factorial(1)); // 120
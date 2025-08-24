//given number is odd or even
function oddEven (num){
   // return num % 2 === 0 ? console.log("given number is even") : console.log("given number is odd");
   return num % 2 === 0 ? "given number is even" : "given number is odd";
}
oddEven(5);
console.log( oddEven(5) );

oddEven(10);

const oddEven2 = (num) => {
   if(num % 2 === 0){
        console.log("given number is even");
    }
   else{
    console.log("given number is odd");
   }
}
oddEven2(7);
oddEven2(12);

console.log(oddEven2);
console.log( typeof oddEven);


//-----------------------------------------------------------------------------------------------------------------------//

// smallest number among three numbers
function smallestNum (a, b, c){
    if(a < b && a < c){
        console.log(a + " is the smallest number");
    }
    else if(b < a && b < c){
        console.log(b + " is the smallest number");
    }
    else{
        console.log(c + " is the smallest number");
    }
}
smallestNum(5, 2, 8);
smallestNum(1, 6, 3);
smallestNum(4, 9, 0);

const smallestNum2 = (a, b, c) => {
    if(a < b && a < c){
        return a + " is the smallest number";
    }
    else if(b < a && b < c){
        return b + " is the smallest number";
    }
    else{
        return c + " is the smallest number";
    }
}
console.log( smallestNum2(5, 2, 8) );
console.log( smallestNum2(1, 6, 3) );
console.log( smallestNum2(4, 9, 0) );

console.log(smallestNum);
console.log( typeof smallestNum);

// factorial of a number

function factorial(num){
    let fact = 1;
    for(let i = 1; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}
console.log( factorial(5) );
console.log( factorial(0) );
console.log( factorial(1) );

const factorial2 = (num) => {
    let fact = 1;
    for(let i = 1; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}
console.log( factorial2(5) );
console.log( factorial2(0) );
console.log( factorial2(1) );

console.log(factorial);
console.log( typeof factorial);

//-----------------------------------------------------------------------------------------------------------------------//

// reverse a string
function reverseString(str){
    let revStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        revStr = revStr + str[i];
    }
    return revStr;
}
console.log( reverseString("hello") );
console.log( reverseString("JavaScript") );

const reverseString2 = (str) => {
    let revStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        revStr = revStr + str[i];
    }
    return revStr;
}
console.log( reverseString2("hello") );
console.log( reverseString2("JavaScript") );

console.log(reverseString);
console.log( typeof reverseString);

//-----------------------------------------------------------------------------------------------------------------------//

// check palindrome
function isPalindrome(str){
    let revStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        revStr = revStr + str[i];
    }
    return revStr === str ? true : false;
}
console.log( isPalindrome("madam") );
console.log( isPalindrome("hello") );

const isPalindrome2 = (str) => {
    let revStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        revStr = revStr + str[i];
    }
    return revStr === str ? true : false;
}
console.log( isPalindrome2("madam") );
console.log( isPalindrome2("hello") );

console.log(isPalindrome);
console.log( typeof isPalindrome);




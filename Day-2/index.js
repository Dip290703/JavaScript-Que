// console.log("Day 2: JavaScript Basics");

// // Even or Odd Checker
 
// function checkEvenOdd (num) {
//     let result
//     if(num % 2 === 0){
//        result = "Even";
//     }
//     else {
//        result = "Odd";
//     }
//     return result;
// }
// console.log(checkEvenOdd(4)); // Output: Even
// console.log(checkEvenOdd(5)); // Output: Odd

// //short version
// function checkEvenOdd (num) {
//     return num % 2 === 0 ? "Even" : "Odd";
// }
// console.log(checkEvenOdd(4)); // Output: Even


function smallNumber (){
    let arr =[]
    for(let i = 0 ;i < 5 ; i ++ ){
        let num = parseInt(prompt("Enter a number:"));
        arr.push(num);
    }
    let small = arr[0];
  for(let i = 1 ; i <arr.length ; i ++ ){
    if(arr[i] < small){
        small = arr[i];
    }


  }
    
    return small;
}
//console.log(smallNumber()); // Output: Smallest number from the input1

function smallNumber2 (a,b,c){
    if(a<b && a<c){
        return a;
    }
    else if(b<a && b<c){
        return b;
    }
    else {
        return c;
    }

}
console.log(smallNumber2(3, 1, 2)); // Output: 1


// Reverse a String

function reverseStringv (string) {
    let input = String(string)
    let result = ""
    for(let i = input.length  - 1 ; i >= 0 ;i --){
        result= result + input[i];
    }
    return result;
}
console.log(reverseStringv("hello")); // Output: "olleh"
console.log(reverseStringv("jhdkijjhgik"));

// const arr = [ 1,2,3,4,5,6,7,8,9,10 ];
// const newArr = arr.map((value) => value * 2);
// console.log(newArr);
// function smalllest (num) {
//     let small = num[0]
//     for(let i = 0 ; i < num.length ; i++){
//         if(num[i] < small){
//             small = num[i]
//         }
//     }
//     console.log(small);
    
// }
// smalllest(arr)
// function largest (num) {
//     let large = num[0]
//     for(let i = 0 ; i < num.length ; i++){
//         if(num[i] > large){
//             large = num[i]
//         }
//     }
// console.log(large);

// }
// largest(arr)

// console.log(globalThis === global);
// console.log(globalThis);
const { smallestNumber , largestNumber , isPalindrome , countWord , countLetter } = require('./function')
//const fn = require('./function')
//fn.smallestNumber([1,2,3,4,5,6,7,8,9,10])
smallestNumber([1,2,3,4,5,6,7,8,9,10])
largestNumber([1,2,3,4,5,6,7,8,9,10])
isPalindrome("madam")
countWord("Hello world this is a test")
countLetter("Hello world this is a test")



//  1. Installation of node
//  2. REPL = { Read , Evaluate , Print , Loop }
//  3. run Javascript code in node via =  node file.js
//  4. Architecture of node 
//  5. V8 engine = it helps to execute Js code 
//  6. global = it is special keyword that reffers the global object which is provided by the node js
//  7. done using node like **require("/pathName")** and **module.exports**
//  8. if you want to use code which is present inside the another file then you have to use **module.exports** to export and **require("/pathName") **for  import  then you can code which is in another file.
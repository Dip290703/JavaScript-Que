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
smallestNumber([1,2,3,4,5,6,7,8,9,10])
largestNumber([1,2,3,4,5,6,7,8,9,10])
isPalindrome("madam")
countWord("Hello world this is a test")
countLetter("Hello world this is a test")
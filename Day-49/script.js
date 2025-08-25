//----------------------------------------------------------------//
//find the smallest number in an array
let arr = [34,54,65,43,544,5]
function smallest(arr){
    let small = arr[0]
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] < small){
            small = arr[i]
            return small
        }
    }
}
console.log(smallest(arr));

//----------------------------------------------------------------//
//find the largest number in an array
let arr1 = [34,54,65,43,544,5]
function largest(arr1){
    let large = arr1[0]
    for(let i = 0 ; i < arr1.length ; i++){
        if(arr1[i] > large){
            large = arr1[i]
            return large
        }
    }
}
console.log(largest(arr1));

//--------------------------------------------------------------------------//

//find the all factors of a number
let num = 20
function factors(num){
    let factor = []
    for(let i = 1 ; i <= num ; i++){
        if(num % i == 0){
            factor.push(i)
        }
    }
    return factor
}
console.log(factors(num));
//--------------------------------------------------------------------------//


//find the number of words in a string
let str = "Hello world this is javascript"
function countWords(str){
    let words = str.split(" ")
    console.log(words);
    
    return words.length
}
console.log(countWords(str));
//--------------------------------------------------------------------------//
// couting the number of lettte in a string without spaces
let str1 = "Hello world this is javascript"
function countLetters(str1){
    let count = 0
    for(let i = 0 ; i < str1.length ; i++){
        if(str1[i] != " "){
            count++
        }
    }
    return count
}
console.log(countLetters(str1));



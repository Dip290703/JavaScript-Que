function smallestNumber (arr) {
    let small = arr[0]
    for(let i = 0  ; i < arr.length ; i ++){
        if(arr[i] < small){
            small = arr[i]
        }
    }
    console.log(small);
}
function largestNumber (arr) {
    let large = arr[0] 
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > large){
            large = arr[i]
        }
    }
    console.log(large);
}

function isPalindrome (str) {
    let reverse = ""
    for(let i = str.length - 1 ; i >= 0 ; i--){
        reverse += str[i]
    }   
    if(reverse === str){
        console.log(true);
    }else{
        console.log(false);
    }
}

function countWord (str) {
    let count  = 1
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === " "){
            count++
        }   
    }
    console.log(count);
}

function countLetter (str) {
    let count = 0   
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] !== " "){
            count++
        }
    }
    console.log(count);
}

module.exports = { smallestNumber , largestNumber , isPalindrome , countWord , countLetter }
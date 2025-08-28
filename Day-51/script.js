//biggest number in array
const arr = [2,4,5,6,77,55,66,43,53]
const bigNumber = (arr) => {
    let big = arr[0]
    for(let i = 0 ; i < arr.length ; i ++){
        if(arr[i] > big){
            big = arr[i]
        }
    }
    console.log(big)
}
bigNumber(arr)

//count character in  string
let string = "hii i am dipanshu"
const countchar = (string) => {
    let char = 0 
    for(let i = 0 ; i < string.length ; i ++){
        if(string[i] !== " "){
            char++
        }
    }
    console.log(char)
}
countchar(string)

//count word 
let str = "Online Javascript Editor for free Write Edit and Run your Javascript code using JS Online Compiler"

const countWord = (str) => {
    let word = str.split(" ")
    console.log(word.length)
    
}
countWord(str)


function biggestNumber () {
    let lengthOfArray = parseInt(prompt("Enter length of array"))
    let numbers = []
    for (let i = 0; i < lengthOfArray; i ++ ){
        let number = parseInt(prompt("Enter numbers"))
        numbers.push(number)
    }
    console.log(numbers);
    
    let biggestNumber = numbers[0]
    for(let i =1 ; i < numbers.length; i ++){
        if(biggestNumber < numbers[i]){
            biggestNumber = numbers[i]
        }
    }
    console.log("biggest number", biggestNumber);
    
}
biggestNumber()

function smallestNumber () {
    let lengthOfArray = parseInt(prompt("Enter length of array"))
    let numbers = []
    for (let i = 0; i < lengthOfArray; i ++ ){
        let number = parseInt(prompt("Enter numbers"))
        numbers.push(number)
    }
    console.log(numbers);
    
    let smallestNumber = numbers[0]
    for(let i =1 ; i < numbers.length; i ++){
        if(smallestNumber > numbers[i]){
            smallestNumber = numbers[i]
        }
    }
    console.log("samllest number", smallestNumber);
    
}
smallestNumber()
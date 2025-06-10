console.log("Day-5 : JavaScript Question");
// multiplication

function table(num){
    let result = 1
    for(let i = 1; i <= 10 ; i++){
    
     console.log( ` table of ${num} * ${i} : ${num* i} `);
     
    }
}
table(3)


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


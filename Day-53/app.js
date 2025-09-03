const arr = [ 1,2,3,4,5,6,7,8,9,10 ];
const newArr = arr.map((value) => value * 2);
console.log(newArr);
function smalllest (num) {
    let small = num[0]
    for(let i = 0 ; i < num.length ; i++){
        if(num[i] < small){
            small = num[i]
        }
    }
    console.log(small);
    
}
smalllest(arr)
function largest (num) {
    let large = num[0]
    for(let i = 0 ; i < num.length ; i++){
        if(num[i] > large){
            large = num[i]
        }
    }
console.log(large);

}
largest(arr)
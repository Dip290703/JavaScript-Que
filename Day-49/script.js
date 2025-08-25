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

//
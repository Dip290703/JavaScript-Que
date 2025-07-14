console.log("Hii js");
function duplicateElements(arr) {
    let result = []
    for(let i = 0 ; i < arr.length ; i ++){
        for (let j = i + 1 ; j < arr.length ; j ++){
            if(arr[i] === arr[j]){
                result.push(arr[i])
            }
        }
    }
    console.log(result);
    
}

.
console.log(duplicateElements([1, 2, 3, 4, 2, 5, 1, 6])); // [1,2]


function reverseOrderString (string) {

    let reversedString = string.split(" ").reverse().join(" ");
    console.log(reversedString);

}
console.log(reverseOrderString("Hello World")); 


function isAnagrams (str1,str2) {
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");
    if(sortedStr1 === sortedStr2){
        console.log("true");
    }else{
        console.log("false");
    }
}
console.log(isAnagrams("listen", "silent")); // true
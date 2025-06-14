function average (num){
let result =0
for (let i = 0 ; i < num.length ; i ++){
   result = result + num[i]
}
return result/num.length

}
console.log(average([1,3,34]));

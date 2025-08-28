

//------------------------------------------------//
const numbers = [2, 5, 8, 10, 13, 20, 25];
//question 1 : double the numbers
const double = numbers.map((num) => num * 2); 
console.log(double);
//question 2 : greater than 3
const greaterThan3 = numbers.filter((num) => num > 3);
console.log(greaterThan3);
// question 3 : sum of all numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); 
//

//------------------------------------------------//
const fruits = ["apple", "banana", "mango", "orange", "grapes"];
//question 1 : convert to uppercase
const uppercase = fruits.map((fruit)=>fruit.toUpperCase())
console.log(uppercase);
//question 2 : filter fruitshtat that name start with name a
const filterfruits = fruits.filter((fruit)=>fruit.startsWith('a'))
console.log(filterfruits);
//question 3 : total number of characters in all fruits
const totalChars = fruits.reduce((acc, curr) => acc + curr.length, 0);
console.log(totalChars);
//question 3 : total number of characters in all fruits using for loop
let total = 0;
for (let i = 0; i < fruits.length; i++) {
    total += fruits[i].length;
}
console.log(total);

//------------------------------------------------//

const users = [
  { id: 1, name: "Dipanshu", age: 22, isActive: true },
  { id: 2, name: "Aman", age: 25, isActive: false },
  { id: 3, name: "Riya", age: 20, isActive: true },
  { id: 4, name: "Neha", age: 30, isActive: true },
];
//names of all users
const usersName = users.map((user)=> user.name)
console.log(usersName);

//active users

const activeUsers = users.filter((user)=> user.isActive)
console.log(activeUsers);

//total age of all users
const totalAge = users.reduce((acc, curr) => acc + curr.age, 0);
console.log(totalAge);
//average age of all users
const averageAge = totalAge / users.length;
console.log(averageAge);

//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//

//------------------------------------
//question find the  smallest num in array 
const arr = [45, 78, 12, 89, 5, 23];
const smallest = arr.reduce((min, curr) => (curr < min ? curr : min), arr[0]);
console.log(smallest); 
//------------------------------------
 function smalllestNum (arr){
  let smallest = arr[0];
  for (let i = 0 ; i < arr.length ;i ++){
    if(arr[i] < smallest){
      smallest = arr[i];
      return smallest;
    }
  }
 }

 //quetion find the largest num in array 
 const largest = arr.reduce((max, curr) => (curr > max ? curr : max), arr[0]);
 console.log(largest); 
 //------------------------------------
 function largestNum (arr){
  let largest = arr[0];
  for (let i = 0 ; i < arr.length ;i ++){
    if(arr[i] > largest){
      largest = arr[i];
      return largest;
    }
  }
 }



console.log("Hii");
//scope
//scope is like boundry where we access our variable
// _______________________________________

//global scope
// variable can be accessed anywhere in the code

// _______________________________________

//block scope
// variable is only accessible inside { } curly  braces

// _______________________________________

//function scope
//vairable is only available inside the function

// _______________________________________

//var
// var is function scope it can ve accessed  anywheere  &  it can be reinitialized
var a = 12;
a = 3;
console.log(a);
// _______________________________________

//let
// let is block scope it can accessed with block or within funtion & it can be reinitailized & can not be redeclared in same scope
let f = 354;
f = 23;
console.log(f);
// _______________________________________

//const
//const is block scope it can be accessed within block or witin function & it can not be reinitialized and redeclared

const age = 98;
//age = 87
// _______________________________________

//hoisting
//accessing vaiable before intializationi

// in terms of var
console.log(names);

var names = "Dipanshu";
// _______________________________________

// in terms of let
//console.log(num);// cannot access num before intialization
//let is also hoisted, but it’s placed in a Temporal Dead Zone (TDZ) 

let num = 23;
// _______________________________________

// in terms of const
//console.log(pie); //cannot access pie before intialization
//const is also hoisted, but it’s placed in a Temporal Dead Zone (TDZ) 

const pie = 3.14;

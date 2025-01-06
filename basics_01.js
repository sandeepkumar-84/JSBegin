console.log("basics 01");

let name = "ethen"
let age = 29
const sex = "male"
var address = " street 123" // not preffered

//console.table([name,age,sex, address])

"use strict"; // treat all variables as newer version


// alert("test") not in node.js but can be used directly in browser

/*
value type-> value type number, bigint string, boolean null, undefined, symbol
reference types-> Array objects functions 

javascript is dynamically typed or statically typed language? 
JavaScript is a dynamic language and not static, which means that variables can hold 
values of different types during runtime. Unlike languages such as Typescript or Java, 
you don't need to declare the data type of a variable explicitly 


 */


// String interpolation

//console.log(`THE NAME AND AGE IS ${name}, ${age}`);

// slice 

console.log(name.slice(0,2));

// Math library 

/*
rn0 = Math.random()

rn = Math.floor(rn0 * 10) 

console.log(`random value between 0 and 9 = ${rn}`);

min = 10 
max = 20

rn2 = Math.floor(rn0 * (max - min) + min) 
console.log(`random value between 10 and 20 = ${rn2}`);
*/

// datetime

let dt  = new Date()

console.log(dt);
console.log(dt.toString());
console.log(dt.toDateString());
console.log(dt.toLocaleDateString());







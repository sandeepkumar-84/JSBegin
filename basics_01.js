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

// console.log(name.slice(0,2));

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

/*let dt  = new Date()

console.log(dt);
console.log(dt.toString());
console.log(dt.toDateString());
console.log(dt.toLocaleDateString());
*/

// arrays

let myarray = [0,1,2,3,4,5]

/*
myarray.push(6)
myarray.pop(6)

console.log(myarray);

console.log(myarray.unshift(7));

console.log(myarray);

console.log(myarray.shift());

console.log(myarray);

console.log(myarray.includes(4));


let jonedArr = myarray.join()

console.log(jonedArr);
*/

// diff between slice and splice - splice changes the actual array also. 

/*
console.log("before");

console.log(myarray);

const myarray2 = myarray.slice(1,3)

console.log(myarray2);

const myarray3 = myarray.splice(1,3)

console.log(myarray2);

console.log("after splice ");

console.log(myarray);

*/

// Arrays merge etc

/*
let arr1 = [0,1,2,3]
let arr2 = [4,5,6,7]


const arr4 = ['a','b','c']
const arr5 = ['e','f','g']


arr1.push(arr2)
arr4.push(arr5)
console.log(arr1)
console.log(arr4)


arr6 = arr4.concat(arr5)

console.log(arr6);

// Spread out & flat
const arrMerge = [...arr4, ...arr5]

console.log(arrMerge);

// flat 

arrComplex = [  1,2,3,[4,5,6],7,[8,9,[1,2]]]

arrFlat = arrComplex.flat(Infinity)

console.log(arrFlat);

console.log(Array.from("arrayexample"))
console.log(Array.of(name,age,sex))

*/
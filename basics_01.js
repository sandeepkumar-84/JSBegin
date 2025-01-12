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

//let myarray = [0,1,2,3,4,5]

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

// Ojjects created from constructor (nw object) are not singleton while object literals are singleton. 

// object literals - Best for objects that don’t require multiple instances.
// Object literals naturally create a singleton because they always return the same reference:

/*
const myUser = {
    name:"Sandeep",
    age:"39",
    greet:function(){console.log("Greet Sandeep")}
}

myUser.greet();
console.log(myUser["age"]);
console.log(myUser.name);
*/
// Objects Created Using constructor function - new keword - Allows creating multiple objects with the same structure.
// Saves memory if methods are placed in the prototype instead of the instance.
//Useful when needing to create structured objects dynamically.

/*
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, " + this.name);
    };
}
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 40);

person1.greet(); // Output: Hello, Alice
person2.greet(); // Output: Hello, Bob

*/

// Objects Created Using  class -More structured and readable than constructor functions.
// Supports inheritance via extends.
/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log("Hello, " + this.name);
    }
}

const person3 = new Person("Charlie", 28);
person3.greet(); // Output: Hello, Charlie

const user = new Object()
*/



// add symbol in keys 

/*
const exSymb = Symbol("key1")

const exObj = {

    name: "ExampleObject",
    age:30,
    [exSymb]:"SymbolkeyVal"
}

console.log(exObj[exSymb]);

// object freezing

Object.freeze(exObj);
*/

/*


oj1 = {1:"a",2:"b",3:"c"}
oj2 = {4:"d",5:"e",6:"f"}

oj3 = {oj1, oj2}

//console.log(oj3);

oj3 = Object.assign({},oj1,oj2)
//console.log(oj3);

oj3 = {...oj1, ...oj2}
//console.log(oj3);

let arrObj = [
    {1:"a"},{2:"b"},{3:"c"}
]

console.log(Object.keys(arrObj));
console.log(Object.values(arrObj));
console.log(arrObj.entries(arrObj));

*/

/* destructuring
const course = {
    name:"js", 
    price:"170", 
    teacher:"abc"
}

console.log(course.teacher);

const {teacher} = course

console.log(teacher);

const {teacher: instructor} = course

console.log(instructor);

*/

// ... rest and spread operator
// spread functionality is already used above examples while joining arrays or objects 

/*

function calculate_sum(num)
{
    return num    
}

console.log(calculate_sum(5));


function calculate_sum(...num)
{
    return num    
}

console.log(calculate_sum(5,6,7));

*/

/* 
//arrow functions 
function greet2()
{
    return "Hello from greet2"
}
console.log(greet2());

const fGrt2 = function greet2()
{
    return "Hello from greet2-1"
}

console.log(fGrt2());

const fGrt3 = function ()
{
    return "Hello from greet2-2"
}

console.log(fGrt3());

const fGrt4 = () =>
{
    return "Hello from greet2-3"
}

console.log(fGrt4());

const fGrt5 = (num1,num2) =>
    {
        return num1+num2
    }
    
console.log(fGrt5(1,2));

//implicit return -1 
const fGrt6 = (num1,num2) => num1+num2
console.log(fGrt6(2,2));

//implicit return -2
const fGrt7 = (num1,num2) => (num1+num2)
console.log(fGrt7(2,3));

// in case curly braces are warpped around the return parameters then return keyworid is must
const fGrt8 = (num1,num2) => {return num1+num2}
console.log(fGrt8(3,3));

// returning an object 
const fGrt9 = (num1,num2) => ({1:num1,2:num2})
console.log(fGrt9(3,4));


const myarr = [1,2,3,4,5]

myarr.forEach(function(x){console.log(x);})

myarr.forEach((x)=>{console.log(x);})

myarr.forEach((x)=>console.log(x))
*/

/*
    IFFE 
(function db(){
    console.log("DB connected")
})();


(()=>{
    console.log("DB connected-2")
})();

(()=> console.log("DB connected-3"))();


((name)=> console.log(`DB connected-3 - ${name}`))("Sandeep");    
*/



/*
// falsy values 0,-0,bigint,"",null, undefined, NaN

// truthy values "0", `false`, " ", [],{},function(){}

// Iterators

// for-of

let myArr2 = [1,2,3,4];

for(x of myArr2)
{
    console.log(x)
}

// maps

const map = new Map()

map.set('name', 'Alice');
map.set('age', 30);
map.set('job', 'Engineer');

for([key,value] of map)
    console.log(key + "-"+ value)
    
oj4 = {1:"a",2:"b",3:"c"}

// for-in
for([key] in oj4)
    console.log(key + "-")

// for-each

let myArr5 = [1,2,3,4,5]

//myArr5.forEach(function(x){console.log(`item=${x}`)})
//myArr5.forEach((x)=>console.log(`item=${x}`))

function printMe(x)
{console.log(`from print me item = ${x}`);}

myArr5.forEach(printMe)


*/

/*
// filter , maps 

let myArr6 = [1,2,3,4,5,6];

let newnums = myArr6.filter((x)=>x>4)

console.log(newnums)

let newNums2 = myArr6.map((x)=>x + 5)

console.log(newNums2)

// chaining
let newNums3 = myArr6.map((x)=>x + 1).map((x) => x*2).filter((x)=>x<15)

console.log(newNums3)
*/


// reduce function 

/*
const myNums = [1,2,3]
const initialVal = 0
const myTotal = myNums.reduce(function(acc,curr){return acc + curr},initialVal)

console.log(myTotal);

let shippingCart = [
                    {itemName:"item1", itemVal:30},
                    {itemName:"item2", itemVal:40},
                    {itemName:"item3", itemVal:20}
                   ]
initialTot = 0

totalBillAmnt = shippingCart.reduce(function(acc,curr){return acc + curr.itemVal},initialTot)

console.log(`total billing amount = ${totalBillAmnt}`)

// this and call usage. without call and this property will be unavailable. 
function setUserName(username)
{
    this.username = username
    console.log("setUserName");
}

function setUser(username,password,email)
{
    console.log("setUser");
    setUserName.call(this,username)
    this.password = password
    this.email = email
}

const user = new setUser("Saneep","yyyy","z@y")
console.log(user)

*/
// getOwnPropertyDescriptor is used to get the properties of the library objects like Math.Pi here 
// writable is false therefore it cannot be modified. 
// enumerable is false that is , that property   is not iterable for ex if we iterate through the 
// vehicle properties except name, all others will be available in the iterator

console.log("before changing properties")

const piDescriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(piDescriptor)

const vehicle = {
    name:"Car",
    mileage:20,
    isAvailable:true
}

console.log(Object.getOwnPropertyDescriptor(vehicle,"name"))

for(let [key,value] of Object.entries(vehicle))
    {
        console.log(`key = ${key}, value= ${value}`)
    }

// changing properties 

Object.defineProperty(vehicle,'name',
    {
        writable: false,
        enumerable: false
    }
)
console.log("after changing properties notice in the iteration name is not available")
console.log(Object.getOwnPropertyDescriptor(vehicle,"name"))

// this wil not print the name


for(let [key,value] of Object.entries(vehicle))
{
    console.log(`key = ${key}, value= ${value}`)
}

// arrays and optimizations 

// arrays are continues(or packed) or holey 
// optimizations  - SMI, Packed element, double(float, string, function). 


const arrTwo = [1,2,3,4,5] // this is an ex of packed SMI Elements since there are no holes in the array

const arrThree =  [1,2,3,4,5,6.5]// this is an ex of packed Double Elements 

const arrFour =  [1,2,3,4,5,6.5,'8']// this is an ex of packed Elements 

arrFour[8] = 11// this is an ex of holey Elements since there is a hole at 8th position and it arr is of mixed types

arrTwo[6] = 6// this is an ex of holey SMI since there is a hole at 5th position and it arr is of purely int type

arrThree[7] = 7// this is an ex of holey double since there is a hole at 6th position and it arr is mix of int and double  only type

console.log(arrFour);

// operations on holey arrays specially holey elemnts are costly

console.log(arrTwo[5]); // this will give undefined and it incolves cost

// bound check - if any index is accessed by array lets for  
// lets say arrTwo[9] - out of bound check-since 9 is greater than its length it is an easy operation. If not
// lets say arrTwo[5] - out of bound check will fail since index is within the length of array
//                     - next step is to check if 5 is any property or not by hasOwnProperty(arrayTwo,5)
//                     - next step is to check if 5 is any property of its prototype hasOwnPeoprt(arrayTwo.prototype,5)
// this check will continue till object level
//                     - next step is to check if 5 is any property of its prototype hasOwnPeoprt(object.prototype,5)

//therefore holey array are quite expensive

// order of optimization

//SMI > Double > Packed
// Holed_smi > Holed_double > holed_packed


// bad exampple 

const arrEx1 = new Array(3) // this will create holey array

arrEx1[0] = '1' // making it Packed since assiging it with string
arrEx1[0] = '2' //  

// better version

const arrEx2 = []
arrEx2.push('1')
arrEx2.push('2')
arrEx2.push('3')





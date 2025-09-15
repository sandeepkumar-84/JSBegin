/*
let exObject = 
{
    name:"Sandeep",
    exCount:0,
    exFunction:()=>{console.log(`count is ${this.exCount}`); return 0;}
}

exObject.exFunctionV1 = function(){this.exCount = this.exCount + 1, console.log(`count is ${this.exCount}`)}

console.log(exObject["name"])
console.log(exObject.exFunctionV1())
console.log(exObject.exFunctionV1())

let getCallCount = 0

function memoize_add()
{
    let a = new Array(1000000)
    let b = new Array(1000000)
    let c = new Array(2000000)

    return function callMemoize(x,y)
    {
        if(c[x + y]  != x + y)
        {
            c[x + y]  = x + y
            getCallCount = getCallCount + 1
        }
        return c[x + y]
    }       
}

let fn1 = memoize()

console.log(fn1(2,3)) 
console.log(getCallCount) 
console.log(fn1(3,4)) 
console.log(getCallCount) 
console.log(fn1(3,2)) 
console.log(getCallCount) 


function factorial(x)
{
    if(x==1 || x==0) return 1;
    return (x * factorial(x-1))  
}

function fibn(x)
{
    if(x<=1) return 1;
    
    return (fibn(x-1) + fibn(x-2))  
}

console.log(factorial(3))
console.log(fibn(3))
*/


function memoize(fn)
{
    const cache = new Map()
    return function(...args)
    {
        let key = JSON.stringify(args)

        if(cache.has(key))
        {
            return cache.get(key)            
        }
   
            let res = fn(...args)
            cache.set(key,res)
            return  res            

    }
}

function sum(...args)
{
   return args.reduce((prev,curr)=>{return  prev + curr},0) 
}

function fib(args)
{
    if(args <=0 ) return 0;
    if(args == 1 ) return 1; 
    return (fib(args - 1) + fib(args - 2))
}

function factorial(args)
{
    if(args <=1 ) return 0;
    return args * factorial(args -1)
}

function test(...args)
{
   console.log(typeof args)
   console.log(args)
   console.log(...args)
   test1(...args)

}

function test1(...args1)
{
    console.log(typeof args1)
    console.log(...args1)
}

test(1,2)
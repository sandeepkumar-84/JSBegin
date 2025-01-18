/*
what nees to be added in x below so that the statement prints true. 
let x;
if(x == 1 && x ==2 && x==3){console.log("true");}
*/

// in comparison the js converts the variable into string which is overriden below. 

/*
let x={
    flag:1,
    toString: function(){return this.flag++ }
};

if(x == 1 && x ==2 && x==3){console.log("true");}
console.log(x)

// Question 2

let y = 1
y = y++; 

console.log(y)


// Q3

console.log("Q3")

function abc()
{
    console.log(abc.xyz)
}
abc()
abc.xyz = 400
abc.xyz = 200
abc()


// Q4 
console.log("Q4")
const numbers = [1,2,3,4]
numbers[50] = 5

console.log(numbers[49]);

// Q5
console.log("Q5")
console.log(typeof typeof 100)

// Q6
console.log("Q6")

const arrEx3 = [..."Sandeep"]
console.log(arrEx3);

// Q7
console.log("Q7")

console.log(parseInt('10+2') )
console.log(parseInt('10FM'))
console.log(parseInt('F10M'))

// Q8
console.log("Q8")

console.log([1,2].map(num => {
if(num>0) return; 
return num * 2
}))

// Q9
console.log("Q9")

const arrEx4 = [1,2,3,4,5,6,7,8]

const arrEx5 = arrEx4.find((x)=> x > 4)

const arrEx6 = arrEx4.map((x)=> x > 4)

const arrEx61 = arrEx4.filter((x)=> x > 4)

console.log(arrEx5);
console.log(arrEx6);
console.log(arrEx61);

// Q10
console.log("Q10")

const arrEx7 = [1,2,3,4]

console.log(1 in arrEx7)
console.log(2 in arrEx7)
console.log(3 in arrEx7)
console.log(4 in arrEx7)


//11 move 0s to left
console.log("Q11")
var moveZeroes1 = function(nums) {
    
    for([key,value] in Object.entries(nums))
    {         
        if(nums[key] == 0 && key != 0)
            {
                x = nums[key-1]
                nums[key-1] = nums[key]
                nums[key]  = x   
            }
    }    
};

var numArr1 = [0,1,0,3,12]

moveZeroes1(numArr1)

console.log(numArr1)



//12 move zeros to right
console.log("Q12")
var moveZeroes = function(nums) {
  for(let i=nums.length-1;i >=0;i--)
    {
        if(nums[i] == 0)
        {shift(i,nums)}
        console.log(nums)
    }   
};

function shift(position,nums)
{    
    x =  nums[position]

    for(let i=position;i<nums.length;i++)
    {  
        if(i < nums.length-1)
        {
            nums[i] = nums[i+1]
        }        
        else
        {
            nums[i] = x
        }        
    }
}

let numArr = [0,1,0,3,12]
//let numArr = [0,0,1]

//shift(2,numArr)

moveZeroes(numArr)

console.log(numArr)



//13 
console.log("Q13")

let nums = [2,2,1,1,1,2,2]
//console.log(nums.filter((x)=>{return x == 3}));


function find_majority(nums)
{
    let list = []
    let setOfNums = new Set(nums)
    n = nums.length
    let res
    setOfNums.forEach(element => {
        
        list.push({id:element, freq:nums.filter((x)=>{return x == element}).length})         
    });

    if(list.filter(function(x){return x.freq > n/2 }).length > 0)
    {
        res = list.filter(function(x){return x.freq > n/2 })[0]
    }
        
    return res.id    
}

find_majority(nums)




function remove_duplicates(duparr)
{
    let resultArr = new Set(duparr)    
    let arr =  [...resultArr] 
    return arr
}

// 

let ba  = remove_duplicates([1,1,2])

console.log(ba)

// Given array
let a = [10, 20, 20, 20, 30, 30, 40, 50];

// Use filter and return array with unique values 
let a1 = a.filter((e, i, self) => i === self.indexOf(e));

// Display the updated array
console.log("Updated Array: ", a1);

// 

console.log("14")

Array.prototype.last = function(){
    
   return this.length == 0 ? -1 :  this[this.length-1]       
}

nums = []

console.log(nums.last());


var compose = function(functions) {
    let lf = functions.length
    let n = lf
    let fx
    return function(x) {
        if(lf <= 0)
        {
            return x;
        }
        else
        {
            let y = x
            while(n > 0)
            {
                fx =  functions[n-1](y)
                n = n - 1
                y = fx
            }
            return fx
        }
    }
};


 const fn = compose([x => x + 1, x => 2 * x])
 console.log(fn(4)) 
 

 var compose = function(functions)
 {
    
    return function(x) {     
        let l = functions.length 
        if(l == 0) return x;
        if(l == 1) return functions[0](x);
        return functions[0](compose(functions.slice(1,l))(x));
    }
    
 }



 const fn1 = compose([x => x + 1, x => 2 * x])
 //fn1(4)
 console.log(fn1(4))

 

 arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }

 var filter = function(arr, fn) {
  
    return arr.filter(fn)
 };

 console.log(filter(arr, fn))


 
var map = function(arr, fn) {

    let arr3 = [];
    arr.forEach((element,value) => {
        arr3.push(fn(element,value))
      });     

      return arr3
}; 

arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
console.log(map(arr,fn))



var fibGenerator = function*() {
    let a =0, b=1
    while(true)
    {
        yield a;
        [a,b] = [b,a+b]
    }
};

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3


var createCounter = function(init) {
    
    let initCounter = init
    return {

        increment:()=>{ return (initCounter = initCounter + 1)},
        decrement:()=>{ return (initCounter = initCounter - 1)},
        reset:()=>{ return (initCounter = init)}
    }
};

let cc = createCounter(5)

console.log(cc.increment())
console.log(cc.increment())
console.log(cc.decrement())
console.log(cc.reset())



var once = function(fn) {
    
    let counter
    return function(...args){
        
        if(counter) return;
        else{            
            counter = true
            return fn(...args)               
        }       
    }
};


fn = (a,b,c) => (a * b * c)

let onceFn = once(fn)

console.log(onceFn(1, 2, 3))
console.log(onceFn(5, 7, 4))


var chunk = function(arr, size) {
    
        if(arr.length > 0 && arr.length <= size ) return [arr]
        else
        {  let res = []
            i=0
            j = size
            while(i < arr.length)
            {          
                res.push(arr.slice(i,j))
                i = i+size
                j = j+size
            }
            return res;        
        }
};

console.log(chunk([1,2,3,4,5],2))


function chunkarr2(arr,size)
{
    return arr.reduce(
        function(prev,curr,i){
            i % size ==0 ? [...prev,arr.slice(i,i+size)] : prev;  
        },[])
}



function chunkArray(arr, size) {
    return arr.reduce((chunked, _, i) => 
        i % size === 0 ? [...chunked, arr.slice(i, i + size)] : chunked
    , []);
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));



class ArrayWrapper  {
    constructor(arr) {
        this.arr = arr
    }

    valueOf(){
       return  this.arr.reduce(function(acc,curr){
            return acc = acc + curr            
        },0)
    }
    toString(){
       return `[${this.arr.join(",")}]`
    }
}

const obj = new ArrayWrapper([23,98,42,70]);
console.log(String(obj));


var argumentsLength = function(...args) {
       
    return [...args].length
};

args = [1,2,3]
//args = [{}, null, "3"]
console.log(argumentsLength(args))

*/

var expect = function(val) {    
    
    return {
    toBe : function(x)
    {
        if(val === x) return true;
        else
        {
            throw new Error("Not Equal")
        }
        
    },
    notToBe : function(y)
    {
        if(val !== y) return true;
        else
        {
            throw new Error("Equal")
        }
    }
    }
};

console.log(expect(5).toBe(null));
 


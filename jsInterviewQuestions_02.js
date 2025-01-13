/*
what nees to be added in x below so that the statement prints true. 
let x;
if(x == 1 && x ==2 && x==3){console.log("true");}
*/

// in comparison the js converts the variable into string which is overriden below. 


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




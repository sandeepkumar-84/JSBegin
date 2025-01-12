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

// 

let y = 1
y = y++; 

console.log(y)




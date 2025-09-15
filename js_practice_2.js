/**

let objMemoizeControl = 
{
    memoizeMethod : ""
}

objMemoizeControl.getCallCount =0;

objMemoizeControl.memoize_add = function()
{
    let a = new Array(1000000)
    let b = new Array(1000000)
    let c = new Array(2000000)
    let self = this
    
    return function callMemoize(x,y) 
    {
        if(c[x + y]  != x + y)
        {
            c[x + y]  = x + y
            self.getCallCount = self.getCallCount + 1
        }
        return c[x + y]
    }     
}


let fn1 = objMemoizeControl.memoize_add()
console.log(fn1(2,3)) 
console.log(objMemoizeControl["getCallCount"]) 
console.log(fn1(3,4)) 
console.log(objMemoizeControl["getCallCount"]) 
console.log(fn1(3,2)) 
console.log(objMemoizeControl["getCallCount"]) 

 * 
 */

/**

let objMemoizeControl = {}

objMemoizeControl.getCallCount =0;

objMemoizeControl.memoize = function(methodName)
{
    let self = this
    let ks = new Map()
    
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

    if(methodName == "sum")
    {
        return function callMemoize(x,y) 
        {
            let key = x + y;
            if(!ks.has(key)) 
            {
                ks.set(key,key);
                self.getCallCount++;
            }
            return ks.get(key);
        } 
    }
    if(methodName == "factorial")
        {
            
            return function callMemoize(x) 
            {
                let key = x;
                function checkfactorial(x)
                {
                    if(x <=1 ) return 1;
                    else if(ks.has(x)) {return ks.get(x)}
                    else {return x * checkfactorial(x-1)}
                }
                let value = checkfactorial(x)
                if(!ks.has(key)) 
                {
                    ks.set(key,value);
                    self.getCallCount++;
                }
                return ks.get(key);
            } 
        }    
    if(methodName == "fib")
    {
        return function callMemoize(x) 
        {    
            let key = x;
            function checkfib(x)
            {           
                if(x <=1 ) return 1;
                else if(ks.has(x)) {return ks.get(x)}
                else {return checkfib(x-1) + checkfib(x-2)}
            }            
            let value = checkfib(x)
                
            if(!ks.has(key)) 
            {
                ks.set(key,value);
                self.getCallCount++;
            }
            return ks.get(key);
        }         

    }
}



let fn1 = objMemoizeControl.memoize_common("sum")
console.log(fn1(2,3)) 
console.log(objMemoizeControl["getCallCount"]) 
console.log(fn1(3,4)) 
console.log(objMemoizeControl["getCallCount"]) 
console.log(fn1(3,2)) 
console.log(objMemoizeControl["getCallCount"]) 


let fn2 = objMemoizeControl.memoize("fib")
console.log(fn2(3)) 
console.log(objMemoizeControl["getCallCount"]) 
console.log(fn2(6)) 
console.log(objMemoizeControl["getCallCount"]) 

**/


const user = {
    userName: "testName",
    callCount:0, 
    getUserDetails: function(){
        let self = this
        return function(){
            console.log(`user name is ${self.userName}`)
            self.callCount = self.callCount + 1
            return self.callCount
        }
    }
} 
let cc = user.getUserDetails()
//console.log(cc())
//console.log(cc())


const user1 = {
    userName: "testName2",
    callCount:0, 
    getUserDetails: function(){      
        return ()=>{
            console.log(`user name is ${this.userName}`)
            this.callCount = this.callCount + 1
            return this.callCount
        }
    }
} 
let cc1 = user1.getUserDetails()
//console.log(cc1())
//console.log(cc1())

function createUser(userName,score)
{
    this.userName = userName,
    this.score = score
}
createUser.prototype.incrementScore = function(){ this.score = this.score + 1}

//let u1 = new createUser("test1",50)
//let u2 = new createUser("test2",60)

//console.log(u1.userName)
//console.log(u1.score)
//u1.incrementScore();
//console.log(u1.score)

let nameVar = "sandeep   "
//console.log(nameVar.length);

String.prototype.trueLength = function(){return this.trim().length}
//console.log(nameVar.trueLength());

const vehicle = 
{
    isElectric: false
}
const eVehicle = {
    isElectric: true
}

const nonVehicle = {
    isAutomatic: false
    //,__proto__:eVehicle
}

//nonVehicle.__proto__ = eVehicle
//console.log(nonVehicle.isElectric);
//console.log(nonVehicle.isAutomatic);

// another way 

//console.log(nonVehicle.isElectric);
//console.log(nonVehicle.isAutomatic);

Object.setPrototypeOf(nonVehicle,eVehicle)

//console.log(nonVehicle.isElectric);
//console.log(nonVehicle.isAutomatic);

function createUserAccount(name,email,p)
{
    this.userName = name,
    this.email = email,
    //setPassword(p)
    setPassword_V1.call(this,p)
}

function setPassword(pwd)
{
    this.pwd = pwd
}

function setPassword_V1(pwd)
{
    this.pwd = pwd
}


let cua = new createUserAccount("someName","someEmail@someDomain","somePwd")

//console.log(`name=${cua.userName}, email=${cua.email}, pwd = ${cua.pwd}`);

class userObjClass{

    constructor(name,email,p){
        this.username = name,
        this.email = email,
        this.pwd = p
    }

    encryptPassword(){return `Encrypted password is ${this.pwd}`}
}

let classUser = new userObjClass("clsSampleUser","cls@email","classSamplePwd")

//console.log(`user  = ${classUser.username}, pwd=${classUser.pwd}, pwd=${classUser.encryptPassword()}`);

//creating same with functions 



function userObjClassV2(name,email,p)
{
        this.username = name,
        this.email = email,
        this.pwd = p
}

//userObjClassV2.encryptPassword is Static method on constructor function and not accessible from instance
userObjClassV2.encryptPassword = function(){return `Encrypted password is ${this.pwd}`}

//Prototype method shared by all instances
userObjClassV2.prototype.encryptPasswordV2 = function(){return `Encrypted password is ${this.pwd}`}

let classUserV2 = new userObjClassV2("clsSampleUser","cls@email","classSamplePwd")

//classUserV2.encryptPassword = undefined because it's a static method, not an instance method.
//console.log(`user v1 = ${classUserV2.username}, pwd=${classUserV2.pwd}, pwd=${classUserV2.encryptPassword}`);

//Use .prototype.encryptPasswordV2() for instance methods.
//console.log(`user v2 = ${classUserV2.username}, pwd=${classUserV2.pwd}, pwd=${classUserV2.encryptPasswordV2()}`);

//console.log(`user v3 = ${classUserV2.username}, pwd=${classUserV2.pwd}, pwd=${classUserV2.encryptPassword.call(classUserV2)}`);

//alternatively Use .call() to invoke a static method with an instance context if needed.
//console.log(userObjClassV2.encryptPassword.call(userObjClassV2));

class AdminUser extends userObjClass
{
    constructor(name,email,p){super(name,email,p)}
    createID(){return 'id is 123'}
    static createInternalCompanyID(){return 'id is 999'}
    logMe(){return `from extended class by ${this.username}`}
}


let au1 = new AdminUser("adminUN1","admin@user1","adminPwd1")
let au2 = new AdminUser("adminUN","admin@user2","adminPwd2")

//console.log(`${au1.logMe()}, ${au1.createID()}`)
//console.log(`${au2.logMe()}, ${au2.createID()}`)
//console.log(AdminUser.createInternalCompanyID())
 
let pi =  Object.getOwnPropertyDescriptor(Math,"PI")

//console.log(pi);


let uo = Object.getOwnPropertyDescriptor(user1, "callCount")

//console.log(uo); //enumerable true
/**
for (const [key,value] of Object.entries(user1)) {
    if(typeof value != 'function')
    //console.log(`key = ${key}, value = ${value}`);
    
} */

Object.defineProperty(user1, "callCount",{enumerable:false})

let uo1 = Object.getOwnPropertyDescriptor(user1, "callCount")

//console.log(uo1); //enumerable false

//for (const [key,value] of Object.entries(user1)) {
  //  if(typeof value != 'function')  {
    //console.log(`key1 = ${key}, value1 = ${value}`);
    //} 
//}

// getters and setters 

//1. Class based

class PropClassUser
{
    constructor(u,p)
    {
        this.uname = u,
        this.pwd = p
    }
    get pwd(){return this._uname.toUpperCase()}
    set pwd(value){this._uname = value}    
} 

let pc = new PropClassUser("propClassUser","propClassPwd")
console.log(pc.uname);
console.log(pc.pwd);

//2. Function based

function user11(u,p)
{
    this._pwd = p,
    this._user = u

    Object.defineProperty(this,'pwd',{
        get:function(){return this._pwd.toUpperCase()},
        set:function(value){ this._pwd = value}
    })
}


let pc1 = new user11("propClassUser1","propClassPwd1")
console.log(pc1.pwd);


// 3. object based 

let u= {
    _email : "e@MediaList",
    _pass : "pwd3",

    get email(){return this._email.toUpperCase()},
    set email(value){this._email = value}
}


console.log(u.email);

u1 = Object.create(u)

console.log(u1.email);

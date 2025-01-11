function CreateUser(userName,score)
{
    this.userName  = userName;
    this.score = score;    
}

CreateUser.prototype.printMe = function(){
    console.log(`user is ${this.userName} and score is ${this.score}`)
}
// new keywors is required for prototypes to be included
const user1 = new CreateUser("Sandeep","100")
const user2 = new CreateUser("Sandy","99")

user1.printMe()
user2.printMe()


let myName = "Sandeep     "

// assigning any native type a new prototype will m ake this avaialble to all its types and its children types. 
String.prototype.trimmedLength = function(){return this.trim().length}

console.log(myName.trimmedLength())
console.log(user1.userName.trimmedLength())

// prototype are non shareable between siblings. 

// inheritence

const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}
// __proto__:TeachingSupport will provide the properties of TeachingSupport to TASupport
/*
const TASupport = {
    makeAssignments: "js",
    fullTime:true,
    __proto__:TeachingSupport
}
    */

// instead of using above method we cn use below method

Object.setPrototypeOf(TeachingSupport,Teacher)


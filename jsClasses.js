class name1 {
    constructor(username) {
        this.username = username
    }

    printme()
    {
        console.log(`Username is ${this.username}` );        
    }
    createId()
    {
        return this.username + "123"
    }
}

class user extends name1
{
    constructor(name,email)
    {
        super(name)
        this.email = email
    }
    printEmail()
    {
        console.log(`Email is ${this.email}` );        
    }    
}

let un1 = new name1("Sandeep")
un1.printme()
console.log(` user id is ${un1.createId()}`)

let us = new user("Gukesh","guks@chessFed.com")

us.printEmail();
us.printme();
console.log(` user id is ${us.createId()}`)

// inorder to restrict the access of any method to any instance use static keyword. 

class adminuser extends name1
{
    constructor(name,email)
    {
        super(name)
        this.email = email
    }
   static printAdminEmail()
    {
        console.log(`Email is ${this.email}` );        
    }    
}

let adminu = new adminuser("gukesh1","gukesh1@email.com")

// this will produce error. 
adminu.printAdminEmail()

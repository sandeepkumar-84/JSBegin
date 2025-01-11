// first
/*
const promise1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Asyn task complete")
        resolve();
    }, 2000);
    
})

promise1.then(function(){
    console.log("Promise consumed")
})

// second method

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Asyn task 2 complete")
        resolve();
    }, 2000);   
}).then(function(){
    console.log("Promise 2 consumed")
})

// third method to pass values into resolve

const promise3 = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Asyn task 3 complete")
        resolve("Message from promise 3");
    }, 2000);   
}) 

promise3.then(function(msg){console.log(msg)})

// Fourth way  - error handling

const promise4 = new Promise(function(resolve,reject){
    setTimeout(() => {

        let error = true
        if(!error)
        {
            console.log("Asyn task 3 complete")
            resolve("Message from promise 3");
        }
        else{
            reject("Exception in the task of promise 4")
        }
        
    }, 2000);   
})

promise4.then(function(){console.log("Promise 4 Accepted")})
        .catch(function(errMsg){console.log(errMsg);
        })

// returning from then 


const promise5 = new Promise(function(resolve,reject){
    setTimeout(() => {

        let error = false
        if(!error)
        {
            console.log("Asyn task 3 complete")
            resolve({name:"Sandeep", age:39});
        }
        else{
            reject("Exception in the task of promise 4")
        }
        
    }, 2000);   
})

promise5.then(function(user){
    console.log(`promise 5 then receiving user: name = ${user.name} and age = ${user.age}`)
    return user.name
}).then(function(name){
    console.log(`promise 5 then receiving only name = ${name}`)
})
.catch(function(errMsg){console.log(errMsg)})

// promise 6 finally 

new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Asyn task 6 complete")
        resolve("Message from promise 3");
    }, 2000);      
}).then(function(){console.log("Promise 6 Accepted")}).
catch(()=>{console.log("exception 6 ")}).
finally(()=>{console.log("finally called in promise 6")})


/// handling promise using async await

const promise7 = new Promise(function(resolve,reject){
    setTimeout(() => {

        let error = false
        if(!error)
        {
            console.log("Asyn task 7 complete")
            resolve({name:"Sandeep", age:39});
        }
        else{
            reject("Exception in the task of promise 7")
        }
        
    }, 3000);   
})

async function consumePromise7()
{
    const responsePromise7 = await promise7
    console.log(responsePromise7);

}
consumePromise7()

// The error handling in asyn await option is not implicit. We have to explicitely apply  
// exception handling try catch 

const promise8 = new Promise(function(resolve,reject){
    setTimeout(() => {

        let error = true
        if(!error)
        {
            console.log("Asyn task 8 complete")
            resolve({name:"Sandeep", age:39});
        }
        else{
            reject("Exception in the task of promise 8")
        }
        
    }, 3000);   
})

async function consumePromise8()
{
    
    try {
        const responsePromise8 = await promise8
        console.log(responsePromise7);
    } catch (error) {
        console.log(error)
    }
}
consumePromise8()



// consumiing API using fetch which returns promise itself
// await resPromise10.json() in this waiat is again used since coversion is also time taking process and 
// might gie error if used without await
const url =
"https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json";


async function consumePromiseApi(){

    try {
        const resPromise10 = await fetch(url);        
        const data = await resPromise10.json() // important statement 
         console.log(data)

    } catch (error) {
        console.log(error)
    }
    }

consumePromiseApi()
*/
// same api calling using .then
const url =
"https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json";

/*
fetch(url).then((response)=>{
    
    return response.json()
    
}).then((data)=>{
    console.log(data)
}).catch((error)=>{console.log(error);
})
*/
fetch(url).then((response)=>{
    let res = response
    promise11 = new Promise((resolve,reject)=>{
        let res1 = res.json();
        resolve(res1)
    }).then((data)=>{console.log(data)})
      .catch((error)=>{console.log(error);        
    })       
})
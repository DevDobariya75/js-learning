const promiseOne = new Promise(function(resolve , reject){
    // Do an async task
    // DB calls , cryptography network,
    
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    } , 1000)
})

promiseOne.then(function(){
    console.log("promise consumed !!");
}) // conection with resolve 


new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username: "Chai" , email : "chai@example.com"})
    } , 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "Dev" , password: "123"})
        }else{
            reject("Error: Something went wrong")
        }
    },1000)
})

const userName = promiseFour.then((user) => {
    console.log(user);
    return user.username
})

// console.log(userName);

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) =>{
    console.log(username);
})
.catch(function(error){
    console.log(error); 
})
.finally(() => console.log("the promise is either resolved or rjected !!"))


const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "javascript" , password: "123"})
        }else{
            reject("Error: SJ went Wrong")
        }
    },1000)
})

// async - await 

async function consumPromiseFive() {
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumPromiseFive()

// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data); 
})
.catch((error) => console.log(error))
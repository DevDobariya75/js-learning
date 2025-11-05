//const tinderUSer = new Object() // singleton object

const tinderUSer ={}

tinderUSer.id = "123abc"
tinderUSer.name = "jack"
tinderUSer.isLoggedIn = false

// console.log(tinderUSer);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "dev",
            lastname: "Dobariya"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);


//merge object 
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

// const obj3 = {obj1 , obj2}

//const obj3 = Object.assign({} , obj1 , obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

console.log(tinderUSer);

console.log(Object.keys(tinderUSer));
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer));
console.log(tinderUSer.hasOwnProperty('isLoggedIn'));





// sigleton --> made with constructor Object.create

const mySym = Symbol("key1")

//key: value
const JsUser = {
    name: "Dev",
    age: 18,
    location: "surat",
    email: "dev@google.com",
    isLoggedIn: false,
    [mySym]: "mykey1"
}

// how to access Object 
console.log(JsUser.email);      //1
console.log(JsUser["email"]);   //2
console.log(JsUser[mySym]);

//change value

JsUser.email = "dev@hmail.com"
console.log(JsUser.email);

//will not able to change 
//Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("hello js user !!");
}

JsUser.greeting2 = function(){
    console.log(`hello js , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());



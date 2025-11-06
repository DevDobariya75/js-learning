// console.log("D");
// console.log("E");
// console.log("v");

function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("v");
}

// sayMyName()
                    //parameters
function addTwoNumbers(num1 , num2){
    console.log(num1 + num2);
}
            //arguments
// addTwoNumbers(5 , 5)

function addTwoNumbers2(num1 , num2){
    let res = num1 + num2
    return res
}

const res = addTwoNumbers2(2 , 5)
// console.log("result : " , res);

function loginUserMessage(username){
    if(username == undefined){
        console.log("Enter valid username");
        return
    }
    return `${username} just logged In`
}

// console.log(loginUserMessage("Dev"));


//rest operator
function calculateCartPrice(val1 , val2 , ...num1){
    return num1
}

// console.log(calculateCartPrice(200 , 400 , 500 ,2000));

const user = {
    username: "dev",
    prices: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// console.log(user);

// handleObject({
//     username: "devvv",
//     price: 1000
// })

const myNewArray = [200 , 400 , 100 , 600]

function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(myNewArray));

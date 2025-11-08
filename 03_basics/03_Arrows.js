//Object
const user = {
    username: "dev",
    price: 999,

    welcomeMessage: function(){
                   //using current context -- refere current context
        console.log(`${this.username} , welcome to website`);
        
        // current context 
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

function chai(){
    console.log(this);
    
}

// chai()

const chaai = function(){
    let username = "dev"
  console.log(this.username);    
}

// chaai()

//+++++++++++++++ arrow functions ++++++++++++++++

const chaii = () =>{
    let username = "dev"
  console.log(this.username);    
}

// chaii()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// implict return 
const addTwo = (num1 , num2) => num1 + num2


console.log(addTwo(3 , 4));


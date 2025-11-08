// let a = 10
// const b = 20
var c = 300

if(true){
    let a = 10 // blocked scope
    const b = 20 // blocked scope
    var c = 30
}

// global scope is different in console and vs code

// console.log(a);
// console.log(b);
// console.log(c);

let d = 3;

if(true){
    //console.log("hiii" , d);
}


// nested functions
function one(){
    const username = "dev"

    function two(){
        const website = "youtueb"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


//check scope -- understood
if(true){
    const username = "dev"
    if(username == "dev"){
        const website = "youtube"
        console.log(username + website); 
    }
}

// ++++++++++++++++++++++++++++++++++++

function addone(num){
    return num + 1
}
// console.log(addone(5));


//holding function in variable

const addtwo = function(num){
    return num + 2
}
console.log(addtwo(4));


const userEmail = "dev@gmail.com"
   // without checking comparison
if(userEmail){
    console.log("user email");
}else{
    console.log("Don't have user email");
}

// falsy value
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy value
// "0" , 'false' , " " , [] , {} , function{}

// check empty object 

const emptyobj = {}

if(Object.keys(emptyobj).length){
    console.log("Obj is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);

// terniary Operator

// condition ? true : false
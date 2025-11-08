// Immediately Invoked Fuctions Expressions(IIFE)

(function chai(){
    // named iife
    console.log(`DB CONNTECTD`);    
})();

// chai()

( (name) =>  {
    // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})("dev");
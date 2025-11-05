// basic string thing 

const name = "dev"
const repocount = 50

//console.log(name + repocount + "Value");

//use backtick insted

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String("iam-here")

console.log(gamename[0]);

//lots of method of sting -- some of here
console.log(gamename.__proto__);

console.log(gamename.length);

console.log(gamename.toUpperCase());

console.log(gamename.charAt('2'));

console.log(gamename.indexOf('h'));
 
const newString = gamename.substring(0 , 4)
console.log(newString);

const anthorStirng = gamename.slice(-8 , 4)
console.log(anthorStirng);


const newString1 = "   dev"
console.log(newString1);
console.log(newString1.trim());

const url = "https://dev.com/dev%20dobariya"

console.log(url.replace('%20' , '-'))
console.log(url);

console.log(url.includes('dev'));

// split


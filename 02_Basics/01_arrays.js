// // array --collection of mutiple items

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeros = ["Iornamn" , "Spiderman"]
// const myArr2 = new Array(1, 2, 3, 4)

// // Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// // unshift() --> add at starting of array
// // shift() --> remove starting element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(8));

// //console.log(myArr);

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// // slice , splice 

// console.log("A" , myArr);
// const myn1 = myArr.slice(1 , 3)
// console.log(myn1);
// console.log("B" , myArr);

// spice --> manipulate original array

// merge two array
/*
    push() make array inside array
    concat() --> works good
*/

const marvel_h = ["Ironman" , "spiderman" , "Thor"]
const Dc_h =["Superman" , "flash" , "batman"]

// marvel_h.push(Dc_h)
// console.log(marvel_h);

const allHeros = marvel_h.concat(Dc_h)
console.log(allHeros);


// spread operator
const allnewHeros = [...marvel_h , ...Dc_h]
console.log(allnewHeros);


//flast method
const anotherArr = [1 , 2 , 3 ,[4 , 5 , 6] , 7 , [6 , 7 ,[4 , 5]]]
const realArr = anotherArr.flat(Infinity)
console.log(realArr);


console.log(Array.isArray("Dev"));
console.log(Array.from("Dev"));


//.of(pass all element here)

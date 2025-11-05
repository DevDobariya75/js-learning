let myDate = new Date()
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// date --> Object

let myCreateDate = new Date(2025 , 0 , 23)
console.log(myCreateDate.toDateString());

let myCreateDate1 = new Date("2023-01-14")
console.log(myCreateDate1);

let myTimeStamp = Math.floor(Date.now()/1000)
console.log(myTimeStamp);

let newdate = new Date()
//.getMonth()
//.getDay()

newdate.toLocaleString('default' ,{
    weekday: "long"
})

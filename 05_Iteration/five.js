const coding = ["js" , "rubt" , "java" , "php"]

coding.forEach(function (item) {
    console.log(item);
})

// M2

coding.forEach((item) => { //(item , index , arr)
    console.log(item);
})

function printMe(item){
    console.log(item);
}

const myCodaing = [
    {
        languageName: "Javascript",
        languageFilename: "js"
    },
    {
        languageName: "Pythan",
        languageFilename: "py"
    },
    {
        languageName: "Java",
        languageFilename: "java"
    }
]

myCodaing.forEach((item) => {
    console.log(item.languageFilename);
})
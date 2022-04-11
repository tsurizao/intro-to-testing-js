// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(name){
    if(typeof name === "string") {
        return "Hello, " + name;
    } else return "Hello, World!"
}

function isFive(number){
    return number == 5;
}

function isEven(number){
    return number % 2 === 0;
}

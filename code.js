// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(name){
    return typeof name === "string" ? "Hello, " + name : "Hello, World!";
}

function isFive(number){
    return number == 5;
}

function isEven(number){
    return number % 2 === 0;
}

function isVowel(input){
    return typeof input === 'string' && input.toLowerCase() === ("a" || "e" || "i" || "o" || "u");
}

function add(input1, input2){
    return (parseFloat(input1)) + (parseFloat(input2));
}
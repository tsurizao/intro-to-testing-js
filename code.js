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

function isVowel(input){
    if (typeof input === 'string'){
    return input.toLowerCase() === ("a" || "e" || "i" || "o" || "u");
    } else return false;
}

function add(input1, input2){
    if (isNaN(input1)){
        return parseFloat(input1);
    } else if (isNaN(input2)){
        return parseFloat(input2)
    } else return (parseFloat(input1)) + (parseFloat(input2));

}
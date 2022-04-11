// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(name){
    if(typeof name === "string") {
        return "Hello, " + name;
    } else return "Hello, World!"
}
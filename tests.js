// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(helloWorld()).not.toBe(undefined);
    });
});
// Unit tests for the sayHello function
describe('sayHello', function(){
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane" when called with sayHello("Jane")', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane");
    });
    it('should return "Hello, Alex when called with sayHello("Alex")', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex");
    });
    it('should return "Hello, Pat" when called with sayHello("Pat")', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat");
    });
    it('should return "Hello, World!" when called with empty parameter', function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when called as sayHello(true)', function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when called as sayHello(false)', function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
});
// Unit tests for the isFive function
describe('isFive', function(){
    it('should be defined as a function', function (){
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean no matter what the input', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when a 5 is passed', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when a string of "5" is passed', function () {
        expect(isFive("5")).toBe(true);
    });
});
describe('isEven', function() {
    it('should be defined as a function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe("boolean")
    });
    it('should return true when executed with isEven(2)', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when executed with isEven(-4)', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when executed with isEven(3)', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when called with isEven("banana)', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when called with isEven("8")', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when called with isEven(Infinity)', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called without an argument like isEven()', function () {
        expect(isEven()).toBe(false);
    });
});
describe('isVowel', function (){
    it('should be defined as a function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean value', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when called with isVowel("a")', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when called with isVowel("A")', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when called with isVowel("y")', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when called with isVowel(4)', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when called with isVowel(true)', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when called with isVowel(false)', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when called with isVowel()', function () {
        expect(isVowel()).toBe(false);
    });
});
describe('add', function(){
    it('should be defined as a function', function () {
        expect(typeof add).toBe('function');
    });
    it('should add(2,3) and return 5', function () {
        expect(add(2,3)).toBe(5);
    });
    it('should add(-3, -9) and return -12', function () {
        expect(add(-3, -9)).toBe(-12)
    });
    it('should add("5", 6) and return 11', function () {
        expect(add("5", 6)).toBe(11)
    });
    it('should add("-4", "10") and return 6', function () {
        expect(add("-4", "10")).toBe(6)
    });
    it('should add("banana", "split") and return NaN', function () {
        expect(add("banana", "split")).toBe(NaN);
    });
    it('should add(2, "apples" and return NaN', function () {
        expect(add(2, "apples")).toBe(NaN);
    });
});
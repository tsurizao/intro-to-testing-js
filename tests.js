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
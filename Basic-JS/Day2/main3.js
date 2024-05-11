// 11. Lesson 11: Function
// - Introduction
// + Function is a block of code
// + Do a specific thing

// - Type of Function
// + Built-in Functions
// + User-Defined Functions

// - Nature of Function
// + Not executed when defined but executed when called
// + Can receive parameters
// + Can return 1 value

// - Create Function
// + Function Declaration
function showMessage() {
    console.log('Hello everyone');
}

// - Call Function
showMessage();

// - Parameters
// + Definition: Parameters are variables that you list as part of a function definition
// + Data type: Can be created with any data type
// + Private: The parameter is only available within that block of code
// + 1 parameter: 
function showName(name) {
    console.log(name);
}

showName('Chuong');

// + Multiple parameters
function showInfo(name, age) {
    console.log(name, age);
}

showInfo('Chuong', 21);

// - Pass parameters
// + 1 parameter
// + Multiple parameters

// - Arguments
// + Arguments object
function showArguments() {
    console.log(arguments);
}

showArguments('Chuong', 21);

// + for loop
var myStr = '';
function showArguments() {
    for (var parameter of arguments) {
        myStr += parameter + ' - ';
    }
    console.log(myStr);
}

showArguments('Chuong', 21);

// - Return in Function
function sum(a, b) {
    return a + b;
    // return [a, b];
}

var result = sum(1, 2);
console.log(result);

// - Note
// + Function has the same name: The following function will overwrite the previous function
function mess1() {
    console.log('Hello');
}

function mess1() {
    console.log('Hi');
}

mess1();

// + Declare a variable in a function: Variables can only be used within functions
function mess2() {
    var message = 'Hello';
    console.log(message);
}

mess2();

// + Define a function in a function: The declared function can only be used in the parent function
function mess3() {
    function mess4() {
        console.log('Goodbye');
    }
    mess4();
}

mess3();

// - Type of Function
// + Declaration function
showMessage();

function showMessage() {
    console.log('Hello everyone');
}


// + Expression function
var showMessage1 = function() {
    console.log('Hello everyone');
}

showMessage1();

// + Arrow function
var showMessage2 = () => {
    console.log('Hello everyone');
}

showMessage2();

// * Note: Declaration function can be called before or after the function is defined


// 12. Lesson 12: Polyfill
// - Introduction: Polyfill (programming), in web development, code that implements a feature on web browsers that do not support the feature.

// - Example
// + Array.prototype.includes()
// + String.prototype.includes()
// + Object.entries()
// + Object.values()

if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement) {
        for(var i = 0; i < this.length; i++) {
            if (this[i] === searchElement) return true;
        }
        return false;
    };
}


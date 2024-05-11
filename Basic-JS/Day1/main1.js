// 1. Lesson 1: alert() function
alert("Hello! I'm BaKa")


// 2. Lesson 2: Variables
var fullName = "Dinh Quoc Chuong";
var age = 21;
alert("Hello! I'm " + fullName + " and I'm " + age + " years old");


// 3. Lesson 3: built-in functions
- alert()

- console.log()
var fullName = "Dinh Quoc Chuong";
console.log(fullName);

- confirm()
confirm("Are you ready for learn?");

- prompt()
prompt("What's your name?");

- setTimeout()
setTimeout(function () {
  alert("Hello");
}, 1000);

- setInterval()
setInterval(function () {
    console.log("Hello");
}, 1000);


var a = 5;
var b = 3;
var c = 4;

// 4. Lesson 4: Operators
// - Arithmetic
// `+` | Addition
console.log(a + b);

// `-` | Subtraction
console.log(a - b);

// `*` | Multiplication
console.log(a * b);

// `/` | Division
console.log(a / b);

// `%` | Modulus
console.log(a % b);

// `**` | Exponentiation
console.log(a ** b);

// `++` | Increment
a++;
console.log(a);
console.log(a++);
console.log(++a);
var output = a++ + --a + 2*++a + a;
console.log(output);

// `--` | Decrement
a--;
console.log(a);

// - Assignment
// `=` | Assignment

// `+=` | Addition assignment
// a += b is equivalent to a = a + b

// `-=` | Subtraction assignment
// a -= b is equivalent to a = a - b

// `*=` | Multiplication assignment
// a *= b is equivalent to a = a * b

// `/=` | Division assignment
// a /= b is equivalent to a = a / b

// `**=` | Exponentiation assignment
// a **= b is equivalent to a = a ** b

// - String
var name = "Dinh Quoc";
name += " Chuong";
console.log(name);

// - Comparison
// `==` | Equal
if (a == b) {
    console.log("a = b");
}

// `!=` | Not equal
if (a != b) {
    console.log("a != b");
}

// `>` | Greater than
if (a > b) {
    console.log("a > b");
}

// `<` | Less than
if (a < b) {
    console.log("a < b");
}

// `>=` | Greater than or equal
if (a >= b) {
    console.log("a >= b");
}

// `<=` | Less than or equal
if (a <= b) {
    console.log("a <= b");
}

// `===` | Strict equal
if (a === b) {
    console.log("a === b");
}

// `!==` | Strict not equal
if (a !== b) {
    console.log("a !== b");
}

// - Logical
if (a > b && a > c) {
    console.log("a is the greatest number");
}


// 5. Lesson 5: Boolean
var isSuccess = a < b;
console.log(isSuccess);
// Auto convert to boolean in JS
//  Return false if value is falsy:
    - false
    - 0
    - ""
    - null
    - undefined
    - NaN
// The rest return true

// 6. Lesson 6: Conditional
if (a < b) {
    console.log("true");
} else {
    console.log("false");
}


// 7. Lesson 7: Datatypes
// - Primitive Data
- Number
var number = 5;

- String
var string = "Hello";

- Boolean
var boolean = true;

- Undefined
var x;

- Null
var y = null;

- Symbol
var symbol = Symbol("symbol");
var symbol1 = Symbol("symbol");
console.log(symbol === symbol1);

// - Complex Data
- Function
var myFunction = function() {
    return "Hello";
}

- Object
var object = {
    name: "Chuong",
    age: 21
}
console.log(object);

var array = ["JavaScript", "PHP", "Python", "Java"];
console.log(array);

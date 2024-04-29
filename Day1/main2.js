// 8. Lesson 8: String
// - Create String
var name = "Dinh Quoc Chuong"; // Should use this way
var name1 = new String("Dinh Quoc Chuong");
console.log(typeof name1);

// - Case use backslash
var str = "This is a \"string\"";
var str1 = 'This is \\';
console.log(str);
console.log(str1);

// - String length
console.log(name1.length);

// - Template String ES6
var a = 10;
var b = 5;
console.log(`Sum of ${a} and ${b}: ${a + b}`);

// - Work with String
// + Length
console.log(name1.length);

// + Find index
console.log(name1.indexOf("Chuong"));

// + Cut String
console.log(name1.slice(10, 16));

// + Replace
console.log(name1.replace(/Dinh/g, "Chuong"));

// + Convert to upper case
console.log(name1.toUpperCase());

// + Convert to lower case
console.log(name1.toLowerCase());

// + Trim
var str2 = "   Dinh Quoc Chuong   ";
console.log(str2.trim());

// + Split
console.log(name1.split(" "));
console.log(name1.split(""));

// + Get a character by index
console.log(name1.charAt(10));


// 9. Lesson 9: Number
// - Create Number
var a = 3; // Should use this way
var b = new Number(3);
console.log(typeof b);

// - Work with Number
// + To String
console.log( a.toString());
console.log(typeof a.toString());

// + To Fixed
var PI = 3.14159265359;
console.log(PI.toFixed());
console.log(PI.toFixed(2));
console.log(typeof PI.toFixed(2));


// 10. Lesson 10: Array
// - Create Array
var languages = ["Java", "PHP", "JavaScript"];// Should use this way
var languages1 = new Array("Java", "PHP", "JavaScript"); 
console.log(languages);
console.log(Array.isArray(languages));

// - Retrieve in Array
// + Array length
console.log(languages.length);

// + Get by index
console.log(languages[2]);

// - Work with Array
// + To String => return a string
console.log(languages.toString());

// + Join => return a string
console.log(languages.join(' - '));

// + Pop => return the last element
console.log(languages.pop());
console.log(languages);

// + Push => return the length of array
console.log(languages.push('Python'));
console.log(languages);

// + Shift => return the first element
console.log(languages.shift());
console.log(languages);

// + Unshift => return the length of array
console.log(languages.unshift('C#'));
console.log(languages);

// + Splice => return an array
console.log(languages.splice(1, 1));
console.log(languages.splice(1, 0, 'Ruby', 'Swift'));
console.log(languages);

// + Concat => return new array
var languages2 = ["Ruby", "Swift"];
console.log(languages.concat(languages2));

// + Slice => return an array
console.log(languages.slice(1, 2));

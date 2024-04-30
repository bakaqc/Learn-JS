// 13. Lesson 13: Object
// - Introduction
var petKey = "pet"; // Add new property
var myInfo = {
  name: "Dinh Quoc Chuong",
  age: 21,
  address: "Quy Nhon, Binh Dinh",
  [petKey]: "dog",
  getAddress: function () {
    return this.address;
  },
};

myInfo.email = "abc@gmail.com"; // Add new property
delete myInfo.age; // Delete property
console.log(myInfo);
console.log(myInfo.getAddress());

// - Object constructor
function Student(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.getInfo = function () {
    return this.name + " - " + this.age + " - " + this.address;
  };
}

var student = new Student("Dinh Quoc Chuong", 21, "Quy Nhon, Binh Dinh");
student.email = "abc@gmail.com";
console.log(student);
console.log(student.getInfo());

// - Object prototype
// + Introduction: All JavaScript objects inherit properties and methods from a prototype.
// + Adding new property or method to object prototype
Student.prototype.className = "F8";
Student.prototype.getClassName = function () {
  return this.className;
};
var student1 = new Student("Le Nam", 21, "Quy Nhon, Binh Dinh");
console.log(student.className);
console.log(student1.getClassName());

// - Date object
var date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());


// 14. Lesson 14: if-else statement
var date = 3;

if (date === 2) {
  console.log("Today is Monday");
} else if (date === 3) {
  console.log("Today is Tuesday");
} else {
  console.log("Today is not Monday or Tuesday");
}


// 15. Lesson 15: Switch statement
switch (date) {
  case 2:
    console.log("Today is Monday");
    break;
  case 3:
    console.log("Today is Tuesday");
    break;
  case 4:
    console.log("Today is Wednesday");
    break;
  case 5:
    console.log("Today is Thursday");
    break;
  case 6:
    console.log("Today is Friday");
    break;
  case 7:
    console.log("Today is Saturday");
    break;
  case 8:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Today is not a normal day");
    break;
}


// 16. Lesson 16: Ternary operator
var course = {
  name: "JavaScript",
  coin: 250,
};

var result = course.coin > 0 ? `${course.coin} Coins` : "Free";
console.log(result);


// 17. Lesson 17: Loop
// - for loop: Repeat with true condition
for (var i = 0; i < 3; i++) {
  console.log(i);
}

var names = ["Chuong", "Nam", "Quoc"];
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// - for/in loop: Repeat with object key
var mySkills = {
  html: "80%",
  css: "90%",
  js: "70%",
};

for (var key in mySkills) {
  console.log(key);
}

// - for/of loop: Repeat with object value
for (var value of Object.values(mySkills)) {
  console.log(value);
}

// - while loop: Repeat with true condition
var i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// - do/while loop: Repeat at least once after that Repeat with true condition
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

// - break statement and continue statement
// + break statement: Exit loop
for (var i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// + continue statement: Skip current iteration
for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// - Nested loop
var myArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (var i = 0; i < myArray.length; i++) {
  for (var j = 0; j < myArray[i].length; j++) {
    console.log(myArray[i][j]);
  }
}

// - Extended example
for (var i = 0; i <= 10; i += 3) {
  console.log(i);
}

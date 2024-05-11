// 22. Lesson 22: Built in array methods
// - forEach: Iterate through each element of the array
Array.prototype.forEach2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
};

var courses = ["Javascript", "PHP", "Ruby"];

courses.forEach2(function (course, index, array) {
  console.log(index, course, array);
});

// - filter: Find all elements that meet the condition
Array.prototype.filter2 = function (callback) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      if (callback(this[index], index, this)) {
        output.push(this[index]);
      }
    }
  }
  return output;
};

var courses = [
  {
    id: 1,
    name: "Javascript",
    coin: 250,
  },
  {
    id: 2,
    name: "HTML",
    coin: 0,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 4,
    name: "PHP",
    coin: 400,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 500,
  },
];

var filterCourses = courses.filter2(function (course, index, array) {
  return course.coin === 0;
});
console.log(filterCourses);

// - some: Check if any element of the array meets the condition
Array.prototype.some2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      if (callback(this[index], index, this)) {
        return true;
      }
    }
  }
  return false;
};

var isFree = courses.some2(function (course, index, array) {
  return course.coin === 0;
});
console.log(isFree);

// - every: Check if all elements of the array meet the condition
Array.prototype.every2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      if (!callback(this[index], index, this)) {
        return false;
      }
    }
  }
  return true;
};

var isFree = courses.every2(function (course, index, array) {
  return course.coin === 0;
});
console.log(isFree);


// 23. Lesson 23: Recursion
// - Recursion: A function calls itself
// - Determine the stopping point
// - Logic handle => Create a breakpoint

// - Example: Count down from a number
function countDown(number) {
  if (number < 0) return;
  console.log(number);
  countDown(number - 1);
}

countDown(5);

// - Example: Calculate the factorial of a number
function factorial(number) {
  if (number === 1) return 1;
  return number * factorial(number - 1);
}

console.log(factorial(5));


// 24. Lesson 24: HTML DOM
// - DOM: Document Object Model
// - When a web page is loaded, the browser creates a Document Object Model of the page.
// - There are 3 components of the DOM:
//   + Element: HTML tag
//   + Attribute: Attribute of the element
//   + Text: Text in the element

console.log(document);
document.write("Hello! I'm Quoc Chuong");
// - Access the DOM:
//   + document.getElementById(id): Get the element by id
var id = document.getElementById(heading);
console.log(id);

//   + document.getElementsByClassName(name): Get the element by class name
var className = document.getElementsByClassName("heading");
console.log(className);

//   + document.getElementsByTagName(name): Get the element by tag name
var tagName = document.getElementsByTagName("p");
console.log(tagName);

//   + document.querySelector(selector): Get the first element that matches the selector
var selector = document.querySelector(".heading");
console.log(selector);

//   + document.querySelectorAll(selector): Get all elements that match the selector
var selectors = document.querySelectorAll(".heading");
console.log(selectors);

//   + HTMLCollection: A collection of HTML elements
console.log(document.forms['form-1'])

console.log(document.anchors)
console.log(document.images)

// - Attributes of the DOM:
var heading = document.querySelector("h1");
heading.title = "Heading";
heading.className = "heading";

var link = document.querySelector("a");
link.href = "https://www.youtube.com";

heading.setAttribute("id", "test");
console.log(heading.getAttribute("id"));

// - Example set color for h1 tag
var h1 = document.querySelector("h1");
h1.style.color = "blue";

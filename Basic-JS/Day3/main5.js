// 18. Lesson 18: Array methods
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    }
];

// - forEach: Iterate through each element of the array
courses.forEach(function(course, index) {
    console.log(index, course);
});

// - every: Check if all elements of the array meet the condition
var isFree = courses.every(function(course, index) {
    return course.coin === 0;
});
console.log(isFree);

// - some: Check if any element of the array meets the condition
var isFree = courses.some(function(course, index) {
    return course.coin === 0;
});
console.log(isFree);

// - find: Find the first element that meets the condition
var course = courses.find(function(course, index) {
    return course.name === 'Ruby';
});
console.log(course);

// - filter: Find all elements that meet the condition
var course = courses.filter(function(course, index) {
    return course.coin === 0;
});
console.log(course);

// - map: Create a new array based on the original array
var courseNames = courses.map(function(course, index) {
    return course.name;
});
console.log(courseNames);

// - reduce: Calculate the total value of the array
var totalCoin = courses.reduce(function(total, course) {
    return total + course.coin;
}, 0);
console.log(totalCoin);

// * Excercise about Array methods:
// 1. Flatten the array from the Depth array
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// Solution:
var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}
, []);
console.log(flatArray);

// 2. Take out the courses and put them in a new array
var topics = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJS'
            }
        ]
    }
];

// Solution:
var newCourses = topics.reduce(function(courses, topic) {
    return courses.concat(topic.courses);
}, []);
console.log(newCourses);


// 19. Lesson 19: includes methods
// - includes: Check if the array/string contains the element
// - Syntax: array.includes(element)/string.includes(element)
// - Return: true/false

// + Array
var courses = ['Javascript', 'PHP', 'Ruby'];
console.log(courses.includes('PHP')); // true
console.log(courses.includes('PHP', 3)); // false

// + String
var title = 'Javascript: The Good Parts';
console.log(title.includes('Good'));


// 20. Lesson 20: Math object
// - Math object: Contains properties and methods for mathematical constants and functions
// - Syntax: Math.methodName()
// - Return: Number
// - Example: Math.PI, Math.round(), Math.abs(), Math.ceil(), Math.floor(), Math.random(), Math.min(), Math.max()

// + Math.PI: Returns the value of PI
console.log(Math.PI);

// + Math.round(): Returns the value of a number rounded to the nearest integer
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.5)); // 2

// + Math.abs(): Returns the absolute value of a number
console.log(Math.abs(-1)); // 1

// + Math.ceil(): Returns the value of a number rounded up to the nearest integer
console.log(Math.ceil(1.1)); // 2

// + Math.floor(): Returns the value of a number rounded down to the nearest integer
console.log(Math.floor(1.9)); // 1

// + Math.random(): Returns a random number between 0 and 1
console.log(Math.random());

// + Math.min(): Returns the number with the lowest value
console.log(Math.min(1, 2, 3, 4, 5)); // 1

// + Math.max(): Returns the number with the highest value
console.log(Math.max(1, 2, 3, 4, 5)); // 5


// 21. Lesson 21: Callback function
// - Callback function: A function that is passed as an argument to another function
// - Example: forEach, setTimeout, setInterval, addEventListener, Promise, fetch
function myFunction(param) {
    param('I am BAKA');
}

function myCallback(callback) {
    console.log('Hello, ', callback);
}

myFunction(myCallback);



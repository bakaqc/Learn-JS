# Learn-JS

- This is the repository of my JS learning process with F8.

## What is JavaScript?

- JavaScript is a lightweight, cross-platform, single-threaded, and interpreted compiled programming language. It is also known as the scripting language for webpages. It is well-known for the development of web pages, and many non-browser environments also use it.

- JavaScript is a weakly typed language (dynamically typed). JavaScript can be used for Client-side developments as well as Server-side developments. JavaScript is both an imperative and declarative type of language. JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements.

## JavaScript Introduction

- **JavaScript Client-side:** It supplies objects to control a browser and its Document Object Model (DOM). Client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation. Useful libraries for the client side are AngularJS, ReactJS, VueJS, and so many others.

- **JavaScript Server-side:** It supplies objects relevant to running JavaScript on a server. Server-side extensions allow an application to communicate with a database and provide continuity of information from one invocation to another of the application, or perform file manipulations on a server. The useful framework which is the most famous these days is node.js.

- **Imperative language:** In this type of language, we are mostly concerned about how it is to be done. It simply controls the flow of computation. The procedural programming approach, object-oriented approach comes under this as async await we are thinking about what is to be done further after the async call.

- **Declarative programming:** In this type of language, we are concerned about how it is to be done, basically here logical computation requires. Her main goal is to describe the desired result without direct dictation on how to get it as the arrow function does.

## How to Link JavaScript File in HTML?

JavaScript can be added to an HTML file in two ways:

1. **Internal JS:** We can add JavaScript directly to our HTML file by writing the code inside the `<script>` tag. The `<script>` tag can either be placed inside the `<head>` or the `<body>` tag according to the requirement.

2. **External JS:** We can write JavaScript code in another files having an extension.js and then link this file inside the `<head>` tag of the HTML file in which we want to add this code.

**Syntax:**
```html
<script>
  // JavaScript Code
</script>

**Example:**
```html
<!DOCTYPE html> 
<html lang="en"> 
   
<head> 
    <title> 
        Basic Example to Describe JavaScript 
    </title> 
</head> 
   
<body> 
   
    <!-- JavaScript code can be embedded inside 
        head section or body section -->
    <script> 
        console.log("Hello! I'm Quoc Chuong"); 
    </script> 
</body> 
   
</html>

**Output:** The output will display on the console.
```html
Hello! I'm Quoc Chuong
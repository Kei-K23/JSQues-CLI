export const questions = [
  {
    question: "What is the result of typeof null in JavaScript?",
    options: ["null", "undefined", "object", "number"],
    answer: "object",
  },
  {
    question: "Which of the following is a primitive data type in JavaScript?",
    options: ["Array", "Object", "Number", "Function"],
    answer: "Number",
  },
  {
    question:
      "What is the JavaScript operator used to concatenate two or more strings?",
    options: ["+", "&", "|", "$"],
    answer: "+",
  },
  {
    question:
      "Which of the following is a valid way to declare a variable in JavaScript?",
    options: ["var 123abc;", "var my-variable;", "var $price;", "var 3x;"],
    answer: "var $price;",
  },
  {
    question: "What will console.log(5 + '5') output in JavaScript?",
    options: [10, "10 (string)", 55, "55 (string)"],
    answer: "55 (string)",
  },
  {
    question: "How can you check if a variable is an array in JavaScript?",
    options: [
      "Using the typeof operator",
      "Using Array.isArray()",
      "Comparing the variable to 'array'",
      "Using a try-catch block",
    ],
    answer: "Using Array.isArray()",
  },
  {
    question:
      "Which of the following is used to make an asynchronous request in JavaScript?",
    options: ["fetch()", "sync()", "request()", "http()"],
    answer: "fetch()",
  },
  {
    question:
      "What does the this keyword refer to in the global scope of a JavaScript program?",
    options: [
      "The current function",
      "The current object",
      "The global window object",
      "The parent function",
    ],
    answer: "The global window object",
  },
  {
    question: "How do you declare a constant variable in JavaScript?",
    options: [
      "const myVar;",
      "constant myVar;",
      "let myVar;",
      "const myVar = 10;",
    ],
    answer: "const myVar = 10;",
  },
  {
    question:
      "What does the localStorage object in JavaScript allow you to do?",
    options: [
      "Store data on the server",
      "Store data in the browser's local storage",
      "Store data in cookies",
      "Store data in session storage",
    ],
    answer: "Store data in the browser's local storage",
  },
  {
    question: "Which statement is true about JavaScript's hoisting?",
    options: [
      "Variables declared with let are hoisted to the top of their scope.",
      "Function declarations are hoisted, but function expressions are not.",
      "const and let variables are hoisted to the top of their block scope.",
      "All variables and function declarations are hoisted to the top of their scope.",
    ],
    answer:
      "Function declarations are hoisted, but function expressions are not.",
  },
  {
    question:
      "In JavaScript, which loop is used for iterating over the properties of an object?",
    options: ["for loop", "while loop", "for...in loop", "forEach loop"],
    answer: "for...in loop",
  },
  {
    question: "What is the purpose of a callback function in JavaScript?",
    options: [
      "To handle exceptions and errors",
      "To perform asynchronous operations and handle the result",
      "To define global variables",
      "To create new HTML elements",
    ],
    answer: "To perform asynchronous operations and handle the result",
  },
  {
    question: "How do you comment a single line in JavaScript?",
    options: [
      "# This is a comment",
      "/* This is a comment */",
      "// This is a comment",
      "<-- This is a comment -->",
    ],
    answer: "// This is a comment",
  },
  {
    question:
      "Which of the following is NOT a valid way to declare a JavaScript function?",
    options: [
      "function myFunction() {}",
      "var myFunction = function() {}",
      "() => {}",
      "const myFunction = () => {}",
    ],
    answer: "const myFunction = () => {}",
  },
  {
    question:
      "What is the purpose of the event.preventDefault() method in JavaScript?",
    options: [
      "To stop the event propagation",
      "To trigger an event",
      "To prevent the default behavior of an event",
      "To check if an event occurred",
    ],
    answer: "To prevent the default behavior of an event",
  },
  {
    question:
      "In JavaScript, what is the difference between null and undefined?",
    options: [
      "They are the same.",
      "null represents the absence of a value, while undefined is a variable that has been declared but not assigned a value.",
      "undefined represents the absence of a value, while null is a variable that has been declared but not assigned a value.",
      "null and undefined both represent the absence of a value, but they are used in different contexts.",
    ],
    answer:
      "null represents the absence of a value, while undefined is a variable that has been declared but not assigned a value.",
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A way to close a web page using JavaScript",
      "A way to hide the implementation details of a function",
      "A function that has access to its own scope, as well as the scope of its outer function",
      "A way to declare private variables in JavaScript",
    ],
    answer:
      "A function that has access to its own scope, as well as the scope of its outer function",
  },
  {
    question:
      "Which JavaScript method is used to remove the last element from an array and return it?",
    options: ["pop()", "shift()", "splice()", "slice()"],
    answer: "pop()",
  },
  {
    question: "What is the output of 2 + '2' in JavaScript?",
    options: [4, "4", 22, "22"],
    answer: "22",
  },
  {
    question: "What does the isNaN() function in JavaScript do?",
    options: [
      "Checks if a value is not a number",
      "Checks if a value is a number",
      "Converts a value to a number",
      "Returns the square root of a number",
    ],
    answer: "Checks if a value is not a number",
  },
  {
    question:
      "Which of the following is a valid way to create an empty array in JavaScript?",
    options: ["array()", "new array()", "[]", "{}"],
    answer: "[]",
  },
  {
    question:
      "How do you define a JavaScript function that takes a variable number of arguments?",
    options: [
      "Using the arguments object",
      "Using the rest parameter",
      "Using the varargs keyword",
      "You cannot define a function with a variable number of arguments in JavaScript",
    ],
    answer: "Using the rest parameter",
  },
  {
    question: "What is the purpose of the JSON.parse() method in JavaScript?",
    options: [
      "To parse a JSON string and convert it to an object",
      "To stringify an object to a JSON string",
      "To remove an element from an array",
      "To validate an email address",
    ],
    answer: "To parse a JSON string and convert it to an object",
  },
  {
    question:
      "Which of the following is a valid way to define a JavaScript class?",
    options: [
      "Using the class keyword",
      "Using the function keyword",
      "Using the prototype object",
      "Using the constructor keyword",
    ],
    answer: "Using the class keyword",
  },
  {
    question: "What is the purpose of the Object.keys() method in JavaScript?",
    options: [
      "To return an array of an object's own property keys",
      "To check if an object is empty",
      "To return an array of an object's values",
      "To create a new object",
    ],
    answer: "To return an array of an object's own property keys",
  },
  {
    question:
      "How do you add a comment in JavaScript that doesn't affect the code execution?",
    options: [
      "# This is a comment",
      "/* This is a comment */",
      "// This is a comment",
      "<-- This is a comment -->",
    ],
    answer: "// This is a comment",
  },
  {
    question:
      "What is the purpose of the Math.random() function in JavaScript?",
    options: [
      "To generate a random number between 1 and 100",
      "To generate a random floating-point number between 0 (inclusive) and 1 (exclusive)",
      "To round a number to the nearest integer",
      "To return a random integer between two specified numbers",
    ],
    answer:
      "To generate a random floating-point number between 0 (inclusive) and 1 (exclusive)",
  },
  {
    question:
      "What will the expression false == '0' evaluate to in JavaScript?",
    options: ["true", "false", "false", "true"],
    answer: "true",
  },
  {
    question:
      "How do you create a timer that executes a function repeatedly at a specified interval in JavaScript?",
    options: [
      "Using setTimeout()",
      "Using setInterval()",
      "Using setRecurring()",
      "Using requestAnimationFrame()",
    ],
    answer: "Using setInterval()",
  },
];

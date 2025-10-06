// // alert function
// function sayHello(){
//  alert("Welcome to Javascript");
// }

// // Variables in Javascript
// // Variable is a storage that store data
// // Types of variables
// // 1. variable
//      var name = "Mafuz";   
//      // this var is the old way to declare a variable
//      // avoid using var
// // 2. constant
//      // const age = 35;
//      // const is a variable that cannot be changed
//      // always use const unless you know you will reassign the variable
// // 3. let
//      let city = "Dhaka";
//      // let is a variable that can be changed
//      city = "Chittagong"; // reassigning the variable




// // Data Types in Js
//       // String 
//       let text = "Hello"
//       // Number
//       let number = 25;
//       // Boolean
//       let isTrue = true; 
//       let isFalse = false;
//       // Array
//       let fruits = ["Mango", "Banana", "Orange"];
//       // Object
//       let person = {name: "Mafuz", age: 35, city: "Dhaka"};
//       let fruit = {name: "Mango", color: "Yellow", price: 50};


// // Operators in Js
//       // Math Operators
//       let total = 10 + 5; // addition
//       let total2 = 10 - 5; // subtraction

//       // Comparison Operators
//       let isEqual = 10 == 10; // equal to
//       let isNotEqual = 10 != 5; // not equal to

//       5 == '5'
//       5 === '5'

//       // Logical Operators
//       // &&
//       // ||


// // Functions in Js
// function greet(user) {
//  return "Hello" + user;
// }

// console.log(greet("Mafuz"));

// // Condition (Decision Making)
// let age = 18;

// if (age <= 18) {
//  console.log("Adult");
// } else {
//  console.log("Not Adult");
// }






// // Array is a list that hoilds multiple values in a single variable
// let course = ["math", "english", "law", "agric", "social"];

// course[0];
// course[1];

// // adding a course from the sta'rt
// course.push("html");
// // adding a course from the back
// course.unshift("css");

// // remove a course first
// course.shift();
// // remove a course from the back
// course.pop();




// // Object is like a record that store key and value
// let student = {
//      name: "victor",
//      age: 35,
//      isPassword: "password"
// };


// console.log(student.name);
// console.log(student.age);
// console.log(student.isPassword);


// // Combination of Array and Objects
// // let students = [
// //      { name: "Victor", age: 35, score: 90},
// //      { name: "Mafuz", age: 50, score: 96},
// //      { name: "Mich", age: 35, score: 40},
// // ];

// // console.log(students[1].name);

// // let avg = (students[0].score + students[1].score + students[2].score) / 3

// // console.log("average score = " + avg);




// // Function (Reusable Code)
// // functions are the heart of programming----they allow us to reuse code instead of repeating it.
//      //  1) function declaration & expression
//      // 2) Parameters & return values
//      //  3) Arrow function (modern js)

// // function greet(name) {
// //      return "Hello" + name;
// // }

// // console.log(greet("Mafuz"));


// // Loops & iteration(Deeper Practice)
// // for...of (arrays)
// // for...in (objects)
// // while loop
// // Nested Loop (basic)

// let numbers = [10, 20, 30];
// for (let n of numbers) {
//      console.log(n);
// }

// // Array Methods (map, filter, reduce, forEach)
// // .forEach() --- loop through
// // .map() --- transform
// // .filter() --- select
// //  .reduce() --- calculate  

// let scores = [40, 50, 53, 60, 80];
// let passed = scores.filter(s => s >= 50);
// console.log(passed);



// // Function + array/object 
// // this method shows how to se functions with arrays/object to solve problem

// let students = [
//   {name: "John", score: 70},
//   {name: "Mary", score: 85}
// ];

// function averageScore(arr) {
//   let total = 0;
//   for (let s of arr) {
//     total += s.score;
//   }
//   return total / arr.length;
// }
// console.log(averageScore(students));



// // DOM Manipulation (Bringing Webpage alive)
// // This will change ur code webpage
// //     getElementById etc.

// function changeText() {
//      document.getElementById("title").textContent = "Changed!";
// }


// --------------------------------------------------------------------------------

// // What is a function
// // ----- Function is a block of code that runs only when you call it. It helps us to reuse code

// // to declare a function 
// function greeting(){
//      console.log("hello");
// }
// greeting();


// // function with parameter
// function meeting(name) {
//      console.log("Hello" + name);
// }
// meeting("Mafuz");


// // function with Return Value
// function add(a, b) {
//      return a + b;
// }
// console.log(add(5, 3));



// // Arrow function
// // Part 1:- Normal
// function square(x) {
//      return x * x;
// }

// // Part 2:- Arrow
// const squareArrow = x => x * x;
// console.log(squareArrow(4));


const students = {
     Student1: {Math: 85, English: 65, CSC:72, French:50},
     Student2: {Math: 75, English: 95, CSC:82, French:70},
     Student3: {Math: 55, English: 45, CSC:62, French:80},
     Student4: {Math: 95, English: 85, CSC:92, French:60},
     Student5: {Math: 45, English: 75, CSC:52, French:90},
     Student6: {Math: 35, English: 55, CSC:42, French:40},
     Student7: {Math: 25, English: 35, CSC:32, French:30},
     Student8: {Math: 15, English: 25, CSC:22, French:20},
     Student9: {Math: 5, English: 15, CSC:12, French:10},
     Student10: {Math: 95, English: 95, CSC:92, French:100},
};

// loop through each student
for (let student in students) {
     console.log(`\n${student}'s Results:`);
     
     let subjects = students[student];
     // loop through each subject
     for (let subject in subjects) {
          let score = subjects[subject];

          if (score >= 70){
               console.log(`${subject}: ${score} - Distinction`);
          } else if (score >= 50) {
               console.log(`${subject}: ${score} - Pass`);
          } else {
               console.log(`${subject}: ${score} - Fail`);
          }
     }
}
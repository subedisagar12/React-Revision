// Variable declaration in js
// var name = "Ayush";
let age = 18;

// Constant decleration
const PI = 3.14;

// Output
// console.log(name);
// document.write(age);
// alert(PI);

// input

// var a = prompt("Enter your name");
// console.log(a);

// Operator

// Arithmetic operator (+, -, / , *, %)

// Comparative Operator (==, ===, !=, !== , < ,<=, >, >=)

// Logical Operator (&& , || , !)

// Conditional statement

// if(condition){
//     // statement to execute if condition is true
// }

// if (2 > 2) {
//   console.log("If statement called");
// } else {
//   console.log("Else statement called");
// }

// if (age > 60) {
//   console.log("You are too old to drive");
// } else if (age === 16) {
//   console.log("Learn driving");
// } else if (age > 16) {
//   console.log("You can drive");
// } else {
//   console.log("You cannot drive");
// }

// let carColor = "maroon";

// switch (carColor) {
//   case "red":
//   case "maroon":
//     console.log("Red");
//     break;

//   case "blue":
//     console.log("Blue");
//     break;

//   default:
//     console.log("Unknown color");
// }

// Loop

// for, while, do-while

// for(initialization;condtion;increment-decrement rule){
//     execution code
// }

// 1. initialization
// 2.Condition Checking
// 3.Execution
// 4. Increment decrement

// for (let i = 100; i <= 100; i++) {
//   console.log(i);
// }

// While

// initialization
// while(conditionChecking){
//     // code to be executed
//     // increment-decrement rule
// }

// let i = 100;

// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// do-while loop

// initialization

// do{
//     // code to be executed
//     // increment-decrement
// }while(condition)

// let i = 0;

// do {
//   console.log("Hi");
//   i--;
// } while (i > 0);

// 1. initialization
// 2. Code execution
// 3.Increment Decrement
// 4. Condition checking

// Array

// let arr = ["Hi", 123, "Ram", true, null, undefined];

// splice
// arr.splice(startIndex,noofItemsstodeleted,new items to be added)

// arr.splice(4, 2, 3.14);

// arr.push("Raj");

// arr.unshift(0);

// let last = arr.shift();

// console.log(arr);

// let evenNumbers = [0, 2, 4, 6, 8, 20];

// console.log(evenNumbers[evenNumbers.length - 1]);

// Looping through an array using index

// for (let i = 0; i < evenNumbers.length; i++) {
//   console.log(evenNumbers[i]);
// }

// For of

// let student_ages = [12, 15, 40, 45, 56, 80, 20, 11, 5, 6, 8, 55, 15];

// Sum problem

// Print the sum of ages of the given array

// for (let i = 0; i < student_ages.length; i++){
//     if(i%!=0; i++);
//     console.log(student_ages[i]);
// }

// let count = 0;

// for (let item of student_ages) {
//   if (item <= 20) {
//     count = count + 1;
//   }
// }

// for (let i = 0; i < student_ages.length; i++) {
//   if (student_ages[i] <= 20) {
//     count = count + 1;
//   }
// }

// Print the number of students whose age is less than 25;

// for (let item of student_ages) {
//   console.log(item);
// }

// Print the ages greater than 20
// Print the first age which is greater than 30

// for (let i = 0; i < student_ages.length; i++) {
//   console.log(student_ages[i]);
//   console.log(student_ages[i]);
//   console.log(student_ages[i]);
// }

// for (let age of student_ages) {
//   if (age > 30) {
//     console.log(age);
//     break;
//   }
// }

// let count = 0;

// let count = 0;
// for (i = 0; i < student_ages.length; i++) {
//   if (student_ages[i] % 2 == 0) {
//     count++;
//   }
// }
// console.log(count);

// let add = 0;
// for (i = 0; i < student_ages.length; i++) {
//   add = add + student_ages[i];
// }
// console.log(add);

// let addOdd = 0;
// let addEven = 0;
// for (i = 0; i < student_ages.length; i++) {
//   if (student_ages[i] % 2 == 0) {
//     // console.log(addEven);
//     addEven = addEven + student_ages[i];
//   } else {
//     // console.log(addOdd);
//     addOdd = addOdd + student_ages[i];
//   }
// }

// console.log(addOdd);
// console.log(addEven);

// Array Transformation

// let numbers = [
//   153, 5, 6, 9, 8, 12, 0, -1, -5, 15, 17, 8, 20, 34, 56, 39, 6, 7, 0, -45, 59,
//   77,
// ];

// let bigEvenNumber = numbers[0];
// for (let item of numbers) {
//   if (item > bigEvenNumber && item % 2 == 0) {
//     bigEvenNumber = item;
//   }
// }
// console.log(bigEvenNumber);

// let bigEvenNumber = null;

// for (let item of numbers) {
//   if (item % 2 === 0) {
//     if (bigEvenNumber === null) {
//       bigEvenNumber = item;
//     } else {
//       if (item > bigEvenNumber) {
//         bigEvenNumber = item;
//       }
//     }
//   }
// }

// console.log(bigEvenNumber);

// let smallestNumber = numbers[0];

// for (let item of numbers) {
//   if (item < smallestNumber) {
//     smallestNumber = item;
//   }
// }

// console.log(smallestNumber);

// Find the largest number in an array.
// Find the smallest number in an array.

// let doubleNumbers = [];

// for (let item of numbers) {
//   if (item % 2 == 0) {
//     doubleNumbers.push(item);
//   }
// }

// console.log(doubleNumbers);

// let doubleNumbers = [];

// for (let item of numbers) {
//   doubleNumbers.push(item * 2);
// }

// console.log(doubleNumbers);

// Filtration

// Generate a new array of even numbers from a given array

// Generate a new array of negative numbers from a given array

// Generate a new array with items double of a given array

// [2,10,12,18,16,24,0,-2,-10]

// for (let item of numbers) {
//   console.log(item * 2);
// }

// Print Each Number of an array

// Print the product of each element of the array
// Print the sum of numbers divisible by 7
// Print the array of element which are divisible by both 3 & 5
//Print the new array with element at even index replaced by -1
// Print the new array which contains the square of every element of given array
// Print the sum of all negative numbers of an array

// Transformation

// let newArray = [];
// for (i = 0; i < numbers.length; i++) {
//   newArray.push(numbers[i] * numbers[i]);
// }

// console.log(newArray);

// Map method
// let myArray = numbers.map((number) => number * number);
// console.log(myArray);

// let cubeArray = numbers.map((number) => number * number * number);
// console.log(cubeArray);

// const numbers = [12, 45, 67, 80, 30, 40, 10, 11, -9, 0, 2, -4, 6, 7, 10, 45];

// let sum = 0;

// for (let item of numbers) {
//   sum = sum + item;
// }

// console.log(sum);

// let a = numbers.reduce((acc, item) => acc + item, 0);
// console.log(a);

// numbers.reduce(function, initialValueOfAnAccumulator);

// let sum2 = numbers.reduce((sum, item) => sum + item, 0);
// console.log(sum2);

// Reduction

// Filtration

// Generate a even number array from given array

// let evenArray = [];
// for (let item of numbers) {
//   if (item % 2 === 0) {
//     evenArray.push(item);
//   }
// }

// console.log(evenArray);

// Filter function

// let evenArray2 = numbers.filter((item) => item % 2 == 0);
// console.log(evenArray2);

// let newArr = numbers.filter((item) => item % 3 === 0 && item % 5 === 0);
// console.log(newArr);

// Generate a new array with every element being square of a given array

// let squaredNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   squaredNumbers.push(numbers[i] * numbers[i]);
// }

// console.log(squaredNumbers);

// Map method

// const secondSquare = numbers.map((item) => item * item);
// console.log(secondSquare);

// Strings

// let name = "Ramesh";
// let name2 = "ramesh";

// String slicing

// let slicedString = name.slice(2);
// console.log(slicedString);

// console.log(name > name2);

// console.log(name.toUpperCase() === name2.toUpperCase());

// console.log(name.toLowerCase());

// console.log(name.length);

// console.log(name[3]);

// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }

// for (let item of name) {
//   console.log(item);
// }

let students = [
  "Anish",
  "suresh",
  "kriti",
  "radhika",
  "Suman",
  "Sanjay",
  "John",
  "isha",
  "Sukrti",
];

let searchStudent = prompt("Enter student to search: ");

// for (let item of students) {
//   if (item.toLowerCase() === searchStudent.toLowerCase()) {
//     console.log("Student found");
//   }
// }

// if (students.includes(searchStudent)) {
//   console.log("Student found");
// } else {
//   console.log("Student not found");
// }

// let username = prompt("Enter your name");
// console.log(username);

// let newStudents = students.filter((item) => item.toLowerCase().includes("i"));
// console.log(newStudents);

// Filter the students whose name contains "i"

// let newStudents = students.filter((item) => item[0].toLowerCase() === "s");
// console.log(newStudents);

// Create a new array of students whose name starts with "S"

// let message = "Hello World";

// console.log(message.endsWith("World"));

// console.log(message.includes("Hello"));

// const numbers = [1, 2, 4, 6, 7];

// console.log(numbers.includes(2));

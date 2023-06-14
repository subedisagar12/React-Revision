// console.log("Hello User !");

// console.log("Hello User !");

// console.log("Hello User ");

// function greetUser(name) {
//   console.log("Hello " + name);
// }

// let callname = prompt("Enter your name");

// greetUser(callname);

// function addNumber(a, b = 0) {
//   console.log(a + b);
// }

// addNumber(2, 3);
// addNumber(2);

// Write a function to multiply any three given numbers

// Write a function to check if a given number is even or odd.

// function check(number) {
//   if (number % 2 === 0) {
//     console.log("Even Number");
//   } else {
//     console.log("Odd Number");
//   }
// }

// check(20);

// Write a function to transform the given string into uppercase

// function transformer(word) {
//   console.log(word.toUpperCase());
// }
// transformer("Hello World");

// function subTotal(qty, rate) {
//   let total = qty * rate;
//   return total;
// }

// let discount = 100;

// const grandTotal = subTotal(10, 550) - 100;

// console.log(grandTotal);

// Write a function that return the minimum number between two given numbers

// function checkmin(num1, num2) {
//   if (num1 > num2) {
//     return num2;
//   } else {
//     return num1;
//   }
// }

// let minNum = checkmin(-3, 2);
// console.log(minNum);

// Write a function that returns the sum of a given array.

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// let arrSum = sumArray([1, 2, 3]);
// console.log(arrSum);

// function sum(a, b) {
//   return a + b;
// }

// // function expressions

// const sum1 = function (a, b) {
//   return a + b;
// };

// Arrow function

// const sum2 = (a, b) => {
//   return a + b;
// };

// const sum = function(arr){
//   const sum1 = 0;
//   for(let i = 0; i<arr.length; i++) {
//       sum1 = sum1 + arr[i];
//   }
//   return sum1;

// }
// sum();

// const sumArray=(arr)=>{
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//             sum = sum + arr[i];
// }
//    return sum
// }

// sayHello();

// function sayHello() {
//   console.log("Hello Everyone !!!");
// }

// sayHello();

// function sum(a, b) {
//   return a + b;
// }

// const sum = (a, b) => console.log(a + b);

// sum(1, 2);

// Write a function to print "Namaste User"
// Write a function that asks for the input of user's name and greet them by saying Welcome name
// Write a function that checks whether a given number is divisible by 9
// Write a function that returns the maximum between two given numbers
// Write a function that returns all the even numbers between the given number (inclusive)

// const allEvenNumbers = (num) => {
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// };

// allEvenNumbers(20);
// Eg: 10 -> 0,2,4,6,8,10
// Eg: 5 -> 0,2,4
// Write a function that returns the number of vowels in a given string

const countVowel = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let item of str) {
    if (vowels.includes(item.toLowerCase())) {
      count++;
    }
  }
  return count;
};

console.log(countVowel("appleee"));

// Write a function that returns the reverse of a given string
// Write a function that checks if a given string is palindrome or not

// Write a function that returns the maximum number of a given array
// Write a function that returns the average of the given array
// Write a function that returns the secondlast element of a given array

// Given an array of strings, write a function that returns the smallest string of an array

const smallestString = (strArray) => {
  let smallString = strArray[0];
  for (let item of strArray) {
    if (item.length < smallString.length) {
      smallString = item;
    }
  }
  return smallString;
};

console.log(smallestString(["a", "apple", "mango"]));

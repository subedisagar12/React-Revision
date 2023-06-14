// Object

// Collection of properties

// Defining object
let user = {
  name: "Ramesh",
  age: 12,
  grade: 2,
};

// Define a object car with name, brand, color and manufacturedYear

// Accessing the properties

// Using dot

// console.log(user.grade);
// console.log(car.brand);
// console.log(car."manufactured year");

// Using large brackets

// console.log(user["grade"]);
// console.log(car["brand"]);
// console.log(car["manufactured year"]);

// Accesssing key dynamically

// let myKey = prompt("Which property of car do you want to see? ");

// console.log(car[myKey]);

// Adding and updating property to object

let car = {
  name: "Toyota Corolla",
  brand: "Toyota",
  color: "red",
  "manufactured year": 2023,
};

// car.price = 1000000;
// car.color = "black";

// Deleting the property from property
// delete car.brand;

// console.log(car);

// Looping through objects (for...in loop)

// for (let key in car) {
//   console.log(key);
//   console.log(car[key]);
// }

// Array of objects

const students = [
  { name: "Ramesh", age: 12, grade: 5, roll: 1 },
  { name: "Sita", age: 13, grade: 5, roll: 2 },
  { name: "Kritik", age: 12, grade: 5, roll: 3 },
  { name: "Rita", age: 11, grade: 4, roll: 4 },
  { name: "Hari", age: 15, grade: 4, roll: 5 },
];

// Print the name of all students
// for (let item of students) {
//   console.log(item.name);
// }

// Print the name of students whose age is greater than 12
// Create a new array of students of grade 5

// Print the name of students whose name starts with letter "R"

// const studentOfGradeFive = students.filter((item) => item.grade === 5);
// console.log(studentOfGradeFive);

// let newArray = students.filter((item) => item.name.startsWith("R"));
// console.log(newArray);

let message = "Hello World";

console.log(message.startsWith("Hell"));

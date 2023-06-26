// Dom manipulation

// console.log(document.body);

// 1. Selecting the dom element

// Tag selector

// let allParagraph = document.getElementsByTagName("p");

// console.log(allParagraph[2]);

// Class Selector
// let allClass = document.getElementsByClassName("main-div");
// console.log(allClass);

// id selector
// let myHeading = document.getElementById("heading");
// console.log(myHeading);

// let p = document.querySelectorAll("p");
// console.log(p[2]);

// let heading = document.querySelector("#heading");

// let firstDiv = document.querySelector(".main-div");

// firstDiv.innerHTML = "<p style='color:red'>Hi</p>";

// firstDiv.textContent = "<p>Hello</p>";

// console.log(firstDiv.innerHTML);

// heading.style.backgroundColor = "red";
// heading.style.color = "white";

// console.log(heading);

// Change the bg color of id main div to yellow
// change the text Welcome Everyone to Hello Everybody
// replace the paragraph of other id div with new h2 tag with message "New Heading"

// Attributes

// let mainDiv = document.querySelector("#main");

// console.log(mainDiv);

// hasAttribute()
// console.log(mainDiv.hasAttribute("hello"));

// getAttribute()
// console.log(mainDiv.getAttribute("name"));

// setAttribute()

// mainDiv.setAttribute("name", "myDiv");

//removeAttribute()
// mainDiv.removeAttribute("class");

// console.log(mainDiv);

// Take users age as a input

// if age is less than 12 -> apply red class to the h1 heading

// let age = prompt("what is your age?");
// if (age < 12) {
//   let change = document.getElementById("heading");
//   change.setAttribute("class", "red");
//   change.style.backgroundColor = "yellow";
// }

// let heading = document.getElementById("heading");
// heading.classList.toggle("red");

// heading.setAttribute("class", "font bg");

// heading.removeAttribute("class");

// let heading = document.createElement("h1");

// heading.textContent = "Hello World";
// heading.style.color = "blue ";

// let container = document.getElementById("container");

// container.after(heading);
// container.prepend(heading);

// insert new list item at start with content zero

// insert new list item at end with content four

// let newadd = document.createElement("li");
// newadd.textContent = "zero";

// let newadd4 = document.createElement("li");
// newadd4.textContent = "Four";
// let list = document.getElementById("list");
// list.prepend(newadd);
// list.append(newadd4);

// let name = document.getElementById("first_name");

// console.log(name.value);

// Events

// function printMessage() {
//   console.log("I am clicked");
// }

// let button = document.getElementById("btn-id");

// button.addEventListener("click", function () {
//   console.log("Clicked");
// });

// button.onclick = function () {
//   console.log("Clicked");
// };

// button.addEventListener("click", () => {
//   console.log("Hello");
// });

// button.onclick = () => {
//   console.log("I am clicked");
// };

// Create a input field to take the users input and print the data in console when user presses a button

// let button = document.getElementById("btn-id");
// let age = document.getElementById("age");

// // console.log(age.value);
// button.addEventListener("click", () => {
//   console.log("My age is " + age.value);
// });

// let newcolor = document.getElementById("container");
// newcolor.addEventListener("mouseover", () => {
//   newcolor.style.backgroundColor = "yellow";
// });

// newcolor.addEventListener("mouseout", () => {
//   newcolor.style.backgroundColor = "red";
// });

// let container = document.getElementById("container");

// container.addEventListener("mouseover", () => {
//   container.style.backgroundColor = "yellow";
// });

// container.addEventListener("mouseout", () => {
//   container.style.backgroundColor = "red";
// });

const students = [
  "Jack",
  "Johnson",
  "Ramesh",
  "Rita",
  "Ruhani",
  "Salim",
  "Saiman",
  "Srijana",
  "Abhisekh",
  "Ananya",
  "Binita",
  "Bibek",
  "Bishal",
  "Rahul",
  "Sheha",
  "Mark",
  "Elon",
  "Ethan",
  "Lanan",
  "Felix",
  "Mitchell",
  "Zayn",
];

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

let heading = document.querySelector("#heading");

let firstDiv = document.querySelector(".main-div");

// firstDiv.innerHTML = "<p style='color:red'>Hi</p>";

// firstDiv.textContent = "<p>Hello</p>";

// console.log(firstDiv.innerHTML);

// heading.style.backgroundColor = "red";
// heading.style.color = "white";

// console.log(heading);

// Change the bg color of id main div to yellow
// change the text Welcome Everyone to Hello Everybody
// replace the paragraph of other id div with new h2 tag with message "New Heading"

// const removeO = (str) => {
//   let filterStr = "";
//   for (let item of str) {
//     if (item === "o" || item === "O") {
//       continue;
//       //   filterStr = filterStr + item;
//     } else {
//       filterStr = filterStr + item;
//     }
//   }
//   return filterStr;
// };

// console.log(removeO("Brown"));

let extractCharacter = (str) => {
  let checkedCharacter = [];
  //   let filterStr = "";
  for (let item of str) {
    if (checkedCharacter.includes(item.toLowerCase())) {
      continue;
    } else {
      checkedCharacter.push(item.toLowerCase());
      //   filterStr = filterStr + item;
    }
  }
  return checkedCharacter.join("");
};

console.log(extractCharacter("thequickbrownfoxjumpsoverthelazydog"));

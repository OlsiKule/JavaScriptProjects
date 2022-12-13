console.log("this better work")
// in this lesson we're creating html elements 
const paragraph = document.createElement('p');
// the text doesn't show on firefox but it does on chrome
paragraph.textContent = "This is a new paragraph created out of this air";
paragraph.classList.add("special");
console.log(paragraph);  

const myList = document.createElement("ul");
const listItems1 = document.createElement("li");
const listItems2 = document.createElement("li");
const listItems3 = document.createElement("li");
// const listItems4 = document.createElement("li");
// const listItems5 = document.createElement("li");
myList.appendChild.listItems3;
listItems1.textContent = "One";
listItems2.textContent = "Two";
listItems3.textContent = "Three";
// listItems4.textContent = "Four";
// listItems5.textContent = "Five";
document.body.appendChild(listItems3)
// document.body.appendChild(listItems2)
listItems3.insertAdjacentElement("afterbegin", listItems2)
listItems2.insertAdjacentElement("afterbegin", listItems1)
console.log(myList)
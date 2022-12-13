// in this lesson we're creating html elements 
const paragraph = document.createElement('p');
// the text doesn't show on firefox but it does on chrome
paragraph.textContent = "This is a new paragraph created out of this air";
// adding a class to an element 
paragraph.classList.add("special");
paragraph.classList.toggle("alt");
// paragraph.classList.remove("alt");
// can still use setAttribute 
paragraph.setAttribute("alt", "description of image")
console.log(paragraph);  

// creating an image
const myImage = document.createElement("img");
myImage.src = "https://source.unsplash.com/random/500x500"
myImage.alt = "nice photo";
console.log(myImage)

// creating a wrapper 
const myDiv = document.createElement("div")
myDiv.classList.add("wrapper")
console.log(myDiv)

// adding elements to the DOM 
// appendChild method 
// here we don't have to use the const body = doc.queryse... etc instead we have direct access to body of html 
document.body.appendChild(myDiv)
myDiv.appendChild(paragraph)
myDiv.appendChild(myImage)
// when using three consecutive rerenders aka reflow it can slow down the page b/c the browser has to refresh every time with each appendChild

// istead we can do first 
myDiv.appendChild(paragraph)
myDiv.appendChild(myImage)
// then to show on the browser (here order matters) 
document.body.appendChild(myDiv)

// if we want to add smth at the top of this element 
const heading = document.createElement("h2")
heading.textContent = "Great things ahead"
// my.div become the placeholder for inserting the new heading we created 
myDiv.insertAdjacentElement("beforebegin", heading)


const myList = document.createElement("ul");
const listItems1 = document.createElement("li");
const listItems2 = document.createElement("li");
const listItems3 = document.createElement("li");
const listItems5 = document.createElement("li");
const listItems4 = document.createElement("li");
listItems1.textContent = "One";
listItems2.textContent = "Two";
listItems3.textContent = "Three";
listItems4.textContent = "Four";
listItems5.textContent = "Five";
myList.appendChild(listItems1);
myList.appendChild(listItems2);
myList.appendChild(listItems3);
myList.appendChild(listItems4);
myList.appendChild(listItems5);
document.body.appendChild(myList)
myDiv.insertAdjacentElement("beforebegin", myList)

// could also use .cloneNode(true) to copy and existing listItem eg. listItem1 = listItem3.cloneNode(true); then listItem1.textContent = "One"; then myList.insertAdjacentElement("afterbegin", listItem1)
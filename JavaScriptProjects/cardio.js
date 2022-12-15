// Make a div
const div = document.createElement('div');
console.log(div);
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const list = document.createElement('ul');
console.log(list);

// add three list items with the words "one, two, three" in them
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');
listItem1.textContent = 'one';
listItem2.textContent = 'two';
listItem3.textContent = 'three';
list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);
// document.body.appendChild(list) this is an extra step I added
// put that list into the above wrapper
// div.appendChild(list);
// this can also be done like as follows :
const myList = `
<ul>
    <li>One</li>
    <li>two</li>
    <li>Three</li>
</ul>
`;
div.innerHTML = myList;
// create an image
const image = document.createElement('img');

// set the source to an image
image.src = 'https://source.unsplash.com/random/500x500';
// set the width to 250
image.width = 250;
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
const string = `
<div class="myDiv">
    <p>this is paragr one </p>
    <p>this is paragr two </p>
</div>
 `;
//  we need to create a reference first /
const ul = div.querySelector('ul');
// put this div before the unordered list from above
ul.insertAdjacentHTML('beforebegin', string);

// add a class to the second paragraph called warning
// ** here querySelector is preferred b/c if a <p> is added it screws up the order **/
// const myDiv = div.firstElementChild;
const myDiv = div.querySelector('.myDiv');
myDiv.lastElementChild.classList.add('warning');
// also : myDiv.children[1].classList.add("warning")

// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
    `;
  return html;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
console.log(cards);
// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('rosie', 12, 150);
cardsHTML = cardsHTML + generatePlayerCard('scott', 12, 150);
cardsHTML = cardsHTML + generatePlayerCard('kate', 12, 150);
cardsHTML = cardsHTML + generatePlayerCard('fluff', 12, 150);
console.log(cardsHTML);
cards.innerHTML = cardsHTML;
// append those cards to the div
div.insertAdjacentElement('beforebegin', cards);
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener

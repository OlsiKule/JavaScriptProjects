// put the script tag right before the closing body tag </body>
// also could use fxn init and addEventListener with DOMContentLoaded, this so that we can have script on top of HTML b/f the body tag

// q...Selector and selectorAll takes one argument 
const p = document.querySelector("p");
console.log(p);

// it selects everything with div in a node list 
// node list looks like an array but it is NOT an array b/c it doesn't have all the methods like map, filter, reduce build into it
// can use parent child selector eg. ".item2 .title" where title is the child elmnt
const divs = document.querySelectorAll("div")

// if I want to use a child element in a div then we go .item2 to target the parent 
// this way it will limit the scope of the search
const grogu = document.querySelector(".item2")
const image = grogu.querySelector("img")
console.log(image)


// getters vs setters 


// when using console.dir to select an element on the page this is a called a getter e.g.
// console.dir shows the object properties, lot of legacy things
// some useful ones are parent.element 
const heading = document.querySelector('.title');
// this is a getter 
console.log(heading.textContent);
// this is a setter ie. when updating text content  property on that element 
heading.textContent = "This is the chosen div"
console.log(heading.textContent);


// textContent vs innerText
// textContent shows everything ie. all selected including elements and styles 
// innerText only shows readable text and is aware of styles and script (maybe inner stands for "what's inside")
console.log(heading.textContent);
console.log(heading.innerText);

console.log(heading.innerHTML)
console.log(heading.outerHTML)

const pizzaList = document.querySelector(".pizza")
console.log(pizzaList.textContent)

// this approach reloads the entire page slowing the app with heavy text
// pizzaList.textContent = `${pizzaList.textContent} 🍕`
// this is another method with two argumnt
pizzaList.insertAdjacentText("afterbegin", "🍕")

// //classes
// const pic = document.querySelector(".cool")
// console.log(pic.classList);
// pic.classList.replace("nice", "awesome")

// function toggleRound(){
//     pic.classList.toggle("round");
// }
 
pic.addEventListener("mouseover",  toggleRound); 
// pic.addEventListener("mouseout",  toggleRound); 





// // put the script tag right before the closing body tag </body>
// // also could use fxn init and addEventListener with DOMContentLoaded, this so that we can have script on top of HTML b/f the body tag

// // q...Selector and selectorAll takes one argument 
// const p = document.querySelector("p");
// console.log(p);

// // it selects everything with div in a node list 
// // node list looks like an array but it is NOT an array b/c it doesn't have all the methods like map, filter, reduce build into it
// // can use parent child selector eg. ".item2 .title" where title is the child elmnt
// const divs = document.querySelectorAll("div")

// // if I want to use a child element in a div then we go .item2 to target the parent 
// // this way it will limit the scope of the search
// const grogu = document.querySelector(".item2")
// const image = grogu.querySelector("img")
// console.log(image)


// // getters vs setters 


// // when using console.dir to select an element on the page this is a called a getter e.g.
// // console.dir shows the object properties, lot of legacy things
// // some useful ones are parent.element 
// const heading = document.querySelector('.title');
// // this is a getter 
// console.log(heading.textContent);
// // this is a setter ie. when updating text content  property on that element 
// heading.textContent = "This is the chosen div"
// // console.log(heading.textContent);


// // textContent vs innerText
// // textContent shows everything ie. all selected including elements and styles 
// // innerText only shows readable text and is aware of styles and script (maybe inner stands for "what's inside")
// console.log(heading.textContent);
// console.log(heading.innerText);

// console.log(heading.innerHTML)
// console.log(heading.outerHTML)

// const pizzaList = document.querySelector(".pizza")
// console.log(pizzaList.textContent)

// // this approach reloads the entire page slowing the app with heavy text
// // pizzaList.textContent = `${pizzaList.textContent} 🍕`
// // this is another method with two argumnt
// pizzaList.insertAdjacentText("afterbegin", "🍕")

//classes : allows to add class to an element 
const pic = document.querySelector(".cool")
console.log(pic.classList);
pic.classList.replace("nice", "awesome")
pic.classList.add("beauty")

// the toggle method adds/removes a class from an element  
function toggleRound(){
    pic.classList.toggle("round");
}
 
// wanted to try diff events beside the popular "click" 
pic.addEventListener("mouseover",  toggleRound); 
pic.addEventListener("mouseout",  toggleRound); 


// attibutes: anything that's added to an element like classes, src 
// adding a new attribute
pic.alt = "cute picture of whatever it is" //setter : this is changing smth 
console.log(pic.alt) //getter : this is displaying smth on the page 
// all of the attributes are done through getters and setters. Use the (.) notation eg pic.alt  pic.naturalWidth

pic.setAttribute("alt", "very awesome picture")
// pic.alt vs pic.setAttribute : the diff rests in that with the setAttr we can set the standart attri names like img, class, alt etc to anything we want eg. 
pic.setAttribute("new-attribute-name", "this picture has a customized attribute name")
// it's highly recommended not to use made up names for attributes but if you have to do that use : data-(whatever name goes here) eg. data-name or data-property

// dataset: this allows as to access the made up attributes. It seems to look at the first custom class from the list. To access another one in line could use a different class name 
const custom = document.querySelector(".custom")
console.log(custom.dataset)




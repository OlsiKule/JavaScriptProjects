console.log("learning traversing ")
// traversing refers to the ability to move up down over etc eg. selecting element based on its position 
// node vs element 
const cat = document.querySelector(".cat")

// this one goes only through elements in the string like <em>
console.log(cat.children)
// this one goes through everything in the string and seperates them into nodes, if no elemnt then is all one node 
console.log(cat.childNodes)

// other approaches / these ignore nodes 
console.log(cat.firstElementChild, "first child")
console.log(cat.lastElementChild, "last child")
console.log(cat.previousElementSibling, "previous sibling")
console.log(cat.nextElementSibling, "next simbling")
console.log(cat.parentElement, "parent element")


// could select an element in inspector then $0.previousElementSibling or any other to navigate around 

// other approaches / these don't ignore nodes 
cat.childNodes
cat.firstChild
cat.lastChild
cat.previousSibling
cat.nextSibling
cat.parentNode

// removing elements / first we intro elemnt
const p = document.createElement("p");
p.textContent = "I will be removed "
document.body.appendChild(p);

// to remove element
p.remove();

// although removed is still in memory 
console.log(p)


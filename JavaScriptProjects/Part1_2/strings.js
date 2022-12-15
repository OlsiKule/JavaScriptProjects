const item = document.querySelector(".item1");

// create const then instert them with the help of the backticks into  
const width = 150;
const src = `https://picsum.photos/${width}`;
const description = "cute pup"
// can dump inner html into the browser directly this way, with backticks we can have mulitple lines unlike // which doesn't allow that
const myHTML = `
<div class="wrapper">
    <h2> Hey ${description} </h2>
    <img src="${src}" alt="${description}" />
</div>
`

// // the above const is a string see console.log below
// console.log(typeof myHTML)
// // b/c myHTML is a string we can't add classList or eventListener etc  
// // to change elements in myHTML dynamically we have to first put it in the DOM and then ...

// item.innerHTML = myHTML 
// const itemImage = document.querySelector(".wrapper img")

// itemImage.classList.add("round")
// console.log(itemImage) 

// turn a string into a DOM element 
const myFragment = document.createRange().createContextualFragment(myHTML)
// a range is a collection of elements 
// with the range and contextual fragment we're able to select elements that were previously just strings 
console.log(myFragment.querySelector("img"))
// to display on the page we can use appendChild method
document.body.appendChild(myFragment)
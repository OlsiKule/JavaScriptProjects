const item = document.querySelector(".item1");

// create const then instert them with the help of the backticks into  
const width = 150;
const src = `https://picsum.photos/${width}`;
const description = "cute pup"
// can dump inner html into the browser directly this way, with backticks we can have mulitple lines unlike // which doesn't allow that
const myHTML = `
<div class="wrapper">
    <h2> Hey ${description}? </h2>
    <img src="${src}" alt="${description}" />
</div>
`
// the above const is a string see console.log below
console.log(typeof myHTML)
 
item.innerHTML = myHTML 
console.log(item.innerHTML)

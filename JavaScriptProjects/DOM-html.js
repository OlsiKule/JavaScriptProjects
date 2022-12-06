const p = document.querySelector("p");
console.log(p);
const div = document.querySelectorAll("div")
const grogu = document.querySelector(".group")
console.log(grogu)
console.log(div);

// getters vs setters 
// when using console.dir to select an element on the page this is a called a getter e.g.
const heading = document.querySelector('.title');
console.dir(heading.textContent);
heading.textContent = "This is the chosen div"
console.log(heading.textContent);

// textContent vs innerText
// textContent shows everything ie. all selected including elements and styles 
// innerText only shows readable text and is aware of styles and script (maybe inner stands for "what's inside")


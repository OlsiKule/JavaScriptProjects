// select elements on the page like canvas, shake buttons
// the canvas is the element while where we draw is the context
const canvas = document.querySelector('#etch-a-sketch');
// commmon naming convention for the context
// there's also 3d canvas
const ctx = canvas.getContext('2d');

const shakebutton = document.querySelector('.shake');

// setup our canvas for drawing
// creating a random spot on the canvas
// make a variable called height and width fromt he same properties of our canvas 
const width = canvas.width;
const height = canvas.height;

let x = Math.floor(Math.random() * width)
let y = Math.floor(Math.random() * height)
console.log(x)

// the above can also be done with destructuring
// const { width, height } = canvas;
console.log(width, height)

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // starts the drawing 
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw fxn
// first pass in an options obj then below in the handleKey fxn pass the properties of the option obj
// instead of function draw(options) can destructure it to :
function draw({key}){
    console.log({key})
}

// write a handler for the keys
// by adding an event we prevent the page from scroling with the arrow keys 
function handleKey(event){
    if(event.key.includes("Arrow")){
        event.preventDefault();
        draw({key: event.key})
     }
}



// clar /shake fxn

// listen for arrow keys
window.addEventListener("keydown", handleKey)

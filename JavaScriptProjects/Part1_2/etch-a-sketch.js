// select elements on the page like canvas, shake buttons
// the canvas is the element while where we draw is the context
const canvas = document.querySelector('#etch-a-sketch');
// commmon naming convention for the context
// there's also 3d canvas
const ctx = canvas.getContext('2d');

const shakebutton = document.querySelector('.shake');

// when is a true const that will never change use uppercase and underscore _
const MOVE_AMOUNT = 30;

// setup our canvas for drawing
// creating a random spot on the canvas
// make a variable called height and width fromt he same properties of our canvas
const width = canvas.width;
const height = canvas.height;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// the above can also be done with destructuring
// const { width, height } = canvas;
console.log(width, height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

// adding colour to the line
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // starts the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw fxn
// first pass in an options obj then below in the handleKey fxn pass the properties of the option obj
// instead of function draw(options) can destructure it to :
function draw({ key }) {
  // increment the hue
  hue = hue + 10;
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  console.log(key);
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x and y values depending on what he user did

  // switch statement : take in a varible like a key and depending on the case do the following
  // this is the same as an if statement (but more readable)
  switch (key) {
    case 'ArrowUp':
      y = y - MOVE_AMOUNT;
      // after each case run the break keyword so it can stop running
      break;
    case 'ArrowDown':
      y = y + MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x = x + MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x = x - MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys
// by adding an event we prevent the page from scroling with the arrow keys
function handleKey(event) {
  if (event.key.includes('Arrow')) {
    event.preventDefault();
    draw({ key: event.key });
  }
}

// clar /shake fxn
function clearCanvas() {
  canvas.classList.add('shake');
  canvas.addEventListener("animationend", function(){
    canvas.classList.remove("shake")
  })
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);

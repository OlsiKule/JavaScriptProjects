// in order to listen for events we need to get them first 
const butts = document.querySelector(".butts");
const coolButton = document.querySelector(".cool");

// fxn name handleSmth not a convention but it's used as an easy ref based on the fxn event
function handleClick(){
    console.log("it got clicked ")
}

// there're 3 steps to event listensers
// a)go get smth : butts 
// b) listen for smth : addEventListener => "click"
// c) go ahead and do smth: fxn() (anonymous fxn usually) or fxn reference
butts.addEventListener("click", handleClick)
// we say that handleClick fxn is "bound" to butts element
// notice that is not handleClick() ie. calling the fxn b/c the browser will do that 
// benefit of having the fxn outside : it's DRY 
// easy to update: can change fxn in one place 


// to remove a fxn we follow the same three steps 
butts.removeEventListener("click", handleClick)
// this is called "unbinding"
// can't remove an eventListener when anonymous fxn is used

// although this is an anonymous fxn b/c we have reference we can use it to bind/unbind
const hooray = () => console.log("OLLEY HOORAY") 
coolButton.addEventListener("click", hooray)


// listening for events on multiple items 
// (usually this selector goes at the top)
const buyButtons = document.querySelectorAll(".buy");

/*
function buyItem(){
    console.log("buying Item ")
}

// the event listener below gives an error b/c is not available in this context most likely b/c of number of buttons
// buyButtons.addEventListener("click", buyItem);
//    console.log(buyButtons)
// in the prototype when cons.log it shows method (forEach) which we can use

// in order to add event listener to multiple elemetns we must loop over eg. forEach() method
buyButtons.forEach(function(buyButton){
    console.log("binding the buy button ")
    buyButton.addEventListener("click", buyItem )
})
*/



//  target, bubling and propagation 
//  event is a parameter which can also be called e
function handleBuyButtonClick(event){
    console.log("you're about to buy it")
    // this is a string 
    // console.log(event.target.dataset.price)
    // parseFlaatInt doesn't keep the decimal
    console.log(parseFloat(event.target.dataset.price))

//  another example is to access data :
// console.log("you clicked a button")
// const button = event.target;
// console.log(button.textContent)

// the event.target got clicked 
console.log(event.target)
// the event.currentTarget fired the event listener
// in most cases we use .currentTarget
console.log(event.currentTarget)
// stop this event for bubbling up (see propagation)
event.stopPropagation();
}
// // how do we know what button is clicked ? 
// // that info is in the event object ie. the parameter (event)
buyButtons.forEach(function(buyButton){
    buyButton.addEventListener("click", handleBuyButtonClick)
})
// mouse, click, touches are all consolidated into a pointer event 


// Propagation
// the event registers on many nodes, it bubbles up to the parent element and so on up to the window or browser 
// we prevent that with stop propagation event so it focuses on a small area 
 window.addEventListener("click", function(event){
    console.log("You Clicked the Window")
    console.log(event.target)
}, {capture: true})


// "this" keyword
const photoEl = document.querySelector(".photo")

photoEl.addEventListener("mouseover", function(e){
    console.log(e.currentTarget)
    // "this" keywords it's always equal to whatever is before the dot (.)addEventListener 
    // this keyword does not work with arrow fxns 
    // console.count(this)
})


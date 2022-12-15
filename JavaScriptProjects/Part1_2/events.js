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




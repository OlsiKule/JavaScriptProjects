
console.log("it works !!! and it's a boy")
// global variables: available anywhere in the application
function yell(){
    console.log(name.toUpperCase())
}

function sayHi(name){
    yell();
}

yell()

// closures are inner fxns that access variables from a high level scope (outer fxn) even after the outer fxn has been called/closed 

function createGreeting(greeting = ""){
    const myGreet = greeting.toUpperCase();
    return function (name){
        return `${myGreet} ${name}`
    }
}

const sayHello = createGreeting("hello");
const sayHey = createGreeting("yello");

sayHello("Olsi")




function createGame(gameName) {
    let score = 0;
    return function win(){
        score++;
        return `Your name ${gameName} score is ${score}`
    }
}

const hockeyGame = createGame("Hockey");
const soccerGame = createGame("Soccer");

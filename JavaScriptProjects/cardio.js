const string = `
<div class="wrapper">
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis minus tenetur eum ut eaque expedita dolor officia consequuntur error, quod qui rem itaque explicabo pariatur recusandae iusto quos nihil labore.</p>
<p>Lorem ipsum dolor sit amet.</p>
</div>
`

// const fragment = document.createRange().createContextualFragment(string);
string.innerHTML = string;

const addClass = document.querySelector(".wrapper p")

console.log(addClass)


const playerCard = document.querySelector(".string")
function generatePlayerCard(name, age, height) {
    const heightInIches = height / 2.54
    playerCard.innerHTML = `
<div class="playerCard">
    <h2>${name} - ${age} </h2>
    <p>They are ${heightInIches } and ${age} years old. In dog years this person would be ${age * 7}. That would be a tall dog!</p>
</div>
    `

}
generatePlayerCard("dogo", 5, 139)
// console.log(generatePlayerCard())

  
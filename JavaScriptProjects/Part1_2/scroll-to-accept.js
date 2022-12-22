const terms = document.querySelector(".terms-and-conditions")
//intersection obeserver : insert a strong tag 
// there's also a "new" keyword entered here
const watch = document.querySelector(".watch")
const button = document.querySelector(".accept")

function obCallback(payload){
    if (payload[0].intersectionRatio === 1){
        button.disabled = false;
        // stop observing the button
        observer.unobserve(terms.lastElementChild)
    }
}
// this is a watcher ; as soon as the user reaches a certain point it sends data to browser
const observer = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 0.1, 
})

// this is a method that allows us to see when user scrolls past a certain point, it provides details like time on page, coordinates 
// observer.observe(watch)

observer.observe(terms.lastElementChild)


// this was the old way of doing things matching the srolltop and scrollHeight to figure out if the user has reached the bottom 
// terms.addEventListener("scroll", function(event){
//     // to ID the bottom of the scroll use event.currentTarget.scrollTop
//     console.log(event.currentTarget.scrollTop)
//     console.log(event.currentTarget.scrollHeight)
// })


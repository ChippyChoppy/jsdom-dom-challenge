
// DOM Elements
const timerH1 = document.querySelector("h1#counter")
const buttonContainer = document.querySelector("#button-container")
const likesUl = document.querySelector("ul.likes")
const commentForm = document.querySelector("#comment-form")
const commentList = document.querySelector("#list")
// Application state (single source of truth)
let currentNumber = 0
let counterRunning = true
let likedNumbers = {}
// { 1: 3, 20: 1, } --> creates a hash with the number that was liked and the number of times it was liked

// Events
commentForm.addEventListener("submit", event => {
     //always do this on submit event! It prevents the default behavior (making a network request) from running. We do not want to redirect users, we want the to stay on the page!
    event.preventDefault()
    const p = document.createElement("p")
    const input = document.querySelector("#comment-input")
    // const input = commentForm.comment
    // const input = event.target.comment
    p.textContent = input.value
    commentList.append(p)
    
    event.target.reset()
    // input.value = ""
    // commentForm.reset()
})

buttonContainer.addEventListener("click", event => {
    if (event.target.id === "plus") {
        changeCounter(1)
    } else if (event.target.id === "minus") {
        changeCounter(-1)
    } else if (event.target.id === "pause") {
        togglePaused()
    } else if (event.target.id === "heart") {
        updateLikes()
    }
})

// Functions
function updateLikes() {
    if (likedNumbers[currentNumber]) {
        const li = document.querySelector(`[data-number="${currentNumber}"]`)
        likedNumbers[currentNumber] += 1
        li.textContent = `The number ${currentNumber} has been like ${likedNumbers[currentNumber]} times.`
    } else {
        likedNumbers[currentNumber] = 1
        const li = document.createElement("li")
        li.dataset.number = currentNumber
        li.textContent = `The number ${currentNumber} has been liked 1 time.`
        likesUl.append(li)
    }
}

function togglePaused() {
    counterRunning = !counterRunning
    document.querySelectorAll("button").forEach(button => {
        if (button.id !== "pause") {
            button.disabled = !counterRunning
        } else {
            if (counterRunning) {
                button.textContent = "pause"
            } else {
                button.textContent = "resume"
            }
        }
    })
}

function changeCounter(amount) {
    currentNumber = currentNumber + amount
    timerH1.textContent = currentNumber
}

setInterval(() => {
    if (counterRunning) {
        changeCounter(1)
    }
}, 1000)
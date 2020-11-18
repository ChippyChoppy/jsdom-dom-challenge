document.addEventListener("DOMContentLoaded", function() {
    const plus = document.getElementById("plus")
    const minus = document.getElementById("minus")
    const heart = document.getElementById("heart")
    const submit = document.getElementById("submit")
    const likes = document.getElementsByClassName("likes")
    const pauseBtn = document.getElementById('pause')
    let counter = document.getElementById('counter')
    let interval 
    let paused = false
    
    // counter
    function increaseOne() {
        let timer = parseInt(counter.textContent)
        console.log("working?")
        counter.textContent = timer + 1
    }

    function decreaseOne() {
        let timer = parseInt(counter.textContent)
        counter.textContent = timer - 1
    }

    function countSec() {
        interval = setInterval(increaseOne, 1000)
    }
    countSec()

    // // beginning of function to dry up disabling the buttons

    
    // pause button functionality
    function pause() {
        if (paused == true) {
            countSec()
            paused = false
            pauseBtn.textContent = "pause"
            minus.disabled = false
            plus.disabled = false
            heart.disabled = false
            submit.disabled = false
        }
        else {
            minus.disabled = true
            plus.disabled = true
            heart.disabled = true
            submit.disabled = true
            clearInterval(interval)
            paused = true
            pauseBtn.textContent = "resume"
            //we know this isn't dry, but we're just happy it works 
        }
    }
// function disableBtn() {
    //     const allBtn = document.getElementsByTagName("button")
    //     allBtn.forEach (function(x) {
    //         if (x.id !== "pause") {
    //             x.disabled = true
    //         }
    //     })
    // }
    
    pauseBtn.addEventListener("click", function() {
        pause(pauseBtn)
    })

    minus.addEventListener("click", decreaseOne)

    plus.addEventListener("click", increaseOne)

    heart.addEventListener("click", function(){
        let li = document.createElement("li")
        li.innerText = `${counter.textContent} has `
        likes.append(li)
    })
    
})



// function countSec() {
    //     let oneSec = setInterval(function () {
    //         console.log("does this count?")
    //         let time = parseInt(counter.textContent)
    //         counter.textContent = time ++
    //     }, 1000 )
    // }
    // countSec()

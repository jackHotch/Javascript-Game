let redTop = 280
let redLeft = 700

function startGame() {
    let greenTop = 280
    let greenLeft = 300
    let greenSquare = document.getElementById("green-square")
    let redSquare = document.getElementById("red-square")
    let animationId = setInterval(moveSquares, 300) 

    function moveSquares() {   
        // New top value for green square
        let randTop = 0
        let randSignTop = 0

        randTop = Math.floor(100 * Math.random()) + 1
        randSignTop = Math.round(2 * Math.random()) - 1
        randTop *= randSignTop
        if (greenTop + randTop <= 560 && greenTop + randTop >= 0) {
            greenTop += randTop
        }
        else {
            randTop *= -1
            greenTop += randTop
        }
        

        // New left value for green square
        let randLeft = 0
        let randSignLeft = 0
        
        randLeft = Math.floor(100 * Math.random()) + 1
        randSignLeft = Math.round(2 * Math.random()) - 1
        randLeft *= randSignLeft
        if (greenLeft + randLeft <= 960 && greenLeft + randLeft >= 0) {
            greenLeft += randLeft
        }
        else {
            randLeft *= -1
            greenLeft += randLeft
        }
        

        greenSquare.style.top = greenTop + "px"
        greenSquare.style.left = greenLeft + "px"

        redSquare.style.top = redTop + "px"
        redSquare.style.left = redLeft + "px"
    }
}


function moveRedSquare(activity) {
    if (activity == 1) {
        redTop -= 10
    }
    else if (activity == 2) {
        redTop += 10
    }
    else if (activity == 3) {
        redLeft -= 10
    }
    else if (activity == 4) {
        redLeft += 10
    }
}










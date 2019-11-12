var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector("#colorDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector('h1')
var resetButton = document.querySelector('#reset')
var modeButtons = document.querySelectorAll('.mode')

init();

function init(){
    setupModeButtons()
    setupSquares()
    reset();
}

function reset(){
    //generate new colors
    colors = generateRandomColors(numSquares)
    //pick new random color from array
    pickedColor = pickColor()
    //change color display to match picked color
    colorDisplay.textContent = 'Color: ' + pickedColor
    //reset h1 banner
    h1.style.background = 'steelblue'
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block'
            squares[i].style.background = colors[i]
        } else {
            squares[i].style.display = 'none';
        }
        
    }
    //Change reset button back to new colors
    resetButton.textContent = 'New Colors'
    messageDisplay.textContent=""
}

resetButton.addEventListener('click',function(){
    reset()
})

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change all colors to selected color
        squares[i].style.backgroundColor = color;
    }   
}

function pickColor(){
    num = Math.floor(Math.random() * colors.length)
    return colors[num]
}

function generateRandomColors(num){
    var arr = []
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr
}

function randomColor(){
    r = Math.floor((Math.random() * 255) + 1)
    g = Math.floor((Math.random() * 255) + 1)
    b = Math.floor((Math.random() * 255) + 1)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected')
            
            this.textContent === 'Easy' ? numSquares = 3: numSquares = 6
        })
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i]
    
        //add click listeners to squares
        squares[i].addEventListener('click', function(){
        var clickedColor = this.style.backgroundColor
        
        //compare color to pickedColor
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct"
            changeColors(clickedColor)
            h1.style.background = pickedColor
            resetButton.textContent = 'Play Again?'
        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try Again"
            }
        })
    }
}
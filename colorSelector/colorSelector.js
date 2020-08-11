var colors = [
    generateRandom(),
    generateRandom(),
    generateRandom(),
    generateRandom(),
    generateRandom(),
    generateRandom(),
    generateRandom(),
    generateRandom(),
    generateRandom(),
]

var randomNumber;
var gameAreaTiles = document.getElementsByClassName("item");
var header = document.querySelector("span");
var winningColors;
var message = document.getElementById("alert");
var pickedColor;
var colorArea = document.getElementsByClassName("rgbSection")[0];
var resetButton = document.querySelector("button");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

resetButton.addEventListener("click", function() {
    for (var d = 0; d < colors.length; d++) {
        colors[d] = generateRandom();
        gameAreaTiles[d].style.backgroundColor = colors[d];
        winningColors = getColors();
        header.innerHTML = winningColors;
        resetButton.innerHTML = "NEW COLORS";
        message.style.display = "none";
        colorArea.style.backgroundColor = "rgb(8, 112, 209)";
    }
    gameAreaTiles[6].style.display = "block";
    gameAreaTiles[7].style.display = "block";
    gameAreaTiles[8].style.display = "block";
});

resetButton.addEventListener("click", function () {
    easyButton.classList.remove("selected");
    hardButton.classList.remove("selected");
})

easyButton.addEventListener("click", function() {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    message.style.display = "none";
    colorArea.style.backgroundColor = "rgb(8, 112, 209)";
    for (var d = 0; d < 6; d++) {
        colors[d] = generateRandom();
        gameAreaTiles[d].style.backgroundColor = colors[d];
        winningColors = getColorsEasy();
        header.innerHTML = winningColors;
        resetButton.innerHTML = "NEW COLORS";
    };
    gameAreaTiles[6].style.display = "none";
    gameAreaTiles[7].style.display = "none";
    gameAreaTiles[8].style.display = "none";
});

hardButton.addEventListener("click", function() {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    message.style.display = "none";
    colorArea.style.backgroundColor = "rgb(8, 112, 209)";
    for (var d = 0; d < colors.length; d++) {
        colors[d] = generateRandom();
        gameAreaTiles[d].style.backgroundColor = colors[d];
        winningColors = getColorsEasy();
        header.innerHTML = winningColors;
        resetButton.innerHTML = "NEW COLORS";
    }
    gameAreaTiles[6].style.display = "block";
    gameAreaTiles[7].style.display = "block";
    gameAreaTiles[8].style.display = "block";
});

function generateRandom() {
    randomNumber = Math.floor(Math.random() * 256);
    var a = randomNumber;
    randomNumber = Math.floor(Math.random() * 256);
    var b = randomNumber;
    randomNumber = Math.floor(Math.random() * 256);
    var c = randomNumber;
    return "rgb("+ a +", "+ b +", "+ c +")";
}

function getColors() {
    winningColors = Math.floor(Math.random() * colors.length);
    return colors[winningColors];
}

function getColorsEasy() {
    winningColors = Math.floor(Math.random() * 6);
    return colors[winningColors];
}

winningColors = getColors();
header.innerHTML = winningColors;

for (var i = 0; i < gameAreaTiles.length; i++) {

    gameAreaTiles[i].style.backgroundColor = colors[i];

    gameAreaTiles[i].addEventListener("click", function() {

        pickedColor = this.style.backgroundColor;

        if (pickedColor === winningColors) {
            message.style.display = "block";
            message.innerHTML = "Correct!";
            resetButton.innerHTML = "PLAY AGAIN?";
            colorArea.style.backgroundColor = pickedColor;
            changeColors(pickedColor);
        }
        else {
            message.style.display = "block";
            message.innerHTML = "Try Again.";
            this.style.backgroundColor = "black";
        }
    });
}

function changeColors(color) {
    for (var z = 0; z < gameAreaTiles.length; z++) {
        gameAreaTiles[z].style.backgroundColor = color;
    }
}

    


//var header = document.querySelector("span").innerHTML - ERROR
//can add classes and do for loop to refactor for difficulty modes
//classes are good for things that might be modded

/*for (var i = 0; i < buttonModes.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
    });
}

//try ternary operator next time:
//this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
//challenge: 11-line code is given a function














































/*





var winningColors = getColors();
header.innerHTML = winningColors;*/






/*var correct;
var alert = document.getElementById("alert");
var buttons = document.getElementsByClassName("modes");
var randomNumber;
var rgbNumbers;
var winningNumbers;



for (var x = 0; x < rgbNumbers.length; x++) {
    randomNumber = Math.floor(Math.random() * 256);
    rgbNumbers[x].innerHTML = randomNumber;
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function() {
        this.classList.toggle("mouseover");});
    buttons[i].addEventListener("mouseout", function() {
        this.classList.remove("mouseover");
    });
}

function pickColors() {
winningNumbers = Math.floor(Math.random() * gameAreaTiles.length);
return gameAreaTiles[winningNumbers];
}

if (correct = false) {
    alert.style.display = "block";
    alert.innerHTML = "Try Again."
}
if (correct = true) {
    alert.style.display = "block";
    alert.innerHTML = "Correct!"
}

//will need to insert an EventListener to activate the Boolean
*/


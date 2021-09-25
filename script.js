let randomOrderArray = [];
let userInputArray = [];

const squares = [
    topLeft = document.getElementById("topLeft"),
    topRight = document.getElementById("topRight"),
    botLeft = document.getElementById("botLeft"),
    botRight = document.getElementById("botRight")
];

const playButton = document.getElementById("playButton");
// Función que pasa despues de completar la secuencia
function addNumToArray() {
    let randomNum = Math.floor(Math.random() * 4) + 1;
    randomOrderArray.push(randomNum);
}
// Función que se fija que los dos arrays sean iguales
function checkArrayEquality() {
    for (let i = 0; i < userInputArray.length; i++) {
        if (userInputArray[i] != randomOrderArray[i]) {
            return false;
        }
    }
    return true;
}

// Función que se activa cuando apretas un cuadrado
function onSquareClick() {
    // Reinciar si perdiste
    if (!checkArrayEquality()) {
        alert('You lost, your score was: ' + (randomOrderArray.length - 1));
        randomOrderArray = [];
        userInputArray = [];
        addNumToArray();
        doColorSequence();
        // Si no perdiste alargar la secuencia y reniciar el orden introducido por el usuario
    } else if (userInputArray.length == randomOrderArray.length) {
        addNumToArray();
        doColorSequence();
        userInputArray = [];
    }
}

function doColorSequence() {
    for (let i = 0; i < randomOrderArray.length; i++) {
        setTimeout(() => {
            //Reproducimos animación
            squares[randomOrderArray[i] - 1].style.animation = "squares .5s";
            //Una vez que termina la animación le ponemos la default de nuevo
            setTimeout(() => {
                squares[randomOrderArray[i] - 1].style.animation = "idle 0s";
            }, 500);
        }, 700 * (i + 1));
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ONLOAD
// Le damos un eventlistener a cada cuadrado para que cuando sean clickeados devuelvan el número que fue clickeado
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function e() {
        userInputArray.push(i + 1);
        squares[i].style.animation = 'squares .25s';
        setTimeout(() => {
            squares[i].style.animation = "idle 0s";
        }, 250);
        onSquareClick();
    });
}
playButton.addEventListener('click', function e() {
    doColorSequence();
});
// Empezamos el juego llamando estas funciónes
addNumToArray();
doColorSequence();
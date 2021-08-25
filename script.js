let randomOrderArray = [];
let userInputArray = [];

const squares = [
    topLeft = document.getElementById("topLeft"),
    topRight = document.getElementById("topRight"),
    botLeft = document.getElementById("botLeft"),
    botRight = document.getElementById("botRight"),
]

const playButton = document.getElementById("playButton");
// Función que pasa despues de completar la secuencia
function addNumToArray() {
    let randomNum = Math.ceil(Math.random() * 4);
    randomOrderArray.push(randomNum);
    console.log('Order is ' + randomOrderArray)
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
        console.log('You lost!!');
        randomOrderArray = [];
        userInputArray = [];
        addNumToArray();
        // Si no perdiste alargar la secuencia y reniciar el orden introducido por el usuario
    } else if (userInputArray.length == randomOrderArray.length) {
        addNumToArray();
        userInputArray = [];
    }
}

// ONLOAD
// Le damos un eventlistener a cada cuadrado para que cuando sean clickeados devuelvan el número que fue clickeado
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function e() {
        userInputArray.push(i + 1);
        onSquareClick();
    });
}
playButton.addEventListener('click', function e() {
    console.log('I work!');
    // PRÓXIMOS PASOS: CREAR FUNCIÓN QUE SE LLAME ONPLAY QUE LE SUBA EL BRILLO A LOS CUADRADOS EN ORDEN
});
// Empezamos el juego llamando esta función
addNumToArray();
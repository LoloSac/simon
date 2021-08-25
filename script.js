let randomOrderArray = [];
let randomNum;
let userInputArray = [];

const squares = [
    topLeft = document.getElementById("topLeft"),
    topRight = document.getElementById("topRight"),
    botLeft = document.getElementById("botLeft"),
    botRight = document.getElementById("botRight"),
]

addNumToArray();

// le damos un eventlistener a cada cuadrado que devuelve su numero
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function e() {
        userInputArray.push(i + 1);
        onSquareClick();
    });
}


// función que pasa despues de completar la secuencia
function addNumToArray() {
    randomNum = Math.floor(Math.random() * 4) + 1;
    randomOrderArray.push(randomNum);
    console.log('Order is ' + randomOrderArray)
}

// función que se fija que los dos arrays sean iguales 
function checkArrayEquality() {
    for (let i = 0; i < userInputArray.length; i++) {
        if (userInputArray[i] != randomOrderArray[i]) {
            return false;
        }
    }
    return true;
}

// función que se activa cuando apretas un cuadrado 
function onSquareClick() {
    if (!checkArrayEquality()) {
        console.log('You lost!!');
        randomOrderArray = [];
        userInputArray = [];
        addNumToArray();
        return;
    } else if (userInputArray.length == randomOrderArray.length) {
        addNumToArray();
        userInputArray = [];
    }
}
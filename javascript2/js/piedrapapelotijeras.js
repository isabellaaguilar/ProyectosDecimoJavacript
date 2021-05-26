function init() {
    let nombre = ["piedra", "papel", "tijeras"];
    let valorIngresado = document.querySelector("#valorIngresado").value;
    res = document.querySelector("#res");
    col = document.querySelector("#color");
    seleccionRandom = "";
    let num = Math.round(Math.random() * (2 - 0) + 0);
    seleccionRandom = nombre[num];
    document.querySelector("#valorDeMaquina").value = seleccionRandom;
    verificar(valorIngresado, res, col, seleccionRandom, num);
}

function vaciar() {
    res = document.querySelector("#res");
    col = document.querySelector("#color");
    document.getElementById("res").value = "";
    document.getElementById("color").value = "";
    document.querySelector("#valorIngresado").value = "";
    document.querySelector("#valorDeMaquina").value = "";
    col.style.background = "white";
    res.innerHTML = "";

}

function aviso(decision, color, contenedorResultado, contenedorColor) {
    contenedorResultado.innerHTML = "<h1>" + decision + "</h1>";
    contenedorColor.style.background = color;
}

function verificar(valorIngresado, res, col, seleccionRandom) {
    valorIngresado = valorIngresado.toLowerCase();
    seleccionRandom = seleccionRandom.toLowerCase();

    if (valorIngresado == "papel" && seleccionRandom == "papel") {
        aviso("empate", "yellow", res, col);
    } else if (valorIngresado == "piedra" && seleccionRandom == "piedra") {
        aviso("empate", "yellow", res, col);
    } else if (valorIngresado == "tijeras" && seleccionRandom == "tijeras") {
        aviso("empate", "yellow", res, col);
    } else if (valorIngresado == "piedra" && seleccionRandom == "papel") {
        aviso("perdio", "red", res, col);
    } else if (valorIngresado == "papel" && seleccionRandom == "piedra") {
        aviso("ganaste", "green", res, col);
    } else if (valorIngresado == "tijeras" && seleccionRandom == "papel") {
        aviso("ganaste", "green", res, col);
    } else if (valorIngresado == "papel" && seleccionRandom == "tijeras") {
        aviso("perdio", "red", res, col);
    } else if (valorIngresado == "piedra" && seleccionRandom == "tijeras") {
        aviso("ganaste", "green", res, col);
    } else if (valorIngresado == "tijeras" && seleccionRandom == "piedra") {
        aviso("perdio", "red", res, col);
    } else {
        alert("digite piedra papel o tijera");
        vaciar();
    }
}
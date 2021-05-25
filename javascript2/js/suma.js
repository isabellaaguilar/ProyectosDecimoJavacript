let cajaTexto = document.querySelectorAll("input"); //selctorall para seleccionar todo de algpo en este caso todos los inputs
divResultado = document.querySelector("#resultado"); //este y la linea de abajo es para llamarlos indivualmente y no ha todos como en la linea de arriba se nesecita usar el # en este caso siempre 
divPrimero = document.querySelector("#primero");
console.log(cajaTexto);

function vaciar() {
    cajaTexto[0].value = "";

}

function vaciar2() {
    cajaTexto[1].value = "";

}

function sumar() {
    let sum = 0;
    if (isNaN(cajaTexto[0].value) || cajaTexto[0].value.trim() == "") { //despues del || es para que no se puedan dejar espacios en blanco
        alert("por favor ingrese datos numericos");
        vaciar() //esto vacia la cajita al darle aceptar
    }
    if (isNaN(cajaTexto[1].value) || cajaTexto[1].value.trim() == "") {
        alert("por favor ingrese datos numericos");
        vaciar2() //esto vacia la cajita al darle aceptar
    } else {

        sum = parseInt(cajaTexto[0].value) + parseInt(cajaTexto[1].value);
        //aqui estoy haciendo la suma despues de la caja texto la primera es 0 porque es la primera la segunda es 1  por que es la segunda
        divResultado.innerHTML = sum;
        divPrimero.innerHTML = "el primer valor es " + cajaTexto[0].value;
    }
}
let cajaTexto = document.querySelectorAll("input"); //selctorall para seleccionar todo de algpo en este caso todos los inputs
console.log(cajaTexto);

function vaciar() {
    document.getElementById("n1").value = "";

}

function vaciar2() {
    document.getElementById("n2").value = "";

}

function sumar() {
    let sum = 0;
    if (isNaN(cajaTexto[0].value)) {
        alert("por favor ingrese datos numericos");
        vaciar() //esto vacia la cajita al darle aceptar
    }
    if (isNaN(cajaTexto[1].value)) {
        alert("por favor ingrese datos numericos");
        vaciar2() //esto vacia la cajita al darle aceptar
    } else {

        sum = parseInt(cajaTexto[0].value) + parseInt(cajaTexto[1].value);
        //aqui estoy haciendo la suma despues de la caja texto la primera es 0 porque es la primera la segunda es 1  por que es la segunda
        document.getElementById('resultado').innerHTML = sum;
        document.getElementById('primero').innerHTML = "el primer valor es " + cajaTexto[0].value;
    }
}
let cajaTexto = document.querySelectorAll("input"); //selctorall para seleccionar todo de algpo en este caso todos los inputs
console.log(cajaTexto);
col = document.querySelector("#color");

function vaciar() {
    document.getElementById("n1").value = "";

}

function vaciar2() {
    document.getElementById("n2").value = "";

}

function vaciar3() {
    document.getElementById("n3").value = "";

}

function dividir() {
    let hayError = false
    let dividir = 0;
    if (isNaN(cajaTexto[0].value)) {
        alert("por favor ingrese datos numericos");
        vaciar() //esto vacia la cajita al darle aceptar
        hayError = true
    }

    if (isNaN(cajaTexto[1].value)) {
        alert("por favor ingrese datos numericos");
        vaciar2() //esto vacia la cajita al darle aceptar
        hayError = true
    }
    if (isNaN(cajaTexto[2].value)) {
        alert("por favor ingrese datos numericos");
        vaciar3() //esto vacia la cajita al darle aceptar
        hayError = true
    }

    if (!hayError) {
        dividir = (parseInt(cajaTexto[0].value) + parseInt(cajaTexto[1].value) + parseInt(cajaTexto[2].value)) / 3;
        //aqui estoy haciendo la dividira despues de la caja texto la primera es 0 porque es la primera la segunda es 1  por que es la segunda

        document.getElementById('resultado').innerHTML = dividir.toFixed(2);
        document.getElementById('primero').innerHTML = "el primer valor es " + cajaTexto[0].value;
    }
}
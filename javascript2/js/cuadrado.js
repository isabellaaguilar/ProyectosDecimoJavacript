function vaciar() {
    document.querySelector("#n1").value = ""; //para vaciar algo en este caso n1 que es el id de la caja con  # para que sepa que es un id
}

function mensaje() {
    alert("funciona correctamente");
}

function cuadrado() {
    let resultado = 0,
        result = 0,
        monto = 0;

    resultado = document.getElementById("res");
    monto = document.getElementById("n1");
    if (isNaN(monto.value) || monto.value == "") {
        alert("por favor ingrese un numero")
        vaciar() //borra lo que colocamos cuando le damos aceptar al alert

    } else {
        monto.style.background = "#a9a955";
        result = monto.value * monto.value;
        resultado.style.color = "#00ff55";
        resultado.innerHTML = result;
    }
}
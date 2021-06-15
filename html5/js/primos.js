function vaciar() {
    const resultado = document.querySelector("#resultado");
    const digi1 = document.getElementById("numero");
    digi1.value = "";
    resultado.innerHTML = "";
}

function aviso(frase, color) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<div class='caja' style='background-color: ${color}'> <h1>${frase}</h1>  </div> <br>`

}

function verifica(numero) {
    primo = true

    for (i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primo = false
        }
    }
    if (primo == true) {
        aviso("el numero es primo", "green");
    } else if (primo == false) {
        aviso("el numero no es primo", "red");

    } else {
        aviso("digite un numero por favor")
    }


}
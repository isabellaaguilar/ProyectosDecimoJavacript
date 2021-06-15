function aviso(numero, i, t) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = resultado.innerHTML + (numero + "x" + i + " = " + t + " <br>");

}

function vaciar() {
    const resultado = document.querySelector("#resultado");
    const digi1 = document.getElementById("numero");
    digi1.value = "";
    resultado.innerHTML = "";
}


function verifica(numero) {
    let i = 1;

    p = 0;
    t = 1
    while (i <= 12) {
        t = numero * i;
        aviso(numero, i, t)
        i++;
    }



}
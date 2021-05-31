const res = document.getElementById("res");
const vaciarNumeroDePlaca = document.getElementById("numeroDePlaca")

function vaciar() {
    vaciarNumeroDePlaca.value = "" //vaciarnumeros
    res.innerHTML = "" //vaciar texto
}

function validar(numeroDePlaca) {

    let ultimoDigito = obtenerUltimoValor(numeroDePlaca.trim())
    if (ultimoDigito % 2 == 0) {
        res.innerHTML = "no puedes circular: lunes, miercoles, viernes, domingo"
    } else {
        res.innerHTML = "no puedes circular el martes,jueves,sabados"
    }
}

function obtenerUltimoValor(numeroDePlaca) {

    return numeroDePlaca[numeroDePlaca.length - 1]

}
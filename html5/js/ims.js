const digi1 = document.getElementById("kilos")
const res = document.getElementById("res")
const digi2 = document.getElementById("estatura")

function vaciar() {
    digi1.value = "";
    digi2.value = "";
}



function verifica(peso, estatura) {
    imc = ((peso) / (estatura * estatura)).toFixed(2);
    if (imc < 18.5) {
        res.innerHTML = ("su condicion es de bajo peso y su indice de grasa corporal es " + imc + "");
    } else if (imc >= 18.5 && imc <= 24.9) {
        res.innerHTML = ("su condicion es de Peso normal y su indice de grasa corporal es " + imc + " ");
    } else if (imc >= 25.0 && imc <= 29.9) {
        res.innerHTML = ("su condicion es de sobrepeso y su indice de grasa corporal es " + imc + "");
    } else if (imc > 30.0) {
        res.innerHTML = ("su condicion es de Obesidad y su indice de grasa corporal es " + imc + "");
    } else {
        alert("digite valores numericos")
        vaciar()
    }

}
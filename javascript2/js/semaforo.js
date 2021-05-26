let semaforo = document.querySelector("#sema");
resultado = document.querySelector('#resultado');
col = document.querySelector("#color");

function vaciar() {
    semaforo.value = "";
}

function verifica() {
    semaforo.value = semaforo.value.trim();
    if (!isNaN(semaforo.value)) {
        alert("por favor no ingresar numeros");
        vaciar();

    } else
        proceso(semaforo.value);
}

function proceso(color) {
    color = color.toLowerCase();
    if (color == 'verde') {
        resultado.innerHTML = 'avance';
        col.style.background = 'green';
    } else
    if (color == 'amarillo') {
        resultado.innerHTML = 'precaucion';
        col.style.background = 'yellow';
    } else
    if (color == 'rojo') {
        resultado.innerHTML = 'Alto';
        col.style.background = 'red';
    } else {
        resultado.innerHTML = "color incorrecto";
        vaciar()
    }
}
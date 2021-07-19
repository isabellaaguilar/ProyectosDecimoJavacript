let vecAleatorios = [],
    vecNombres = ["jose", "mario", "jaime", "julia", "marcia", "josefa", "johana", "yuli"]
Mostrar = document.querySelector(".aleatorios"), msg = "";

function llenarvector() {
    for (let i = 0; i < 8; i++) {
        vecAleatorios[i] = aleatorios();
        for (let j = 0; j < i; j++) {
            if (vecAleatorios[i] == vecAleatorios[j]) {
                i--
            }

        }

    }
    console.log(vecAleatorios)
    mostrar();
}

function mostrar() {
    for (i = 0; i < vecNombres.length; i++) {
        msg = msg + vecNombres[vecAleatorios[i]] + "<br>";
        console.log(msg)
    }
    Mostrar.innerHTML = msg;
}

function aleatorios() {
    let num = Math.round(Math.random() * (8 - 1) + 0);
    return num;
}
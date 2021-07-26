let velocidad = 2000,
    actu = 0,
    i = 0
play = setInterval("siguiente()", velocidad);

function siguiente() {
    actu++;
    if (actu > 3) {
        actu = 0;
    }
    mostrar(Actu)

}

function mostrar(n) {
    let imagenes = document.getElementsByClassName("imagen");
    for (i = 0; i < imagenes.length; i++) {
        if (imagenes[i].className.includes("actual")) {
            imagenes[i].className = imagenes[i].className.replace("actual", "")
            // el que tenga la clase actual se la quita
            break;
        }
    }
    imagenes[n].className += " actual"
    puntos(n);
}

function puntos(n) {
    let ptn = document.getElementsByClassName("punto");
    for (i = 0; i < ptn.length; i++) {
        if (ptn[i].className.includes("activo")) {
            ptn[i].className = ptn[i].className.replace("activo", "");
            break;
        }
    }
    ptn[n].className = ptn[n].className + "activo";
}

function anterior() {
    actu--;
    if (actu < 0) {
        actu = 3
    }
    mostrar(actu)
}

function playpause() {
    let boton = document.getElementById("bot");
    play = setInterval("siguiente()", velocidad);
} else {
    clearInterval(play);
    play = null;
    boton.src = "imagenes/play.png"
}
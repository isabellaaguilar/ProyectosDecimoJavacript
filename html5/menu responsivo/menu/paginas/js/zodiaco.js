let digi1 = document.querySelector("#mes");
let digi2 = document.querySelector("#dia");
resultado = document.querySelector("#resultado");

function vaciar() {
    digi1.value = "";
}

function vaciar2() {
    digi2.value = "";
}

function aviso(frase, src) {
    resultado.innerHTML = `<h1>${frase}</h1> <br> ${src}`
}

function verifica(mes, dia) {
    if (mes == 3 && dia >= 21) {
        aviso("su signo es aries", "<img src='imagenes3/zodiaco/aries.jfif' alt=''/>");
    } else if (mes == 4 && dia <= 19) {
        aviso("su signo es aries", "<img src='imagenes3/zodiaco/aries.jfif' alt=''/>");
    } else if (mes == 4 && dia >= 20) {
        aviso("su signo es tauro", "<img src='imagenes3/zodiaco/tauro.jfif' alt=''/>");
    } else if (mes == 5 && dia <= 21) {
        aviso("su signo es tauro", "<img src='imagenes3/zodiaco/tauro.jfif' alt=''/>");
    } else if (mes == 5 && dia >= 21) {
        aviso("su signo es geminis", "<img src='imagenes3/zodiaco/geminis.jfif' alt=''/>");
    } else if (mes == 6 && dia <= 20) {
        aviso("su signo es geminis", "<img src='imagenes3/zodiaco/geminis.jfif' alt=''/>");
    } else if (mes == 6 && dia >= 21) {
        aviso("su signo es cancer", "<img src='imagenes3/zodiaco/cancer.jfif' alt=''/>");
    } else if (mes == 7 && dia <= 22) {
        aviso("su signo es cancer", "<img src='imagenes3/zodiaco/cancer.jfif' alt=''/>");
    } else if (mes == 7 && dia >= 22) {
        aviso("su signo es leo", "<img src='imagenes3/zodiaco/leo.jfif' alt=''/>");
    } else if (mes == 8 && dia <= 22) {
        aviso("su signo es leo", "<img src='imagenes3/zodiaco/leo.jfif' alt=''/>");
    } else if (mes == 8 && dia >= 23) {
        aviso("su signo es virgo", "<img src='imagenes3/zodiaco/virgo.jfif' alt=''/>");
    } else if (mes == 9 && dia <= 22) {
        aviso("su signo es virgo", "<img src='imagenes3/zodiaco/virgo.jfif' alt=''/>");
    } else if (mes == 9 && dia >= 23) {
        aviso("su signo es libra", "<img src='imagenes3/zodiaco/libra.jfif' alt=''/>");
    } else if (mes == 10 && dia <= 22) {
        aviso("su signo es libra", "<img src='imagenes3/zodiaco/libra.jfif' alt=''/>");
    } else if (mes == 10 && dia >= 23) {
        aviso("su signo es escorpio", "imagenes3/zodiaco/escorpio.jfif");
    } else if (mes == 11 && dia <= 21) {
        aviso("su signo es escorpio", "<img src='imagenes3/zodiaco/escorpio.jfif' alt=''/>");
    } else if (mes == 11 && dia >= 22) {
        aviso("su signo es sagitario", "<img src='imagenes3/zodiaco/sagitario.jfif' alt=''/>");
    } else if (mes == 12 && dia <= 21) {
        aviso("su signo es sagitario", "<img src='imagenes3/zodiaco/sagitario.jfif' alt=''/>");
    } else if (mes == 12 && dia >= 22) {
        aviso("su signo es capricornio", "<img src='imagenes3/zodiaco/capricornio.jfif' alt=''/>");
    } else if (mes == 1 && dia <= 19) {
        aviso("su signo es capricornio", "<img src='imagenes3/zodiaco/capricornio.jfif' alt=''/>");
    } else if (mes == 1 && dia >= 20) {
        aviso("su signo es acuario", "<img src='imagenes3/zodiaco/acuario.jfif' alt=''/>");
    } else if (mes == 2 && dia <= 18) {
        aviso("su signo es acuario", "<img src='imagenes3/zodiaco/acuario.jfif' alt=''/>");
    } else if (mes == 2 && dia >= 19) {
        aviso("su signo es piscis", "<img src='imagenes3/zodiaco/piscis.jfif' alt=''/>");
    } else if (mes == 3 && dia <= 20) {
        aviso("su signo es piscis", "<img src='imagenes3/zodiaco/piscis.jfif' alt=''/>");
    } else {
        alert("digite un dia y un mes correcto");
        vaciar();
        vaciar2()
    }
}
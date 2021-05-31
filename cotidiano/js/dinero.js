let vecImagenesBilletes = [
    '<img src="imagenes3/billetes/50000.jpg" alt="" width="300px" height="300px" />',
    '<img src="imagenes3/billetes/20000.jpg" alt="" width="300px" height="300px" />',
    '<img src="imagenes3/billetes/10000.jpg" alt="" width="300px" height="300px" />',
    '<img src="imagenes3/billetes/5000.jpg" alt="" width="300px" height="300px" />',
    '<img src="imagenes3/billetes/2000.jpg" alt="" width="300px" height="300px" />',
    '<img src="imagenes3/billetes/1000.jpg" alt="" width="300px" height="300px" />',
]
let vecImagenesMonedas = [
    '<img src="imagenes3/billetes/500.jpg" alt="" width="300px" height="300px" />',
    '<img src="imagenes3/billetes/100.jpg" alt="" width="300px" height="300px" />',
    '<img src="imagenes3/billetes/50.jpg" alt="" width="300px" height="300px" />',
    '<img src="imagenes3/billetes/25.jpg" alt="" width="300px" height="300px" />',
    '<img src="imagenes3/billetes/10.jpg" alt="" width="300px" height="300px" />',
    '<img src="imagenes3/billetes/5.jpg" alt="" width="300px" height="300px" />',
]


let res = document.getElementById("res")



let billetes = [50000, 20000, 10000, 5000, 2000, 1000],
    i = 0,
    monto,
    desglose = 0,
    desglosem = 0;
monedas = [500, 100, 50, 25, 10, 5];
monto = document.querySelector("#n1");
billete5 = document.querySelectorAll("div");
monedaS = document.querySelectorAll("p");

function vaciar() {

    monto.value = ""; //para que la cajita quede vacia

}

function vaciar2() {
    res.innerHTML = "";
    location.reload()

}

function validar() {

    if (isNaN(monto.value)) {
        alert("no se aceptan textos,por favor digite datos numericos");
        vaciar();
    } else {
        verifica(monto.value);
    }

}

function verifica(cant) {
    console.log(cant)
    if (cant > 4) {
        proceso(cant);
    } else sidesglose(cant);
}

function proceso(m) {

    for (i = 0; i < billetes.length; i++) {
        if (m >= billetes[i]) {
            desglose = m / billetes[i];
            desglose = Math.floor(desglose);
            m = m - billetes[i] * desglose;
            billete5[i].innerHTML =
                "billetes de" + billetes[i] + "" + desglose + "<br>";
            for (let j = 0; j < desglose; j++) {
                res.innerHTML = res.innerHTML + vecImagenesBilletes[i] + "<br>"

            }
        }
    }

    for (i = 0; i < monedas.length; i++) {
        if (m >= monedas[i]) {
            desglosem = m / monedas[i];
            desglosem = Math.floor(desglosem);
            m = m - monedas[i] * desglosem;
            monedaS[i].innerHTML =
                "monedas de" + monedas[i] + " " + desglosem + "<br>";

            for (let j = 0; j < desglose; j++) {
                res.innerHTML = res.innerHTML + vecImagenesMonedas[i] + "<br>"
            }
        }
    }
}

function sindesglose(m) {
    alert("por favor digite un dato correcto");
    vaciar();
}
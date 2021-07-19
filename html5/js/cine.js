msg = "";
acu = 0;
canti = document.querySelectorAll(".cnt1");

function carrito(pos, precio, esto) {
    acu = acu + precio;
    msg = msg + vecImagenes[pos];
    esto.value = "Adquirido";
    esto.disabled = true;
}

function comprar() {

    document.getElementById("montoProductos").innerHTML = "<br> <br> <h1>Tienes que pagar</h1> " + "<h1> $" + acu + " colones </h1>";
}

function cancelar() {
    let btncancelar = document.querySelectorAll("input"),
        i = 0;
    for (i = 0; i < btncancelar.length; i++) {
        if (btncancelar[i].disabled == true) {
            btncancelar[i].disabled = false;
            btncancelar[i].value = "Añadir al carrito"
        }
    }
    msg = ""
    acu = 0
    document.getElementById("imgProductos").innerHTML = "";
    document.getElementById("montoProductos").innerHTML = "";
    document.getElementById("cancelacion").style.display = "block"
    setTimeout(() => {
        document.getElementById("cancelacion").style.display = "none"
    }, 3000);

}
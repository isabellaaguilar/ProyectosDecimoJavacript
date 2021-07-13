function imagen(esto) {

    esto.value = "Ya lo presionaste";
    esto.disabled = true;
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
}
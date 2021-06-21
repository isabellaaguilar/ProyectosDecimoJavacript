let vecImagenes = [
        '<img src="imagenes/pitbull.jpg" alt="" width="300px" height="300px" />',
        '<img src="imagenes/salchicha.jpg" alt="" width="300px" height="300px" />',
        '<img src="imagenes/snauser.jpg" alt="" width="300px" height="300px" />',
        '<img src="imagenes/stanford.jpg" alt="" width="300px" height="300px" />',
        '<img src="imagenes/perro.jpg" alt="" width="300px" height="300px" />',


    ],
    vecNombres = ["pitbull", "salchicha", "esnauser", "stanford", "perro"];
pos = 0, msg = "", i = 0, sigue = false;

function vaciar() {
    document.getElementById('bandera').value = ""


}

function imagenes() {
    let textoImagenes = document.getElementById("bandera").value;
    textoImagenes = textoImagenes.toLowerCase();

    if (isNaN(textoImagenes)) {
        for (i = 0; i < vecNombres.length; i++) {
            if (textoImagenes == vecNombres[i]) {
                pos = i;
                sigue = true;

                break;
            }
        }
        if (sigue) {
            msg = vecImagenes[pos];
            document.getElementById('n2').innerHTML = msg;
        } else {
            alert("no tenemos esa raza de perro");
            vaciar()
        }

    } else {
        alert("por favor no digite valores numericos");
        vaciar()
    }
}
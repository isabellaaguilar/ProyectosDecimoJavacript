let vecImagenes = ['<img src="imagenes2/img1.jpg" alt="" width="300px" height="300px" />',
        '<img src="imagenes2/img2.jpg" alt="" width="300px" height="300px" />',
        '<img src="imagenes2/img3.jpg" alt="" width="300px" height="300px" />',
        '<img src="imagenes2/img4.png" alt="" width="300px" height="300px" />',
        '<img src="imagenes2/img5.png" alt="" width="300px" height="300px" />',
        '<img src="imagenes2/img6.gif" alt="" width="300px" height="300px" />',
        '<img src="imagenes2/img7.png" alt="" width="300px" height="300px" />',

    ],
    vecNombres = ["costarica", "elsalvador", "honduras", "nicaragua", "panama", "guatemala", "belice"];
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
            alert("no tenemos esa bandera de centroamerica");
            vaciar()
        }

    } else {
        alert("por favor no digite valores numericos");
        vaciar()
    }
}
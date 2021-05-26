let vecImagenes = ['<img src="imagenes/img1.jpg" alt="" width="300px" height="300px" />',
        '<img src="imagenes/img2.jpg" alt="" width="300px" height="300px" />',
        '<img src="imagenes/img3.jpg" alt="" width="300px" height="300px" />',
        '<img src="imagenes/img4.jpg" alt="" width="300px" height="300px" />',
        '<img src="imagenes/img5.jpg" alt="" width="300px" height="300px" />',
        '<img src="imagenes/img6.jpg" alt="" width="300px" height="300px" />',
        '<img src="imagenes/img7.jpg" alt="" width="300px" height="300px" />',

    ],
    vecNombres = ["nissan", "bmw", "ford", "Vols", "explorer", "ferrari", "lambo"];
pos = 0, msg = "", i = 0, sigue = false;

function vaciar() {
    document.getElementById('n1').value = ""


}

function imagenes() {
    let textoImagenes = document.getElementById("n1").value;
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
            alert("no tenemos esa marca de vehiculos");
            vaciar()
        }

    } else {
        alert("por favor no digire valores numericos");
        vaciar()
    }
}
function cambiotam() {
    let imagen = document.querySelector("#imagen");
    if (imagen.className == "imagen") {
        imagen.className = "imagen grande"

    } else {
        imagen.className = "imagen"
    }
}
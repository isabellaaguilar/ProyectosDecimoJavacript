let imagen = document.querySelector("img");
(function () {
    imagen.addEventListener("mouseover", cambio);
    imagen.addEventListener("mouseout", cambio2);
})();

function cambio() {
    imagen.src = "imagenes/vocho.jpg";
}

function cambio2() {
    imagen.src = "imagenes/tuvefe.jpg"
}
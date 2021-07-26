(function () {

    let cont = 0,
        crono = document.querySelector(".crono");

    function intervalo() {
        cont++
        // crono.innerHTML = cont;
        img = img.src = `imagenes/${cont}.jpg`
        crono.innerHTML = "<img src=" + img + ">";

        // aqui se refiere a que lo imprime en crono que es la caja amarilla en la pagina
        if (cont > 4) {
            // clearInterval(interval);
            // aqui mata la funcion cuando llegue a 10
        }
    }
    let interval = setInterval(intervalo, 1000)

})();
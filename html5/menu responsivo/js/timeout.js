(function () {

    let cont = 0,
        crono = document.querySelector(".crono");

    function timeout() {
        cont++
        crono.innerHTML = cont;
    }
    setTimeout(timeout, 5000)

})();
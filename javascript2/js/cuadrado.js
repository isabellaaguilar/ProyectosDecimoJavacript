function cuadrado() {
    let resultado = 0,
        result = 0,
        monto = 0;
    resultado = document.getElementById("res");
    monto = document.getElementById("n1");
    monto.style.background = "#a9a955";
    result = monto.value * monto.value;
    resultado.style.color = "#00ff55";
    resultado.innerHTML = result;

}
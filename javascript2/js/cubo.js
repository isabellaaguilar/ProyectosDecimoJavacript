function cubo() {
    let resultado = 0,
        result = 0,
        monto = 0;
    resultado = document.getElementById("res");
    monto = document.getElementById("n1");
    monto.style.background = "#FF33E9";
    result = monto.value * monto.value * monto.value;
    resultado.style.color = "#FF0000 ";
    resultado.innerHTML = result;

}
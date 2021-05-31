let cifra = "",
    r = 0;
//solo puedo cambiarle el nombre a los input con boton
function btnPrimero(num1) {
    document.getElementById('n1').value = cifra + num1;
    cifra = document.getElementById('n1').value;
    r = Number(r) + Number(cifra);
    document.getElementById("uno").value = "usado";
}

function btnsegundo(num2) {
    document.getElementById('n1').value = cifra + num2;
    cifra = document.getElementById('n1').value;
    r = Number(r) + Number(cifra);
    document.getElementById("dos").value = "usado";
}

function procesar() {
    document.getElementById("res").innerHTML = r;
}
let vecImagenes = ['<img src="imagenes/case.jpg" height="300" width="300">',
        '<img src="imagenes/mouse.png" height="300" width="300">',
        '<img src="imagenes/mousepad.jpg" height="300" width="300">',
        '<img src="imagenes/hdd.png" height="300" width="300">',
        '<img src="imagenes/teclado.jpg" height="300" width="300">',
        '<img src="imagenes/monitor.jpg" height="300" width="300">',
        '<img src="imagenes/escritorio.jpg" height="300" width="300">',
        '<img src="imagenes/keycaps.jpg" height="300" width="300">',
        '<img src="imagenes/gpu.jpg" height="300" width="300">',
        '<img src="imagenes/headset.jpg" height="300" width="300">',
    ],
    msg = "",
    a = 0,
    canti = document.querySelectorAll(".cnt1");

function carrito(pos, precio, esto) {

    a = a + (precio * canti[pos].value);
    msg = msg + vecImagenes[pos];
    esto.value = "Adquirido";
    esto.disabled = true;
}

function comprar() {
    document.getElementById("imgpro").innerHTML = "Estos son tus productos:<br>" + msg;

    document.getElementById("montopro").innerHTML = "Tienes que pagar " + a + " colones"
}

function cancelar() {
    let btnCancelar = document.querySelectorAll("input"),
        i = 0
    for (i = 0; i < btnCancelar.length; i++) {
        if (btnCancelar[i].disabled = true) {
            btnCancelar[i].value = "Añadir al carrito";
            btnCancelar[i].disabled = false;
            msg = "";
            a = 0;
        }
    }
    alert("Los productos se han cancelado");
}
let contador=true,
    nav=document.querySelector('nav'),
    bt=document.querySelector('.bt_menu'),
    menu=document.querySelector(".fas");
    menu.addEventListener('click',menuresponsive);
    //bt.addEventListener('click',menuresponsive);
    function menuresponsive(){
        if(contador){
 	    nav.style.transition="0.7s";
            nav.style.left="0";
            contador=false;
        }
        else{
            contador=true;
 	    nav.style.transition="0.7s";
            nav.style.left="-100%";
        }
    }

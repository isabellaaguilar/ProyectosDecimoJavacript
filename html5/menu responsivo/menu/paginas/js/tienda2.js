let vecImagenes = ["<img src='imagenes/img1.jpg'/>",
        "<img src='imagenes/img2.jpg'/>",
        "<img src='imagenes/img3.jpg'/>",
        "<img src='imagenes/img4.jpg'/>",
        "<img src='imagenes/img5.jpg'/>",
        "<img src='imagenes/img6.jpg'/>",
        "<img src='imagenes/img7.jpg'/>",
        "<img src='imagenes/img8.jpg'/>",
        "<img src='imagenes/img9.jpg'/>",
        "<img src='imagenes/img10.jpg'/>",
        "<img src = 'imagenes/vocho.jpg'/>",
        "<img src = 'imagenes/img11.jpg'/>",

    ],

    msg = "";
acu = 0;
canti = document.querySelectorAll(".cnt1");

function carrito(pos, precio, esto) {
    acu = acu + (precio * canti[pos].value);
    msg = msg + vecImagenes[pos];
    esto.value = "Adquirido";
    esto.disabled = true;
}

function comprar() {
    document.getElementById("imgProductos").innerHTML = "<h1>Estos son tus productos:</h1> <br> <br>" + msg;
    document.getElementById("montoProductos").innerHTML = "<br> <br> <h1>Tienes que pagar</h1> " + "<h1> $" + acu + " colones </h1>";
}

function cancelar() {
    let btncancelar = document.querySelectorAll("input"),
        i = 0;
    for (i = 0; i < btncancelar.length; i++) {
        if (btncancelar[i].disabled == true) {
            btncancelar[i].disabled = false;
            btncancelar[i].value = "Añadir al carrito"
        }
    }
    msg = ""
    acu = 0
    document.getElementById("imgProductos").innerHTML = "";
    document.getElementById("montoProductos").innerHTML = "";
    document.getElementById("cancelacion").style.display = "block"
    setTimeout(() => {
        document.getElementById("cancelacion").style.display = "none"
    }, 3000);

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

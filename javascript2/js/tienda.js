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

    ],
    msg = "";
acu = 0;

function carrito(pos, precio, esto) {
    acu = acu + precio;
    msg = msg + vecImagenes[pos]
    esto.value = "Adquirido";
    esto.disabled = true;
}

function comprar() {
    document.getElementById("imgProductos").innerHTML = "<h1>Estos son tus productos:</h1> <br> <br>" + msg;
    document.getElementById("montoProductos").innerHTML = "<br> <br> <h1>Tienes que pagar</h1> " + "<h1> $" + acu + " colones </h1>";
}
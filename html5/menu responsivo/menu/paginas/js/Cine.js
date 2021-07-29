let vecImagenes=['<img src="imagenes/butaca.jpg" height="340" width="450">',
                '<img src="imagenes/butaca.jpg" height="340" width="450">',
                '<img src="imagenes/butaca.jpg" height="340" width="450">',
                '<img src="imagenes/butaca.jpg" height="340" width="450">',
                '<img src="imagenes/butaca.jpg" height="340" width="450">',
                '<img src="imagenes/butaca.jpg" height="340" width="450">',
                '<img src="imagenes/butaca.jpg" height="340" width="450">',
                '<img src="imagenes/butaca.jpg" height="340" width="450">',
                '<img src="imagenes/butaca.jpg" height="340" width="450">',
                '<img src="imagenes/butaca.jpg" height="340" width="450">',
                '<img src="imagenes/butaca.jpg" height="340" width="450">',
                '<img src="imagenes/butaca.jpg" height="340" width="450">',
                ],
                msg="",a=0;
function carrito(pos,precio,esto){
    a=a+precio;
    msg=msg+vecImagenes[pos];
    esto.value="Adquirido";
    esto.disabled=true;
}
function comprar(){
    document.getElementById("n1").innerHTML="Productos comprados:<br>"+msg;
    document.getElementById("n2").innerHTML="El monto a pagar es de "+a+" colones"
}
function cancelar(){
    let btnCancelar=document.querySelectorAll("input"),
        i=0;
        for (i=0; i < btnCancelar.length; i++){
            if(btnCancelar[i].disabled = true){
                btnCancelar[i].value="Añadir al carrito";
                btnCancelar[i].disabled=false;
                msg="";
                a=0;
            
            }

        }
        alert("Las compras se han cancelado");
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

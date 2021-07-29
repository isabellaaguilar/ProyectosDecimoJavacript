let td = document.querySelectorAll("td"),
    banderas = [],
    discrimacion = []


function darRandom(max, min) {
    let random = Math.round(Math.random() * (max - 1) + min); //Aqui obtengo el random
    let estaRepetido = discrimacion.includes(random) /* Includes basicamente pregunta si un elemento esta dentro de una lista */
    //En esta linea hago un algorimo recursivo para validar cuando un elemento esta repetido 
    if (estaRepetido) {
        // Aqui vuelvo a llamar a la funcion recursivamente cuando se cumple la condicion 
        return darRandom(max, min)
    } else {
        // Si no unicamente return el numero random de arriba
        return random;
    }
}

function imagenes() {
    for (let i = 0; i < td.length; i++) {
        random = darRandom(8, 1) /* Llamo a obtener random*/
        discrimacion.push(random) /*Inserto dentro de la lista de discriminacion*/
        banderas.push(`torneo/${random}.jpg`); /*Agrego el elemento*/
        td[i].innerHTML = `<img src="${banderas[i]}">`; /* Agrego la imagen al html*/
    }
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

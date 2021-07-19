// (function () {
//     let boton = document.querySelector('#boton')
//     boton.addEventListener("click", saludo)
//     //  si en vez del click ponemos mouseover cuando nos posicionesmos en el boton sin precionarlo se ejecuta la funcion
//     // y si lo hago con el mouse out cuando me quite de el boton ejecuta la funcion
//     // si coloco los parentesis de la funcion saludo habre la funcion de una vez

//     function saludo() {
//         alert("hola a todos")
//     }
// })();

let caja = document.getElementById("texto");
caja.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        alert("diste enter");
        contenido();
    }
});

function contenido() {
    alert(caja.value)
}
let i = 0,
    msj = "";

function vaciar(elemento) {

    elemento.value = ""



    alert("llene todas las x")
}





function formulario() {
    // obtener nombre
    let nombre = document.getElementById("nombre").value;
    alert(nombre)
    //obtener apellido
    let apellido = document.querySelector("#apellido").value;
    alert(apellido)
    //genero
    let genero = document.getElementsByClassName("sexo");
    console.log(genero);
    for (i = 0; i < genero.length; i++) {
        if (genero[i].checked == true) {
            msj = genero[i].value;
        }
    }
    alert(msj)
    //correo
    let correo = document.querySelector("#correo").value;
    alert(correo)
    //obtener sitio web
    let sitio = document.querySelector("#sitioweb").value;
    alert(sitio)

    //conocimientos previos
    let puntaje = document.querySelector("#puntaje").value;
    alert(puntaje + "0 % ");

    //obtener cantidad
    let cantidad = document.querySelector("#cantidad").value;
    if (cantidad.value > 5 || cantidad.value < 1) {
        vaciar(cantidad)
    } else
        alert(cantidad.value);


    //obtener turno
    let turno = document.getElementById("turno").value
    alert(turno);


    //obtener seleccion del curso 
    let seleccion = document.getElementById("propuesta").value
    alert(seleccion);

}
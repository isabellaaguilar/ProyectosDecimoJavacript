let i = 0,
    msj = "",
    msj1 = "",
    tabla = document.querySelector("table");
td = document.querySelectorAll("td");
console.log(tabla);

function vaciar(elemento) {
    elemento.value = "";
    alert("Por favor llene los datos correctamente")
}

function formulario() {
    tabla.style.display = "table"
    //Obtener nombre
    let nombre = document.getElementById("nombre").value;
    if (!isNaN(nombre.value)) {
        vaciar(nombre);
    } else
        td[2].innerHTML = nombre.value;

    //Obtener apellido
    let apellido = document.querySelector("#apellido").value;
    td[4].innerHTML = apellido;


    //Obtener genero
    let genero = document.getElementsByClassName("sexo");
    console.log(genero);
    for (i = 0; i < genero.length; i++) {
        if (genero[i].checked == true) {
            msj = genero[i].value;
        }
    }
    td[6].innerHTML = msj;
    //Obtener correo electronico
    let correo = document.querySelector("#correo").value;
    td[8].innerHTML = correo;
    //Obtener sitio web
    let sitio = document.querySelector("#sitioweb").value;
    td[10].innerHTML = sitio;
    //Conocimientos previos
    let puntaje = document.querySelector("#puntaje").value;
    //alert(puntaje+"0%");
    td[4].innerHTML = puntaje;
    //Obtener cantidad
    let cantidad = document.querySelector("#cantidad").value;
    if (cantidad.value > 5 || cantidad.value < 1) {
        vaciar(cantidad);
    } else
        td[14].innerHTML = cantidad;
    //Obtener turno
    let turno = document.getElementById("turno").value
    td[16].innerHTML = turno;
    //Obtener seleccion del curso
    let seleccion = document.getElementById("propuesta").value
    td[18].innerHTML = seleccion;
    //Obtener cursos
    let chek = document.getElementsByName("chek");
    for (i = 0; i < chek.length; i++) {
        if (chek[i].checked == true) {
            msj1 = msj1 + ' ' + chek[i].value;
        }
    }
    td[20].innerHTML = chek;
    //obtener el color
    let color = document.getElementById("color").value;
    td[22].innerHTML = "<input type='color' value" + color + ">";

    //obtener calendario
    let calendario = document.querySelector("#fecha1").value;
    td[24].innerHTML = calendario;
    let fecha2 = document.querySelector("#fecha2").value;
    td[26].innerHTML = fecha2;
    let fecha3 = document.querySelector("#fecha3").value;
    td[28].innerHTML = fecha3;
    let fecha4 = document.querySelector("#fecha4").value;
    td[30].innerHTML = fecha4;



    //obtener usuario
    let usuario = document.querySelector("#usuario").value;
    td[32].innerHTML = usuario;

    //obtener contraseña
    let contra = document.querySelector("#contra").value;
    td[34].innerHTML = contra;

}
let i = 0,
    msj = "",
    msj1 = "",
    tabla = document.querySelector("table");

function vaciar(elemento) {
    elemento.value = "";
    alert("Por favor llene los datos correctamente")
}


function formulario() {
    tabla.style.display = "table"
    //Obtener nombre
    const nombre = document.getElementById("nombre").value;
    if (!isNaN(nombre.value)) {
        vaciar(nombre);
    } else
        document.getElementById("nombreResultado").innerHTML = nombre;

    //Obtener apellido
    let apellido = document.querySelector("#apellido").value;
    document.getElementById("apellidoResultado").innerHTML = apellido;

    //Obtener genero

    let genero = document.getElementsByClassName("sexo");
    for (i = 0; i < genero.length; i++) {
        if (genero[i].checked == true) {
            msj = genero[i].value;
        }
    }

    document.getElementById("generoResultado").innerHTML = msj;
    //Experiencia 
    let puntaje = document.getElementById("puntaje").value;
    //alert(puntaje+"0%");
    document.getElementById("experienciaDeCocinaResultado").innerHTML = puntaje;

    //Obtener turno
    let provincia = document.getElementById("provincia").value

    document.getElementById("ProvinciaResultado").innerHTML = provincia;

    //Obtener especialidades
    var array = document.getElementById("contenedor-checkbox").children;
    let acumulador = [];
    // acumula los seleccionados
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.checked) {
            // el if valia si esta seleccionado
            switch (element.value) {
                case "carnes":
                    acumulador.push("carne")
                    // el push para meter elementos a la caja vacia
                    break;
                case "pastas":
                    acumulador.push("pastas")
                    break;
                case "comidas rapidas":
                    acumulador.push("comidas rapidas")
                    break;
                case "arroz":
                    acumulador.push("arroz")
                    break;
                case "mariscos":
                    acumulador.push("mariscos")
                    break;
                    // el vector recorre a los hijos
                    // el array almacena los valores de cuando se selecciona
            }
        }
    }
    let especialidad = acumulador
    document.getElementById("EspecialidadesResultado").innerHTML = especialidad

    //obtener el color
    let color = document.getElementById("color").value;
    document.getElementById("ColorPreferidoResultado").innerHTML = "<input type='color' value=" + color + ">";

    //Fecha de la entrevista

    let fecha2 = document.querySelector("#fecha2").value;
    console.log(fecha2)
    document.getElementById("FechaDeEntrevista").innerHTML = "La fecha de entrevista es : " + fecha2.replace("T", " y las horas son: ");
    // esto es para que la t no aparesca
}
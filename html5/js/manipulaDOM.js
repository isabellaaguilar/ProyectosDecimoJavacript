let elementoP = document.querySelectorAll("p"),
    elemento = document.createElement("h2"),
    contenido = document.createTextNode("este es nuestro subtitulo");

elemento.appendChild(contenido);
// adujente contenido
elemento.setAttribute("align", "center");
document.getElementById("subtitulo").appendChild(elemento);

elementoP[0].addEventListener("click", cambio)

function cambio() {
    alert("hola soy el parrafo uno");
    elementoP[0].className = "diferente";
    // en este diferente esta llamando al css al coso diferente que tiene un background verde y por eso al precionarlo el estilo del parrafo cambia
}
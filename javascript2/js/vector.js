let nombre = ["jose", "mario", "rodrigo"]

function vector() {

    let num = Math.round(Math.random() * (2 - 0) + 0);
    // alert(num);
    document.getElementById("res").innerHTML = nombre[num];

}
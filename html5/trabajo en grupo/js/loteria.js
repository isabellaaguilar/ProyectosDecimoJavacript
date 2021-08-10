function siguiente(){
    var resultado = Math.round (Math.random ()*(100)+1);
    return resultado
}
function vaciar(){
    var resultado = document.getElementById("resultado");

    caja.value="";
    resultado.innerHTML="";
}
function verifica(){
var caja=document.getElementById("caja").value;


let condicion = caja=="domingo" || caja=="martes" || caja=="viernes";

if(condicion){
     for (let index = 0; index < 3; index++) {
        var numero = siguiente()  
        resultado.innerHTML = resultado.innerHTML + `${numero} `
    } 
}else{
    alert("No se juega lotería ese día.")
    vaciar();
}
}
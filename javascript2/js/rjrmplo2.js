function main() {
    let vecMensajeX = [2, 3, 4, 5, 3, 5];
    let vecMensajeY = [5, 7, 4, 43, 6, 3];
    obtenerCovarianza(vecMensajeX, vecMensajeY);
    obtenerPromedio(vecMensajeX);
}

function obtenerCovarianza(vecX, vecY) {
    sumatoriaCovarianza = 0;
    for (let i = 0; i < vecX.length; i++) {
        sumatoriaCovarianza = sumatoriaCovarianza + vecX[i] * vecY[i];
    }
    resultadosCovarianza = sumatoriaCovarianza / 6
    console.log(resultadosCovarianza.toFixed(2));
    return resultadosCovarianza;
}



function obtenerPromedio(vecRecibeMensajeX) {
    console.log(vecRecibeMensajeX)

}

main()
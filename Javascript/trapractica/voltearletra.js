const voltear = (palabra) => {
    let acum = "";

    for (let i = palabra.length - 1; i >= 0; i--) {
        const element = palabra[i];

        acum = acum + element;
    }
    return acum;
};

var palabraVolteada = voltear("holis");
console.log(palabraVolteada)
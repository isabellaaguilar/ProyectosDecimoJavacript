const multi = (numero) => {
    let acu = 1;
    for (let i = 1; i < numero; i++) {
        acu = acu * i;
    }

    return acu;
};

const suma = (numero) => {
    let acu = 1;
    for (let i = 1; i < numero; i++) {
        acu = acu + i;
    }

    return acu;
};


vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

vector.forEach(element => {
    resultado = suma(element)
    console.log(`${element}: ${resultado}`)
});

var quiereSuma = true

if (quiereSuma) {
    var z = suma(10);
    console.log(z);

} else {
    var x = multi(10);
    console.log(x);
}
// otro comentario
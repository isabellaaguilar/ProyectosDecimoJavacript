const filtradoVocal = (palabra) => {
    acum = "";
    for (let j = 0; j < palabra.length; j++) {
        var voca = palabra[j];

        if (voca == "a" || voca == "à" || voca == "à") {
            acum = acum + voca;
        }
        if (voca == "e" || voca == "é" || voca == "è") {
            acum = acum + voca;
        }
        if (voca == "i" || voca == "í" || voca == "ì") {
            acum = acum + voca;
        }
        if (voca == "o" || voca == "ó" || voca == "ò") {
            acum = acum + voca;
        }
        if (voca == "u" || voca == "ú" || voca == "ù") {
            acum = acum + voca;
        }
    }
    return acum;
}

var x = filtradoVocal("hola");
console.log(x);
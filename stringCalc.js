
function separation(string) {
    let separators = /[,\n]/;
    let listeStr = string.split(separators);
    let listeInt = listeStr.map(function(value) {
        return parseInt(value);
    });
    return listeInt;
}


function strCalc(string) {
    if (string === '') {
        return 0;
    }
    let liste = separation(string);
    let somme = 0;
    liste.forEach(number => {
        somme += number;
    });
    let retour = isNaN(somme) ? 0 : somme;
    return retour;
}


console.log(strCalc("10,\n2,5\n3"));
console.log(strCalc(""));
console.log(strCalc("7,4"));
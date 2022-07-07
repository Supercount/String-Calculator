
function separation(string) {
    let separators = changeSeparators(string);
    let stringToCut = string.slice(3+separators.length); 
    let listeStr = stringToCut.split(separators);
    let listeInt = listeStr.map(function(value) {
        return parseInt(value);
    });
    return listeInt;
}

function changeSeparators(string) {
    let pattern = "^//.*\n";
    let newSeparators;
    if (string.match(pattern)) {
        let recup = string.match(pattern)[0].slice(2,-1);
        newSeparators = recup.split('');
    } else {
        newSeparators = /[,\n]/;
    }
    return newSeparators;
}

function addition(liste) {
    let negative = false;
    let listeNeg = [];
    let somme = 0;
    liste.forEach(number => {
        if (number < 0) {
            negative = true;
            listeNeg.push(number);
        }
        somme += number;
    });
    if (negative) {
        throw new Error("negatives not allowed : " + listeNeg);
    }
    return isNaN(somme) ? 0 : somme;
}

function Add(string) {
    if (string === '') {
        return 0;
    }
    let liste = separation(string);
    return addition(liste);
}

console.log(Add("//g\n10g-2g5g3g-5"));
console.log(Add(""));
console.log(Add("7,4"));

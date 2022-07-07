
function retraitLimiters(string) {
    let toCut = string.split('\n');
    let stringToCut = "";
    for (let i = 1; i < toCut.length; i++) {
        stringToCut += toCut[i];
    }
    return stringToCut;
}

function changeSeparators(string) {
    let pattern = "^//.*\n";
    let newSeparators = "";
    if (string.match(pattern)) {
        let recup = string.match(pattern)[0].slice(2,-1);
        if (recup.match(/^\[/)) {
            let list = recup.split('[');
            list.forEach(value => {
                let ajout = value.slice(0,-1);
                newSeparators = newSeparators.concat("|"+ajout);
            });
            newSeparators = newSeparators.slice(2);
        } else {
            newSeparators = recup;
        }
    } else {
        newSeparators = "[,\n]";
    }
    return newSeparators;
}

function separation(string) {
    let separators = changeSeparators(string);
    let listeStr;
    let regex = new RegExp(separators);
    if (string.match(/^\/\//)) {
        let stringToCut = retraitLimiters(string);
        listeStr = stringToCut.split(regex);
    } else {
        listeStr = string.split(regex);
    }
    let listeInt = listeStr.map(function(value) {
        return parseInt(value);
    });
    return listeInt;
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
        if (number >= 1000) {
            number = 0;
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

console.log(Add("//[gra][df]\n10gra102gra5df3gra5"));
console.log(Add("84,3\n6"));
console.log(Add("//fa\n7fa4"));

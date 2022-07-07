

function strCalc(string) {
    if (string === '') {
        return 0;
    }
    let listeStr = string.split(',');
    let listeInt = listeStr.map(value => parseInt(value));

    let somme =0;
    listeInt.forEach(number => {
        somme += number;
    });
    
    return somme;
}


console.log(strCalc("10,2,5,3"));
console.log(strCalc(""));
console.log(strCalc("7,4"));
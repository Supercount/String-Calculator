

function strCalc(string) {
    if (string === '') {
        return 0;
    }
    let a = string.split(',')[0];
    let b = string.split(',')[1];
    if (b == null) {
        return parseInt(a);
    } 
    
    return parseInt(a)+parseInt(b);
}


console.log(strCalc("10,2"));
console.log(strCalc(""));
console.log(strCalc("7"));
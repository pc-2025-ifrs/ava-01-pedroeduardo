function mmc(num1, num2){
    if(num1 === undefined || num2 === undefined){
        return ('É necessário passar dois parâmetros.');
    }
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return ('Os parâmetros devem ser números.');
    }
    if(arguments.length > 2){
        return ('É necessário passar apenas dois parâmetros.');
    }
    if(parseInt(num1)!== num1 || parseInt(num2)!== num2){
        return ('Os parâmetros devem ser inteiros.');
    }
    let n1 = Math.abs(num1);
    let n2 = Math.abs(num2);
    let maior = Math.max(n1,n2);
    let resultado = maior;
    while(resultado%n1 !== 0 || resultado%n2 !== 0){
        resultado+=maior;
    }
    return resultado;
}
console.log(mmc())
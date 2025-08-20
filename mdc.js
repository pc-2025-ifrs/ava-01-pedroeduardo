function mdc(num1, num2){
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
    let menor = Math.min(n1,n2);
    let resultado = 1;
    for(let i = 1; i <= menor; i++){
        if(n1%i === 0 && n2%i === 0){
            resultado = i;
        }
    }
    return resultado;
}
console.log(mdc(20,30))
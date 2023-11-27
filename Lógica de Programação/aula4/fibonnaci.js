const fibonnaci = (n) =>{
    const resultado = [0,1];
    const teste = [];

    for (let i = 2; i<= n; i++){
        const a = resultado[i-1];
        const b = resultado[i-2];
        resultado.push(a+b);
        console.log('a: ', a, "\n");
    }
}

const n = 10;
const sequenciaFibonnaci = fibonnaci(n)
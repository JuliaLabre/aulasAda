//Valor Absoluto / módulo

const valor1 = Math.abs(5.5);
//console.log(valor1);

const valorNegativo =-5;
const valorPositivo = 10;

const resultadoNegativo = Math.abs(valorNegativo);
const resultadoPositivo = Math.abs(valorPositivo);

//console.log('Valor absoluto de ' + valorNegativo + ' é ' + resultadoNegativo);
//console.log('Valor absoluto de ' + valorPositivo + ' é ' + resultadoPositivo);

/* é usado quando precisa remover algum sinal negativo */

//Precisão - manipulando apenas o numero da esquerda
const valor3 = 5.3 
const valor4 = 9.8
const valor5 = -2.5

const teto1 = Math.ceil(valor3); // 6
const teto2 = Math.ceil(valor4) // 10
const teto3 = Math.ceil(valor5) // -2

//console.log('valor 1 = '+ teto1 + ' valor 2 = ' + teto2 +' valor 3 = ' + teto3 )


const valor6 = 42;
const valor7 = 2;
const valor8 = 10;
const valor9 = 90;

const maiorNumero = Math.max(valor6,valor7,valor8,valor9);
const menorNumero = Math.min(valor6,valor7,valor8,valor9);

console.log('Maior = '+ maiorNumero + ' Menor = ' + menorNumero)

//Potencia e raiz

let base = 2;
let expoente = 3;

let resultadoPOW = Math.pow(base,expoente);

console.log('A potencia é ' +resultadoPOW)

let qualEONumero = 16;
let raizQuadrada = Math.sqrt(qualEONumero)

console.log('A raiz quadrada é ' + raizQuadrada)

//Valor Randomico

const valorRandomico = Math.random();


console.log('Valor Randomico é ' + valorRandomico);


//Funçoes trigonometrixas e PI

const valorDePi = Math.PI;
console.log('PI = '+valorDePi);

//Seno do angulo em radianos
let qualEAnguloQVoveQuer = 80;
let anguloRadiano = qualEAnguloQVoveQuer * (Math.PI / 180);
let senoDoAngulo = Math.sin(anguloRadiano);

console.log('O seno do de ' + qualEAnguloQVoveQuer + " graus é " + senoDoAngulo);

//Tangente
let anguloGraus = 45;
let 





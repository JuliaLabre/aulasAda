let numero = "42";
numero = Number(numero);
numero = String(numero);
numero = Boolean(numero);

// Daria NaN - são seria o melhor nesse caso
numero = parseInt(numero) + 1;
console.log(numero)

//Forçar tipagem
let valor = 1;
let forcarBoleano = !!valor;

let resultaFloat = parseInt(1.2);
console.log(typeof resultaFloat);

resultaFloat = parseFloat(1.2);
console.log(typeof resultaFloat);

//Vou usar o Parse em um contexto que eu não posso controlar


//For com .length em uma string - pode ser usada em uma palavra cruzada


//replace

//concat

/*precisão - math.floor - arredonda pra baixo
math.round - arredonda pra cima <= .5
*/
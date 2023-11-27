/* var vai ser usado com variaveis globais - não dá pra simplesmente achar que o var morreu
var permite fazer conceitos globais
hoisting - o problema do var 
~Contexto~ entender bem o que é

procurar sobre this

https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong
https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting
*/

// Lógica boolean - Condicional

if(true){ // Contexto condicional
    //variavel título
    var titulo = "Aula"; // em um contexto do tipo global
}

console.log(titulo)

/*
Declarar variaveis dentro de funções, pra evitar erros futuros

encapsulamento

buscar criar ambientes controlados - Contexto controlado
*/

const ExibirTestando = () => { //amarrar contexto (acho que é amarrar)
if(true){
    const titulo2 = "Testando";
    () =>{} //prototype
}

}


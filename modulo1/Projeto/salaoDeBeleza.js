function receberNome() {
    const cliente = prompt("Qual o seu nome?");
    return cliente
}
receberNome()

function saudacao(cliente) {
    alert("Olá " + cliente + " seja bem vindo(a)")
}
saudacao(cliente)
function escolherProcedimento(){
    let procedimento = prompt("Digite o número da opção desejada: \n 1 - Corte \n 2 - Escova")
    if (procedimento === 1) {


    } else if(procedimento === 2){

    } else {
        procedimento = prompt("Coloque apenas o número da opção que deseja: \n 1 - Corte \n 2 - Escova")

    }
}



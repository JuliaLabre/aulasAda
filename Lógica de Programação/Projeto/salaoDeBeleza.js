// Iniciei a varivel fora do escopo porque quero usa-la depois.

let cliente = "";
function receberNome() {
    cliente = prompt("Qual o seu nome?");
    while (cliente.length == 0) {
        cliente = prompt("Digite seu nome para iniciar")
    }
    if (cliente.length != 0) {
        alert("Olá " + cliente + " seja bem vindo(a)")
    }

    return cliente
}
receberNome()
//Salvei o nome do cliente em uma constante
const clienteAtivo = cliente;
let realizarPagamento = false;
let procedimento;
let horarioDoProcedimento = "";
function escolherProcedimento() {
    do {
        procedimento = Number(prompt(clienteAtivo + " digite o número da opção desejada: \n 1 - Corte \n 2 - Escova \n 3- Corte e Escova"))
    }
    while (isNaN(procedimento) || (procedimento < 1) || (procedimento > 3)) {
    }

    switch (procedimento) {
        case 1:
            horario = confirm("O horário das 14h está bom para você ?");
            if (horario) {
                let confirmacao1 = confirm("Realize o pagamento para iniciar");
                realizarPagamento = true;
                horarioDoProcedimento = "14h";
            } else {
                horario2 = confirm("O horário das 16h está bom para você ?");
                horarioDoProcedimento = "16h";
                if (horario2) {
                    let confirmacao = confirm("Realize o pagamento para iniciar");
                    realizarPagamento = true;
                } else {
                    alert("Agradecemos seu contato, até breve.");
                }
            }
            break;

        case 2:
            horario = confirm("O horário das 14h está bom para você ?");
            if (horario) {
                let confirmacao1 = confirm("Realize o pagamento para iniciar");
                realizarPagamento = true;
                horarioDoProcedimento = "14h";
            } else {
                horario2 = confirm("O horário das 16h está bom para você ?");
                horarioDoProcedimento = "16h";
                if (horario2) {
                    let confirmacao = confirm("Realize o pagamento para iniciar");
                    realizarPagamento = true;
                } else {
                    alert("Agradecemos seu contato, até breve.");
                }
            }
            break;

        case 3:
            horario = confirm("O horário das 14h está bom para você ?");
            if (horario) {
                let confirmacao1 = confirm("Realize o pagamento para iniciar");
                realizarPagamento = true;
                horarioDoProcedimento = "14h";
            } else {
                horario2 = confirm("O horário das 16h está bom para você ?");
                horarioDoProcedimento = "16h";
                if (horario2) {
                    let confirmacao = confirm("Realize o pagamento para iniciar");
                    realizarPagamento = true;
                } else {
                    alert("Agradecemos seu contato, até breve.");
                }
            }
            break;
    }

    return [realizarPagamento, procedimento, horarioDoProcedimento];
}
/*
if ((procedimento === 1) || (procedimento === 2) || (procedimento === 3)) {
    let horario = confirm("O horário das 14h está bom para você ?")
    if (horario === true) {
        let confirmacao1 = confirm("Realize o pagamento para iniciar")
        realizarPagamento = true
        horarioDoProcedimento = "14h"
        
    } else {
        horario = confirm("O horário das 16h está bom para você ?")
        realizarPagamento = true
    } if (horario === true) {
        let confirmacao = confirm("Realize o pagamento para iniciar ?")
        realizarPagamento = true
    } else {
        alert("Agradecemos seu contato, até breve.")
    }
return realizarPagamento, procedimento
}*/

escolherProcedimento()
const irParaPagamento = realizarPagamento;
const procedimentoEscolhido = procedimento;
const horarioEscolhido = horarioDoProcedimento
let valorDoProcedimento;
console.log(procedimento)

function valorAReceber(procedimentoEscolhido) {
    switch (procedimentoEscolhido) {
        case 1: valorDoProcedimento = "R$40,00"
            break
        case 2: valorDoProcedimento = "R$45,00"
            break
        case 3: valorDoProcedimento = "R$80,00"
            break
    }
    return valorDoProcedimento
}


valorAReceber(procedimentoEscolhido)
const valor = valorDoProcedimento;


function pagamento() {
    if (realizarPagamento === true) {
        let pagamentoFeito = confirm(clienteAtivo + " seu procedimento foi realizado as " + horarioEscolhido + "\n" + "Realize o Pagamento no valor de:" + valor)
    } while (pagamentoFeito != true){}
        //Enquanto o pagamento não for confirmado, aparece a tela pra confirmar o valor. Após recebido agradecer a preferencia e encerrar.
        if (pagamentoFeito === true) {
            alert("Agradecemos a preferência, volte sempre!")
        } else {
            confirmacaoPagamento = confirm(clienteAtivo + " seu procedimento foi realizado as " + horarioEscolhido + "\n" + "Realize o Pagamento no valor de:" + valor + "\n" + "Encerraremos assim que recebermos os pagamento")
        }
}

pagamento()

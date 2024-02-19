let cliente = "";

function receberNome() {
    cliente = prompt("Qual é o seu nome?");
    while (cliente.length === 0) {
        cliente = prompt("Digite seu nome para iniciar");
    }
    if (cliente.length !== 0) {
        alert("Olá " + cliente + ", seja bem-vindo(a)");
    }

    return cliente;
}

receberNome();

const clienteAtivo = cliente;
let realizarPagamento = false;
let procedimento;
let horarioDoProcedimento = "";

function escolherProcedimento() {
    do {
        procedimento = Number(prompt(clienteAtivo + " digite o número da opção desejada: \n 1 - Corte \n 2 - Escova \n 3 - Corte e Escova"));
    } while (isNaN(procedimento) || procedimento < 1 || procedimento > 3);

    switch (procedimento) {
        case 1:
        case 2:
        case 3:
            let horario = confirm("O horário das 14h está bom para você?");
            if (horario) {
                horarioDoProcedimento = "14h";
            } else {
                horario = confirm("O horário das 16h está bom para você?");
                horarioDoProcedimento = "16h";
            }
            if (horario) {
                realizarPagamento = true;
            } else {
                alert("Agradecemos seu contato, até breve.");
            }
            break;
    }
}

escolherProcedimento();

const irParaPagamento = realizarPagamento;
const procedimentoEscolhido = procedimento;
const horarioEscolhido = horarioDoProcedimento;

function valorAReceber(procedimentoEscolhido) {
    switch (procedimentoEscolhido) {
        case 1:
            return "R$40,00";
        case 2:
            return "R$45,00";
        case 3:
            return "R$80,00";
    }
}

const valor = valorAReceber(procedimentoEscolhido);

function pagamento() {
    if (realizarPagamento) {
        const pagamentoFeito = confirm(clienteAtivo + " ,seu procedimento está marcado às " + horarioEscolhido + "\n" + "Realize o pagamento no valor de " + valor);
        if (pagamentoFeito) {
            alert(clienteAtivo + " seu procedimento está confirmado e começará no horário marcado" + "\n" +"Agradecemos a preferência, volte sempre!");
        } else {
            alert(clienteAtivo + " ,seu procedimento está marcado às " + horarioEscolhido + "\n" + "Realize o pagamento no valor de " + valor + "\n" + "Começaremos assim que recebermos o pagamento");
        }
    }
}

pagamento();

export abstract class SolicitacaoEmprestimo {
protected id: number;
protected nome: string;
protected idade: number;
protected valorEmprestimo: number;
protected numeroParcelas: number;
protected rendaMensal:number;

}

export class emprestimoPessoal extends SolicitacaoEmprestimo{

}

export class emprestimoAutomovel extends SolicitacaoEmprestimo{
    protected habilitacao: boolean;
}

export class emprestimoEstudantil extends SolicitacaoEmprestimo{
    protected graduando : boolean;
}
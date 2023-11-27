export default class Pessoa {
    //Atributos, informações, dados, propriedades
    //exclamação serve para falar que não quer declarar nada na criação
    //private serve para proteger os dados, ele não vai permitir acessar de qualquer chamada
    private id!:number; 
    nome!:string;
    genero!:string;
    cpf!:string;
    data_nascimento!:string;
    email!:string;
    telefone!:string;
    endereco!:string;

    cadastrar(
        id!:number; 
        nome!:string;
        genero!:string;
        cpf!:string;
        data_nascimento!:string;
        email!:string;
        telefone!:string;
        endereco!:string;){
    }

    excluir(id:number){
        console.log('Pessoa excluída ${this.nome}')
    }
}
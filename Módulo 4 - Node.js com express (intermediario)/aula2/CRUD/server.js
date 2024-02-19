import Express from "express";
const server = Express();
const port = 3000;
//recurso sempre no plural - seria alunos

//Julia, Icaro, Pedro Augusto e Gabriel Mendes
let db = [];
class Aluno {
    constructor(id, nome, curso) {
      this.id = id;
      this.nome = nome;
      this.curso = curso;
    }
  }

server.get("/", (req, res) => {
    res.send('Servidor conectado')
});

server.post("/alunos", (req, res) => {
    let aluno = new Aluno(req.body.id, req.body.nome, req.body.curso)
    db.push(aluno)
    console.log(aluno)
    const sts = 200;
    res.status(sts).json({
        menssagem: "Aluno criado",
        statusDeConexao: sts
    })
});

server.put("/alunos/:id", (req, res) => {
    const id = req.params.id
    const aluno = req.body
    let i = db.findIndex((item) => { item.id === aluno.id})
});

server.listen(port);


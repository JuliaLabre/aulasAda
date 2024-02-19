import express from 'express';

const server = express()
server.use(express.json());


class Aluno {
    constructor(id, nome, curso){
        this.id = id;
        this.nome = nome;
        this.curso = curso;
    }
}

let db = [new Aluno(1, "Zé", "Maria"),];
const port = 3000;

server.get('/', (req, res) => {
    res.status(200).send('Servidor conectado!')
} );


server.get('/alunos', (req, res) => {
    
 (db.length === 0)? res.status(200).send('Nenhum item salvo') : res.status(200).json(db)
    
})

server.get('/alunos/:id', (req, res) => {
    
    const indice = db.findIndex(aluno =>  aluno.id === parseInt(req.params.id));

    if(indice === -1) { res.status(404).send('O aluno especificado não foi encontrado.') }

    res.status(200).json(db[indice])
       
   })

server.post('/alunos', (req, res) => {
    let objeto = req.body
    console.log(objeto);
    const aluno = new Aluno(objeto.id, objeto.nome, objeto.curso);
    db.push(aluno)
    console.log(req.body);
    res.status(201).json({mensage: 'Novo aluno criado com sucesso',
    dados: aluno})
})

server.put('/alunos/:id', (req, res) => {
    
    const indice = db.findIndex(aluno =>  aluno.id === parseInt(req.params.id));

    if(indice === -1) { res.status(404).send('O aluno especificado não foi encontrado.') }
    
    db[indice] = {id: id, nome: req.body.nome, curso: req.body.curso};

    res.status(200).json({mensage: 'Informações atualizadas com sucesso!', dados: db[indice]}) 
})

server.delete('/alunos/:id', (req, res) =>{
    const indice = db.findIndex(item =>  item.id === parseInt(req.params.id))
    if(indice === -1) { res.status(404).send('O aluno especificado não foi encontrado.') }
    
    db.splice(indice, 1);
    res.status(200).json({mensage: 'Aluno deletado com sucesso!'})
})

server.listen(3000, () => {'Server up!'})
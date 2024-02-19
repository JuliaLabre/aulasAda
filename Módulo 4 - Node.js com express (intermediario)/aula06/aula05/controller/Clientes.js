const DatabaseSingleton = require("../config/ConfigDB");
const databaseInstance = new DatabaseSingleton();

async function inserirCliente(req, res) {
	let registro = req.body;
	databaseInstance.db.run(
		"INSERT INTO clientes (id, nome, cpf, endereco) VALUES (?, ?)",
		[
			registro.id,
			registro.nome,
            registro.cpf,
            registro.endereco
		],
		(err) => {
			if (err) {
                res.status(500).send("Erro ao inserir o categoria no banco de dados.");
            } else {
                res.redirect("/");
            }
		}
	
	);
}
async function selectClientes(req, res) {
    databaseInstance.db.all(`SELECT 
    clientes.id,
    clientes.nome,
    clientes.cpf,
    clientes.endereco
	FROM clientes`, (err, rows) => {
        if (err) {
            throw err;
        }
        res.render('listarClientes', { rows })
        console.table(rows);
    });
}


async function atualizarCliente(req, res) {
    let registro = req.body;
    databaseInstance.db.run(
        "UPDATE clientes SET nome=?, cpf=?, endereco=? WHERE id=?",
        [
            registro.nome,
            registro.cpf,
            registro.endereco,
        ],
        (err) => {
            if (err) {
                res.status(500).send("Erro ao atualizar o cliente no banco de dados.");
            } else {
                res.redirect("/");
            }
        }

    );
}


async function deleteClienteById(req, res) {
    let id = req.body.id
    databaseInstance.db.get('DELETE FROM clientes WHERE id=?', [id], (err) => {
        if (err) {
            res.status(500).send("Erro ao deletar o cliente no banco de dados.");
        } else {
            res.redirect("/");
        }
    })
}

async function selectClientById(req, res) {
    let id = req.body.id;
    databaseInstance.db.get(`SELECT * FROM cliente WHERE id=?`, [id], (err, item) => {
        if (err) {
            throw err;
        }
        console.table(item);
        console.table(id);
        res.render('atualiza_clientes', { item })
    });
}


// Rota para processar o formulário de login
app.post('/log', (req, res) => {
    const { email, senha } = req.body;
  
    // Simples exemplo de validação
    if (email && senha) {
      let registro = req.body;
      databaseInstance.db.all(
      `SELECT * FROM users WHERE email = ? LIMIT 1`
      [
        registro.email
      ],
      (err, rows) => {
              if (err) {
                  res.status(500).send("Email ou senha inválidos.");
              }
              let resultado = {rows}
        console.log(rows)
          }
  
  
      )
  
      // Aqui você deve adicionar a lógica de autenticação
      // Por exemplo, verificar no banco de dados se o usuário e senha são válidos
  
      // Se as credenciais forem válidas, redirecione para a página inicial
      // Caso contrário, exiba uma mensagem de erro
      if (isValidCredentials(username, password)) {
        res.redirect('/');
      } else {
        res.render('login', { error: 'Credenciais inválidas. Tente novamente.' });
      }
    } else {
      res.render('login', { error: 'Usuário e senha são obrigatórios.' });
    }
  });
  
  // Função de exemplo para verificar as credenciais (substitua por sua lógica real)
  function isValidCredentials(username, password) {
    // Aqui você pode verificar no banco de dados ou qualquer outro sistema
    // Simples exemplo de verificação
    return username === 'usuario' && password === 'senha';
  }
  

module.exports = {
    selectClientes,
    atualizarCliente,
    deleteClienteById,
    selectClientById
};

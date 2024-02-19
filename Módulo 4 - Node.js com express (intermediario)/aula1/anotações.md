https://youtu.be/pohvlFd0byI
Eduardo Assimo21:11
Formatos de Dados:
As APIs geralmente utilizam formatos de dados padronizados para representar e transmitir informações. Um formato comum é o JSON (JavaScript Object Notation), que é leve, legível por humanos e amplamente suportado. Além do JSON, outros formatos como XML (eXtensible Markup Language) também podem ser usados em determinados contextos.


Os cabeçalhos HTTP permitem que o cliente e o servidor passem informações adicionais com a solicitação ou a resposta HTTP. Um cabeçalho de solicitação é composto por seu nome case-insensitive (não diferencia letras maiúsculas e minúsculas), seguido por dois pontos ':' e pelo seu valor (sem quebras de linha). Espaços em branco antes do valor serão ignorados.


Jeferson Lima21:19
Cabeçalho de Resposta (res.writeHead(...)):

No código, res.writeHead(200, {'Content-Type': 'application/json'}); configura o cabeçalho da resposta HTTP. A parte importante aqui é {'Content-Type': 'application/json'}, que indica que o conteúdo da resposta é em formato JSON.
Objeto JSON de Resposta:

Criamos um objeto chamado responseObject, que contém uma propriedade chamada message. Este objeto será convertido em JSON e enviado como resposta.
Conversão para JSON (JSON.stringify(...)):

Utilizam


Eduardo Assimo21:20
What are headers in Nodejs?
The header tells the server details about the request such as what type of data the client, user, or request wants in the response. Type can be html , text , JSON , cookies or others.
Eduardo Assimo21:22
O formato JSON (JavaScript Object Notation) é, como o nome sugere, uma forma de notação de objetos JavaScript, de modo que eles possam ser representados de uma forma comum a diversas linguagens.

Além disso, uma ideia que está fortemente enraizada neste formato é que ele seja facilmente trafegado entre aplicações em quaisquer protocolos, inclusive o HTTP. Portanto, a principal diferença entre um objeto JavaScript padrão e um JSON é o fato do JSON ser na realidade: um texto.

https://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express
response.write(JSON.stringify(anObject));
luisa nievas21:40
res.writeHead(404, { 'Content-Type': 'application/json' });
    const error = {
      erro: 'Rota não encontrada'
    };
    res.end(JSON.stringify(error));
  }
Tomás Leones21:41
const http = require('http');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Configura o cabeçalho de resposta para indicar JSON como o tipo de conteúdo
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  // Cria um objeto que será convertido para JSON
  const responseData = {
    message: 'Olá, este é o meu servidor web!'
  };
  
  // Converte o objeto para JSON e envia como resposta
  res.end(JSON.stringify(responseData));
})
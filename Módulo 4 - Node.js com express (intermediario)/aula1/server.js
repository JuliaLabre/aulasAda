// Importa o módulo HTTP do Node.js
const http = require('http');
// Configura as informações do servidor
const host = '127.0.0.1';
const port = 3000;
// Cria o servidor
const server = http.createServer((req, res) => {
 // Configura o cabeçalho de resposta com o tipo de conteúdo
 res.writeHead(200, {'Content-Type': 'text/plain'});
 // Envia a resposta para o cliente
 res.end("Olá, este é o meu servidor web!\n");
});
// Faz o servidor escutar em uma porta específica e endereço IP
server.listen(port, host, () => {
 console.log(`Servidor rodando em http://${host}:${port}/`);
});

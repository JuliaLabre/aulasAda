-- CREATE DATABASE aula;

CREATE DATABASE IF NOT EXISTS aula;

create database if not exists aula;

USE aula;

CREATE DATABASE IF NOT EXISTS aula2;

-- DROP DATABASE aulan;

DROP DATABASE IF EXISTS aulan;

DROP DATABASE IF EXISTS aula2;

-- DROP DATABASE IF EXISTS aula;

USE aula;

CREATE TABLE IF NOT EXISTS uf (
	id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    sigla CHAR(2) NOT NULL
);

CREATE TABLE IF NOT EXISTS municipio (
	id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    uf_id TINYINT UNSIGNED NOT NULL,
	FOREIGN KEY (uf_id) REFERENCES uf(id)
);

CREATE TABLE IF NOT EXISTS aluno (
	id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    cpf BIGINT NULL,
    endereco VARCHAR(100) NULL,
    telefones VARCHAR(100) NULL);
    
----------------------------------------------------------------

-- Inserção 1
INSERT INTO aluno (nome, data_nascimento, cpf, endereco, telefones)
VALUES ('João Silva', '1995-03-15', 12345678901, 'Rua A, 123', '(11) 98765-4321');

-- Inserção 2
INSERT INTO aluno (nome, data_nascimento, cpf, endereco, telefones)
VALUES ('Maria Oliveira', '1998-07-22', 98765432109, 'Avenida B, 456', '(22) 87654-3210');

-- Inserção 3
INSERT INTO aluno (nome, data_nascimento, cpf, endereco, telefones)
VALUES ('Carlos Santos', '2000-01-10', 34567890123, 'Travessa C, 789', '(33) 76543-2109');

-- Inserção 4
INSERT INTO aluno (nome, data_nascimento, cpf, endereco, telefones)
VALUES ('Ana Pereira', '1993-11-05', 56789012345, 'Rua D, 321', '(44) 65432-1098');

-- Inserção 5
INSERT INTO aluno (nome, data_nascimento, cpf, endereco, telefones)
VALUES ('Pedro Oliveira', '1997-04-18', 78901234567, 'Avenida E, 987', '(55) 54321-0987');

----------------------------------------------------------------

UPDATE aluno
SET endereco = 'Nova Rua, 789'
WHERE id = 1;

UPDATE aluno
SET endereco = 'Nova Rua 2, 0000', telefones = '(99) 87654-3210'
WHERE id = 2;

----------------------------------------------------------------


-- UPDATE tabela
-- SET nome_coluna1 = novo_valor1, nome_coluna2 = novo_valor2, ...
-- WHERE condição;

ALTER TABLE aluno ADD cpf_string CHAR(11) NULL;

UPDATE aluno
SET cpf_string = cpf
WHERE id > 0;

ALTER TABLE aluno DROP COLUMN cpf;

ALTER TABLE aluno ADD cpf CHAR(11) NULL;

UPDATE aluno
SET cpf = cpf_string
WHERE id > 0;

ALTER TABLE aluno DROP COLUMN cpf_string;


DELETE FROM aluno
WHERE id = 3;



-- Comandos de consulta simples como SELECT mostrando todas as colunas, colunas específicas, apelidos em colunas, 
-- cláusula WHERE utilizando operadores como IN, LIKE, <, >, <=, >=, =.

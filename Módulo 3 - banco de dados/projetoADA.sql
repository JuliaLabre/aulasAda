CREATE TABLE Maquina (
    ID_Maquina INT PRIMARY KEY,
    TipoModelo VARCHAR(255),
    Idade INT
);

CREATE TABLE Telemetria (
    ID_Telemetria INT PRIMARY KEY,
    ID_Maquina INT NOT NULL,
    Hora DATETIME,
    Tensao DECIMAL(10,2),
    Rotacao DECIMAL(10,2),
    Pressao DECIMAL(10,2),
    Vibracao DECIMAL(10,2),
    FOREIGN KEY (ID_Maquina) REFERENCES Maquina(ID_Maquina)
);

CREATE TABLE Erro (
    ID_Erro INT PRIMARY KEY,
    ID_Telemetria INT NOT NULL,
    TipoErro VARCHAR(255),
    CodigoErro INT,
    FOREIGN KEY (ID_Telemetria) REFERENCES Telemetria(ID_Telemetria)
);

CREATE TABLE Manutencao (
    ID_Manutencao INT PRIMARY KEY,
	ID_Telemetria INT NOT NULL,
    AtividadeManutencao VARCHAR(255),
    SubstituicaoComponente VARCHAR(255),
    FOREIGN KEY (ID_Telemetria) REFERENCES Telemetria(ID_Telemetria)
);

CREATE TABLE Falha (
    ID_Falha INT PRIMARY KEY,
	ID_Telemetria INT NOT NULL,
    TipoFalha VARCHAR(255),
    FOREIGN KEY (ID_Telemetria) REFERENCES Telemetria(ID_Telemetria)
);


-- Inserindo os Dados--

INSERT INTO Maquina (ID_Maquina, TipoModelo, Idade)
VALUES
    (1, 'ModeloA', 5),
    (2, 'ModeloB', 3),
    (3, 'ModeloC', 10);
    
INSERT INTO Telemetria (ID_Telemetria, ID_Maquina, Hora, Tensao, Rotacao, Pressao, Vibracao)
VALUES
    (1,1,'2023-01-01 01:00:00', 220, 1500, 30, 0.5),
    (2,2,'2023-01-01 02:00:00', 210, 1600, 32, 0.6),
    (3,3,'2023-01-01 03:00:00', 200, 1700, 35, 0.7);
    
INSERT INTO Erro (ID_Erro, ID_Telemetria, TipoErro, CodigoErro)
VALUES
    (1, 1, 'ErroA', 101),
    (2, 2, 'ErroB', 102),
    (3, 3, 'ErroC', 103);
    
INSERT INTO Manutencao (ID_Manutencao, ID_Telemetria, AtividadeManutencao, SubstituicaoComponente)
VALUES
    (1, 1, 'ManutencaoA', 'ComponenteA'),
    (2, 2, 'ManutencaoB', 'ComponenteB'),
    (3, 3, 'ManutencaoC', 'ComponenteC');
    
INSERT INTO Falha (ID_Falha, ID_Telemetria,TipoFalha)
VALUES
    (1, 1, 'FalhaA'),
    (2, 2, 'FalhaB'),
    (3, 3, 'FalhaC');
    
-- Consultando as tabelas--
    
SELECT * FROM Telemetria;


-- Qual quantidade modelo de máquina apresenta mais falhas--


-- Consulta Quantidade de Falhas por Idade da Máquina--
SELECT
    m.Idade,
    COUNT(f.ID_Falha) AS QtdFalhas
FROM
    Maquina m
JOIN
    Telemetria t ON m.ID_Maquina = t.ID_Maquina
JOIN
    Falha f ON t.ID_Telemetria = f.ID_Telemetria
GROUP BY
    m.Idade;
    

    

    


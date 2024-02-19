CREATE TABLE machines (
    machine_id SMALLINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    model VARCHAR(30) NOT NULL,
    age TINYINT NOT NULL
);

CREATE TABLE horaries (
	horary DATETIME PRIMARY KEY NOT NULL
);

CREATE TABLE telemetries (
    telemetry_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    machine_id SMALLINT NOT NULL,
    horary DATETIME NOT NULL,
    volt FLOAT NOT NULL,
    rotation FLOAT NOT NULL,
    pressure FLOAT NOT NULL,
    vibration FLOAT NOT NULL,
    FOREIGN KEY (machine_id) REFERENCES machines(machine_id),
    FOREIGN KEY (horary) REFERENCES horaries(horary)
);

CREATE TABLE machine_errors (
    error_id SMALLINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    machine_id SMALLINT NOT NULL,
    horary DATETIME NOT NULL,
    error_code VARCHAR(30) NOT NULL,
    FOREIGN KEY (machine_id) REFERENCES machines(machine_id),
	FOREIGN KEY (horary) REFERENCES horaries(horary)
);

CREATE TABLE failures (
	failure_id SMALLINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    machine_id SMALLINT NOT NULL,
    horary DATETIME NOT NULL,
    component_failure VARCHAR(30) NOT NULL,
    FOREIGN KEY (machine_id) REFERENCES machines(machine_id),
	FOREIGN KEY (horary) REFERENCES horaries(horary)
);

CREATE TABLE maintenances (
    maintenance_id SMALLINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	machine_id SMALLINT NOT NULL,
    horary DATETIME NOT NULL,
    component_substitution VARCHAR(30) NOT NULL,
    FOREIGN KEY (machine_id) REFERENCES machines(machine_id),
	FOREIGN KEY (horary) REFERENCES horaries(horary)
);


-- Criar horários --

-- Crie uma tabela temporária para armazenar as datas

CREATE TEMPORARY TABLE temp_dates (dt DATETIME);

-- Defina as datas de início e fim do intervalo desejado

SET @start_date = '2014-01-01 00:00:00';
SET @end_date = '2016-02-01 00:00:00';

-- Popule a tabela temporária com as datas de hora em hora

INSERT INTO temp_dates (dt)
SELECT
    DATE_ADD(@start_date, INTERVAL n HOUR) AS dt
FROM
    (
        SELECT 
             (t5.a * 10000 + t4.a * 1000 + t3.a * 100 + t2.a * 10 + t1.a) AS n
        FROM 
            (SELECT 0 AS a UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t1,
            (SELECT 0 AS a UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t2,
            (SELECT 0 AS a UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t3,
            (SELECT 0 AS a UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t4,
            (SELECT 0 AS a UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t5
    ) n
WHERE
    DATE_ADD(@start_date, INTERVAL n HOUR) <= @end_date;

-- Insira as datas na tabela Horaries

INSERT INTO horaries (horary)
SELECT dt FROM temp_dates;

-- Remova a tabela temporária se necessário

DROP TEMPORARY TABLE IF EXISTS temp_dates;


SELECT * FROM horaries;

-- Inserts dos dados nas tabelas
INSERT INTO machines (model, age)
VALUES
    ('model3', 18),
    ('model4', 7),
    ('model3', 8),
    ('model3', 7),
    ('model3', 2),
    ('model3', 7),
    ('model3', 20),
    ('model3', 16),
    ('model4', 7),
    ('model3', 10),
    ('model2', 6),
    ('model3', 9);
    
INSERT INTO telemetries (machine_id, horary, volt, rotation, pressure, vibration)
VALUES
    (1,'2015-01-01 06:00:00', 176.217853015625, 418.504078221616, 113.077935462083, 45.0876857639276),
    (1,'2015-01-01 07:00:00', 162.87922289706, 402.747489565395, 95.4605253823187, 43.4139726834815),
	(1,'2015-01-01 08:00:00', 170.989902405567, 527.349825452291, 75.2379048586662, 34.1788471214451),
	(1,'2015-01-01 09:00:00', 162.462833264092, 346.149335043074, 109.248561276504, 41.1221440884256),
	(1,'2015-01-01 10:00:00', 157.61002119306, 435.376873016938, 111.886648210168, 25.9905109982024),
	(1,'2015-01-01 11:00:00', 172.504839196295, 430.323362106675, 95.9270416939636, 35.6550173268837),
	(1,'2015-01-01 12:00:00', 156.556030606329, 499.071623068962, 111.755684290096, 42.7539196974773),
	(1,'2015-01-01 13:00:00', 172.522780814836, 409.624717000438, 101.00108276407, 35.4820086610704),
	(1,'2015-01-01 14:00:00', 175.324523915223, 398.648780707752, 110.624360548654, 45.4822868466294),
	(1,'2015-01-01 15:00:00', 169.218423246933, 460.850669930244, 104.848229967003, 39.9017354356787),
	(1,'2015-01-01 16:00:00', 167.060980719256, 382.483542906686, 103.780662505568, 42.6757999060571),
	(1,'2015-01-01 17:00:00', 160.263953725914, 448.084255968416, 96.4809756730127, 38.5436809273919);
    
    
INSERT INTO machine_errors (machine_id, horary, error_code)
VALUES
  (1,'2015-01-03 07:00:00', 'error1'),
  (1,'2015-01-03 20:00:00', 'error3'),
  (1,'2015-01-04 06:00:00', 'error5'),
  (1,'2015-01-10 15:00:00', 'error4'),
  (1,'2015-01-22 10:00:00', 'error4'),
  (1,'2015-01-25 15:00:00', 'error4'),
  (1,'2015-01-27 04:00:00', 'error1'),
  (1,'2015-03-03 22:00:00', 'error2'),
  (1,'2015-03-05 06:00:00', 'error1'),
  (1,'2015-03-20 18:00:00', 'error1'),
  (1,'2015-03-26 01:00:00', 'error2'),
  (1,'2015-03-31 23:00:00', 'error1');
  
    
INSERT INTO maintenances (machine_id, horary, component_substitution)
VALUES
  (1,'2014-06-01 06:00:00','comp2'),
  (1,'2014-07-16 06:00:00','comp4'),
  (1,'2014-07-31 06:00:00','comp3'),
  (1,'2014-12-13 06:00:00','comp1'),
  (1,'2015-01-05 06:00:00','comp4'),
  (1,'2015-01-05 06:00:00','comp1'),
  (1,'2015-01-20 06:00:00','comp3'),
  (1,'2015-01-20 06:00:00','comp1'),
  (1,'2015-02-04 06:00:00','comp4'),
  (1,'2015-02-04 06:00:00','comp3'),
  (1,'2015-02-19 06:00:00','comp3'),
  (1,'2015-03-06 06:00:00','comp1');
  
    
INSERT INTO failures (machine_id, horary, component_failure) VALUES

(1,'2015-01-05 06:00:00','comp4'),
(1,'2015-03-06 06:00:00','comp1'),
(1,'2015-04-20 06:00:00','comp2'),
(1,'2015-06-19 06:00:00','comp4'),
(1,'2015-09-02 06:00:00','comp4'),
(1,'2015-10-17 06:00:00','comp2'),
(1,'2015-12-16 06:00:00','comp4'),
(2,'2015-03-19 06:00:00','comp1'),
(2,'2015-03-19 06:00:00','comp2'),
(2,'2015-04-18 06:00:00','comp2'),
(2,'2015-12-29 06:00:00','comp2'),
(3,'2015-01-07 06:00:00','comp2');

-- Qual da quantidade modelo de máquina apresenta mais falhas--
SELECT
    m.model,
    COUNT(f.failure_id) AS QtdFalhas
FROM
    machines m
JOIN
    failures f ON m.machine_id = f.machine_id
GROUP BY
    m.model
ORDER BY
    QtdFalhas DESC
LIMIT 1;

-- Consulta da Quantidade de Falhas por Idade da Máquina--
SELECT
    m.age,
    COUNT(f.failure_id) AS QtdFalhas
FROM
    machines m
JOIN
    failures f ON m.machine_id = f.machine_id
GROUP BY
    m.age;
    
-- Consulta de Qual componente apresenta maior quantidade de falhas por máquina--
SELECT
    m.machine_id,
    m.model,
    f.component_failure,
    COUNT(f.failure_id) AS QtdFalhas
FROM
    machines m
JOIN
    failures f ON m.machine_id = f.machine_id
GROUP BY
    m.machine_id, m.model, f.component_failure
ORDER BY
    QtdFalhas DESC;
    
-- Consulta da média da idade das máquinas por modelo--
SELECT
    model,
    AVG(age) AS MediaIdade
FROM
    machines
GROUP BY
    model;
    
-- Consulta da Quantidade de erro por tipo de erro e modelo da máquina--
SELECT
    m.model,
    e.error_code,
    COUNT(e.error_id) AS QtdErros
FROM
    machines m
JOIN
    machine_errors e ON m.machine_id = e.machine_id
GROUP BY
    m.model, e.error_code;

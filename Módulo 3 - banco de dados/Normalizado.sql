-- Criação das tabelas

CREATE SCHEMA IF NOT EXISTS `projeto` DEFAULT CHARACTER SET utf8 ;
USE `projeto` ;

-- Tabela machine

CREATE TABLE IF NOT EXISTS `machine` (
  `machineID` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`machineID`)
) ENGINE = InnoDB;

-- Tabela machine_detail

CREATE TABLE IF NOT EXISTS `machine_detail` (
  `machineID` TINYINT UNSIGNED NOT NULL,
  `model` VARCHAR(45) NOT NULL,
  `age` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`machineID`),
  CONSTRAINT `fk_machine_detail`
    FOREIGN KEY (`machineID`)
    REFERENCES `machine` (`machineID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Tabela telemetry

CREATE TABLE IF NOT EXISTS `telemetry` (
  `telemetryID` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `datetime` DATETIME NOT NULL,
  `volt` FLOAT NOT NULL,
  `rotate` FLOAT NOT NULL,
  `pressure` FLOAT NOT NULL,
  `vibration` FLOAT NOT NULL,
  `machine_machineID` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`telemetryID`, `machine_machineID`),
  CONSTRAINT `fk_telemetry_machine`
    FOREIGN KEY (`machine_machineID`)
    REFERENCES `machine` (`machineID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Tabela component

CREATE TABLE IF NOT EXISTS `component` (
  `compCode` CHAR(6) NOT NULL,
  PRIMARY KEY (`compCode`)
) ENGINE = InnoDB;

-- Tabela failure

CREATE TABLE IF NOT EXISTS `failure` (
  `failureID` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `datetimeFailure` DATETIME NOT NULL,
  `machine_machineID` TINYINT UNSIGNED NOT NULL,
  `compCode` CHAR(6) NOT NULL,
  PRIMARY KEY (`failureID`, `machine_machineID`),
  CONSTRAINT `fk_failure_machine`
    FOREIGN KEY (`machine_machineID`)
    REFERENCES `machine` (`machineID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_failure_component`
    FOREIGN KEY (`compCode`)
    REFERENCES `component` (`compCode`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Tabela maint

CREATE TABLE IF NOT EXISTS `maint` (
  `maintID` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `datetimeMaint` DATETIME NOT NULL,
  `machine_machineID` TINYINT UNSIGNED NOT NULL,
  `compCode` CHAR(6) NOT NULL,
  PRIMARY KEY (`maintID`, `machine_machineID`),
  CONSTRAINT `fk_maint_machine`
    FOREIGN KEY (`machine_machineID`)
    REFERENCES `machine` (`machineID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_maint_component`
    FOREIGN KEY (`compCode`)
    REFERENCES `component` (`compCode`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Tabela error

CREATE TABLE IF NOT EXISTS `error` (
  `errorID` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `datetimeError` DATETIME NOT NULL,
   `errorCode` CHAR(6) NOT NULL,
  `machine_machineID` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`errorID`, `machine_machineID`),
  CONSTRAINT `fk_error_machine`
    FOREIGN KEY (`machine_machineID`)
    REFERENCES `machine` (`machineID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Inserir dados na tabela `machine`
INSERT INTO `machine` (`machineID`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10);

-- Inserir dados na tabela `machine_detail`
INSERT INTO `machine_detail` (`machineID`, `model`, `age`) VALUES
(1, 'model3', 18),
(2, 'model4', 7),
(3, 'model3', 8),
(4, 'model3', 7),
(5, 'model3', 2),
(6, 'model3', 7),
(7, 'model3', 20),
(8, 'model3', 16),
(9, 'model4', 7),
(10, 'model3', 10);

INSERT INTO `telemetry` (datetime, machine_machineID, volt, rotate, pressure, vibration)
VALUES
  ('2015-01-01 06:00:00', 1, 176.217853015625, 418.504078221616, 113.077935462083, 45.0876857639276),
  ('2015-01-01 07:00:00', 1, 162.87922289706, 402.747489565395, 95.4605253823187, 43.4139726834815),
  ('2015-01-01 08:00:00', 1, 170.989902405567, 527.349825452291, 75.2379048586662, 34.1788471214451),
  ('2015-01-01 09:00:00', 1, 162.462833264092, 346.149335043074, 109.248561276504, 41.1221440884256),
  ('2015-01-01 10:00:00', 1, 157.61002119306, 435.376873016938, 111.886648210168, 25.9905109982024),
  ('2015-01-01 11:00:00', 1, 172.504839196295, 430.323362106675, 95.9270416939636, 35.6550173268837),
  ('2015-01-01 12:00:00', 1, 156.556030606329, 499.071623068962, 111.755684290096, 42.7539196974773),
  ('2015-01-01 13:00:00', 1, 172.522780814836, 409.624717000438, 101.00108276407, 35.4820086610704),
  ('2015-01-01 14:00:00', 1, 175.324523915223, 398.648780707752, 110.624360548654, 45.4822868466294),
  ('2015-01-01 15:00:00', 1, 169.218423246933, 460.850669930244, 104.848229967003, 39.9017354356787),
  ('2015-01-01 16:00:00', 1, 167.060980719256, 382.483542906686, 103.780662505568, 42.6757999060571),
  ('2015-01-01 17:00:00', 1, 160.263953725914, 448.084255968416, 96.4809756730127, 38.5436809273919);
  
  
-- Inserir dados na tabela `component`
INSERT INTO `component` (`compCode`) VALUES
('comp1'),
('comp2'),
('comp3'),
('comp4');

-- Inserir dados na tabela `failure`
INSERT INTO `failure` (`datetimeFailure`, `machine_machineID`, `compCode`) VALUES
('2015-01-05 06:00:00', 1, 'comp4'),
('2015-03-06 06:00:00', 1, 'comp1'),
('2015-04-20 06:00:00', 1, 'comp2'),
('2015-06-19 06:00:00', 1, 'comp4'),
('2015-09-02 06:00:00', 1, 'comp4'),
('2015-10-17 06:00:00', 1, 'comp2'),
('2015-12-16 06:00:00', 1, 'comp4'),
('2015-03-19 06:00:00', 2, 'comp1'),
('2015-03-19 06:00:00', 2, 'comp2'),
('2015-04-18 06:00:00', 2, 'comp2');

INSERT INTO `error` (datetimeError, machine_machineID, errorCode)
VALUES
  ('2015-01-03 07:00:00', 1, 'error1'),
  ('2015-01-03 20:00:00', 1, 'error3'),
  ('2015-01-04 06:00:00', 1, 'error5'),
  ('2015-01-10 15:00:00', 1, 'error4'),
  ('2015-01-22 10:00:00', 1, 'error4'),
  ('2015-01-25 15:00:00', 1, 'error4'),
  ('2015-01-27 04:00:00', 1, 'error1'),
  ('2015-03-03 22:00:00', 1, 'error2'),
  ('2015-03-05 06:00:00', 1, 'error1'),
  ('2015-12-02 06:00:00', 3, 'error2');
  
  INSERT INTO `maint` (datetimeMaint, machine_machineID, compCode)
VALUES
  ('2014-06-01 06:00:00', 1, 'comp2'),
  ('2014-07-16 06:00:00', 1, 'comp4'),
  ('2014-07-31 06:00:00', 1, 'comp3'),
  ('2014-12-13 06:00:00', 1, 'comp1'),
  ('2015-01-05 06:00:00', 1, 'comp4'),
  ('2015-01-05 06:00:00', 1, 'comp1'),
  ('2015-01-20 06:00:00', 1, 'comp3'),
  ('2015-01-20 06:00:00', 1, 'comp1'),
  ('2015-02-04 06:00:00', 1, 'comp4'),
  ('2015-02-04 06:00:00', 1, 'comp3');
  
  -- Qual modelo de máquina apresenta mais falhas --
SELECT
    md.model,
    COUNT(f.failureID) AS total_failures
FROM
    machine_detail md
JOIN
    failure f ON md.machineID = f.machine_machineID
GROUP BY
    md.model
ORDER BY
    total_failures DESC
LIMIT 1;

  -- Qual a quantidade de falhas por idade da máquina --
SELECT
    md.age,
    COUNT(f.failureID) AS total_failures
FROM
    machine_detail md
JOIN
    failure f ON md.machineID = f.machine_machineID
GROUP BY
    md.age;
    
-- Qual componente apresenta maior quantidade de falhas por máquina. --
SELECT
    m.machineID,
    c.compCode,
    COUNT(f.failureID) AS total_failures
FROM
    machine m
JOIN
    failure f ON m.machineID = f.machine_machineID
JOIN
    component c ON f.compCode = c.compCode
GROUP BY
    m.machineID, c.compCode
ORDER BY
    total_failures DESC
LIMIT 1;

-- A média da idade das máquinas por modelo --
SELECT
    md.model,
    AVG(md.age) AS average_age
FROM
    machine_detail md
GROUP BY
    md.model;
    
-- Quantidade de erro por tipo de erro e modelo da máquina. --
SELECT
    md.model,
    e.errorCode,
    COUNT(e.errorID) AS total_errors
FROM
    machine_detail md
JOIN
    error e ON md.machineID = e.machine_machineID
GROUP BY
    md.model, e.errorCode;




    

   

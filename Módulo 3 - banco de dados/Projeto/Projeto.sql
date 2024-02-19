
CREATE SCHEMA IF NOT EXISTS `projeto` DEFAULT CHARACTER SET utf8 ;
USE `projeto` ;

CREATE TABLE IF NOT EXISTS `machine` (
  `machineID` TINYINT UNSIGNED NOT NULL,
  `model` VARCHAR(45) NOT NULL,
  `age` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`machineID`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `telemetry` (
  `telemetryID` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `datetime` DATETIME NOT NULL,
  `volt` FLOAT NOT NULL,
  `rotate` FLOAT NOT NULL,
  `pressure` FLOAT NOT NULL,
  `vibration` FLOAT NOT NULL,
  PRIMARY KEY (`telemetryID`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `error` (
  `errorID` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `errorCode` CHAR(6) NOT NULL,
  `telemetry_telemetryID` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`errorID`, `telemetry_telemetryID`),
  CONSTRAINT `fk_error_telemetry1`
    FOREIGN KEY (`telemetry_telemetryID`)
    REFERENCES `telemetry` (`telemetryID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `failure` (
  `failureID` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `failureCode` CHAR(6) NOT NULL,
  `telemetry_telemetryID` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`failureID`, `telemetry_telemetryID`),
  CONSTRAINT `fk_failure_telemetry1`
    FOREIGN KEY (`telemetry_telemetryID`)
    REFERENCES `telemetry` (`telemetryID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `component` (
  `componentID` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `compCode` CHAR(5) NOT NULL,
  PRIMARY KEY (`componentID`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `maint` (
  `maintID` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `machine_machineID` TINYINT UNSIGNED NOT NULL,
  `telemetry_telemetryID` TINYINT UNSIGNED NOT NULL,
  `component_componentID` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`maintID`, `machine_machineID`, `telemetry_telemetryID`, `component_componentID`),
  CONSTRAINT `fk_maint_telemetry1`
    FOREIGN KEY (`telemetry_telemetryID`)
    REFERENCES `telemetry` (`telemetryID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_maint_component1`
    FOREIGN KEY (`component_componentID`)
    REFERENCES `component` (`componentID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `machine_has_telemetry` (
  `machine_machineID` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `telemetry_telemetryID` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`machine_machineID`, `telemetry_telemetryID`),
  CONSTRAINT `fk_machine_has_telemetry_machine1`
    FOREIGN KEY (`machine_machineID`)
    REFERENCES `machine` (`machineID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_machine_has_telemetry_telemetry1`
    FOREIGN KEY (`telemetry_telemetryID`)
    REFERENCES `telemetry` (`telemetryID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `failure_has_component` (
  `failure_failureID` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `component_componentID` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`failure_failureID`, `component_componentID`),
  CONSTRAINT `fk_failure_has_component_failure1`
    FOREIGN KEY (`failure_failureID`)
    REFERENCES `failure` (`failureID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_failure_has_component_component1`
    FOREIGN KEY (`component_componentID`)
    REFERENCES `component` (`componentID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `error_has_machine` (
  `error_errorID` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `machine_machineID` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`error_errorID`, `machine_machineID`),
  CONSTRAINT `fk_error_has_machine_error1`
    FOREIGN KEY (`error_errorID`)
    REFERENCES `error` (`errorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_error_has_machine_machine1`
    FOREIGN KEY (`machine_machineID`)
    REFERENCES `machine` (`machineID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `component_has_machine` (
  `component_componentID` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `machine_machineID` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`component_componentID`, `machine_machineID`),
  CONSTRAINT `fk_component_has_machine_component1`
    FOREIGN KEY (`component_componentID`)
    REFERENCES `component` (`componentID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_component_has_machine_machine1`
    FOREIGN KEY (`machine_machineID`)
    REFERENCES `machine` (`machineID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

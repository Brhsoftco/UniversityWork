/* CREATE THE DATABASE (ONLY IF IT DOESN'T EXIST) */
CREATE DATABASE IF NOT EXISTS `WareMart_s5258872`;

/* USE THE DATABASE */
USE `WareMart_s5258872`;

/* CREATE THE WAREHOUSE TABLE */
CREATE TABLE IF NOT EXISTS `WAREHOUSE` (
    `warehouseID` VARCHAR(3) NOT NULL,
    `street` VARCHAR(20) NOT NULL,
    `city` VARCHAR(15) NOT NULL,
    `state` CHAR(3) NOT NULL,
    `postcode` CHAR(4) NOT NULL,
    `managerID` INT,
    PRIMARY KEY (`warehouseID`)
);

/* CREATE THE EMPLOYEE TABLE */
CREATE TABLE IF NOT EXISTS `EMPLOYEE` (
    `staffID` INT NOT NULL AUTO_INCREMENT,
    `surname` VARCHAR(20) NOT NULL,
    `firstName` VARCHAR(15) NOT NULL,
    `dob` DATE NOT NULL,
    `street` VARCHAR(20) NOT NULL,
    `city` VARCHAR(15) NOT NULL,
    `state` CHAR(3) NOT NULL,
    `postcode` CHAR(4) NOT NULL,
    `salary` DECIMAL(19,4) NOT NULL,
    `warehouseID` VARCHAR(3) NOT NULL,
    `supervisedBy` INT,
    PRIMARY KEY (`staffID`),
    CONSTRAINT FOREIGN KEY (`warehouseID`) REFERENCES WAREHOUSE(`warehouseID`),
    CONSTRAINT `employeeSupervisorFK` FOREIGN KEY (`supervisedBy`) REFERENCES EMPLOYEE(`StaffID`)
);

/* ADD WAREHOUSE FOREIGN KEY (TABLE WOULDN'T EXIST YET IF YOU TRIED TO DO THIS IMMEDIATELY) */
ALTER TABLE `WAREHOUSE` ADD CONSTRAINT FOREIGN KEY (`managerID`) REFERENCES EMPLOYEE(`StaffID`);

/* CREATE THE LOCATION TABLE */
CREATE TABLE IF NOT EXISTS `LOCATION` (
    `warehouseID` VARCHAR(3) NOT NULL,
    `locationID` VARCHAR(3) NOT NULL,
    `Aisle` INT NOT NULL,
    `Shelf` INT NOT NULL,
    `Bin` INT NOT NULL,
    `capacity` DECIMAL(5,2) NOT NULL,
    `hazardousAllowed` TINYINT(1) NOT NULL,
    PRIMARY KEY (`warehouseID`, `locationID`),
    CONSTRAINT FOREIGN KEY (`warehouseID`) REFERENCES WAREHOUSE(`warehouseID`)
);

/* CREATE THE DEPARTMENT TABLE */
CREATE TABLE IF NOT EXISTS `DEPARTMENT` (
    `dptNumber` INT NOT NULL AUTO_INCREMENT,
    `dptName` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`dptNumber`)
);

/* CREATE THE CLIENT TABLE */
CREATE TABLE IF NOT EXISTS `CLIENT` (
    `clientNum` INT NOT NULL AUTO_INCREMENT,
    `clientName` VARCHAR(40) NOT NULL,
    PRIMARY KEY (`clientNum`)
);

/* CREATE THE CLIENT_ADDRESS TABLE */
CREATE TABLE IF NOT EXISTS `CLIENT_ADDRESS` (
    `clientNum` INT NOT NULL,
    `addressType` CHAR(1) NOT NULL,
    `street` VARCHAR(20) NOT NULL,
    `city` VARCHAR(15) NOT NULL,
    `state` CHAR(3) NOT NULL,
    `postcode` CHAR(4) NOT NULL,
    CONSTRAINT `clientAddressMappingPK` PRIMARY KEY (`clientNum`, `addressType`),
    CONSTRAINT FOREIGN KEY (`clientNum`) REFERENCES CLIENT(`clientNum`)
);

/* CREATE THE PRODUCT TABLE */
CREATE TABLE IF NOT EXISTS `PRODUCT` (
    `productNum` INT NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(30),
    `packSize` INT NOT NULL,
    `dptNumber` INT NOT NULL,
    PRIMARY KEY (`productNum`),
    CONSTRAINT FOREIGN KEY (`dptNumber`) REFERENCES DEPARTMENT(`dptNumber`)
);

/* CREATE THE PROD_LOCATION TABLE (BRIDGING TABLE/MAPPINGS) */
CREATE TABLE IF NOT EXISTS `PROD_LOCATION` (
    `warehouseID` VARCHAR(3) NOT NULL,
    `locationID` VARCHAR(3) NOT NULL,
    `productNum` INT NOT NULL,
    `quantityOnHand` INT NOT NULL,
    CONSTRAINT `productLocationMappingPK` PRIMARY KEY (`warehouseID`, `locationID`, `productNum`),
    CONSTRAINT FOREIGN KEY (`warehouseID`, `locationID`) REFERENCES LOCATION(`warehouseID`, `locationID`),
    CONSTRAINT FOREIGN KEY (`productNum`) REFERENCES PRODUCT(`productNum`)
);

/* CREATE THE STOCK_REQUEST TABLE */
CREATE TABLE IF NOT EXISTS `STOCK_REQUEST` (
    `requestNum` INT NOT NULL AUTO_INCREMENT,
    `requestDate` DATE NOT NULL,
    `clientNum` INT NOT NULL,
    PRIMARY KEY (`requestNum`),
    CONSTRAINT FOREIGN KEY (`clientNum`) REFERENCES CLIENT(`clientNum`)
);

/* CREATE THE REQUEST_LIST TABLE */
CREATE TABLE IF NOT EXISTS `REQUEST_LIST` (
    `requestNum` INT NOT NULL,
    `productNum` INT NOT NULL,
    `qtyRequested` INT NOT NULL,
    CONSTRAINT `requestListMappingPK` PRIMARY KEY (`requestNum`, `productNum`),
    CONSTRAINT FOREIGN KEY (`requestNum`) REFERENCES STOCK_REQUEST(`requestNum`),
    CONSTRAINT FOREIGN KEY (`productNum`) REFERENCES PRODUCT(`productNum`)
);

/* CREATE THE PICKING_LIST TABLE */
CREATE TABLE IF NOT EXISTS `PICKING_LIST` (
    `warehouseID` VARCHAR(3) NOT NULL,
    `locationID` VARCHAR(3) NOT NULL,
    `productNum` INT NOT NULL,
    `requestNum` INT NOT NULL,
    `quantityPicked` INT NOT NULL,
    `datePicked` DATE NOT NULL,
    `pickerStaffID` INT NOT NULL,
    CONSTRAINT `pickingListMappingPK` PRIMARY KEY (`warehouseID`, `locationID`, `productNum`, `requestNum`),
    CONSTRAINT FOREIGN KEY (`warehouseID`, `locationID`, `productNum`) REFERENCES PROD_LOCATION(`warehouseID`, `locationID`, `productNum`),
    CONSTRAINT FOREIGN KEY (`productNum`, `requestNum`) REFERENCES REQUEST_LIST(`productNum`, `requestNum`),
    CONSTRAINT FOREIGN KEY (`pickerStaffID`) REFERENCES EMPLOYEE(`staffID`)
);
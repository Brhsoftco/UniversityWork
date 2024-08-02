/* USE THE DATABASE */
USE `WareMart_s5258872`;

/* CLIENT ALPHABETIC SORT (SAFE TO JUST USE * BECAUSE THERE ARE ONLY TWO FIELDS ANYWAY) */
SELECT * FROM `CLIENT` ORDER BY `clientName` ASC;

/* GRAB EMPLOYEE NAME AND ADDRESS SORTED BY SALARY */
SELECT CONCAT(`firstName`, ' ', `surname`) AS `NAME`, CONCAT(`street`, ', ', `city`, ' ', `state`, ' ', `postcode`) AS `ADDRESS` FROM `EMPLOYEE` ORDER BY `salary` DESC;

/* GRAB MOST RECENT STOCK REQUEST DATE */
SELECT `requestDate` FROM `STOCK_REQUEST` ORDER BY `requestDate` DESC LIMIT 1;

/* GRAB ALL CLIENTS AND THEIR ADDRESSES */
SELECT `clientName` AS `NAME`, CONCAT(`CLIENT_ADDRESS`.`street`, ', ', `CLIENT_ADDRESS`.`city`, ' ', `CLIENT_ADDRESS`.`state`, ' ', `CLIENT_ADDRESS`.`postcode`) AS `ADDRESS` FROM `CLIENT` INNER JOIN `CLIENT_ADDRESS` ON `CLIENT`.`clientNum` = `CLIENT_ADDRESS`.`clientNum`;

/* GRAB ALL CLIENTS THAT HAVE NOT YET REQUESTED STOCK */
SELECT DISTINCT `c`.`clientNum` FROM `CLIENT` `c` LEFT JOIN `STOCK_REQUEST` `s` ON `c`.`clientNum` = `s`.`clientNum` WHERE `s`.`clientNum` IS NULL;

/* GRAB ALL EMPLOYEES WHO HAVE PERFORMED A PICK */
SELECT DISTINCT CONCAT(`e`.`firstName`, ' ', `e`.`surname`) AS `NAME` FROM `EMPLOYEE` `e` LEFT JOIN `PICKING_LIST` `p` ON `e`.`staffID` = `p`.`pickerStaffID` WHERE `p`.`pickerStaffID` IS NOT NULL;

/* GRAB TOTAL QUANTITY ON-HAND FOR EACH PRODUCT */
SELECT `p`.`productNum`, `p`.`description`, IFNULL(SUM(`l`.`quantityOnHand`), 0) AS `qty` FROM `PRODUCT` `p` LEFT JOIN `PROD_LOCATION` `l` ON `p`.`productNum` = `l`.`productNum` GROUP BY `p`.`productNum`;

/* GRAB CLIENTS AND PRODUCTS REQUESTED */
SELECT `c`.`clientName`, `l`.`productNum`, `l`.`qtyRequested` FROM ((`CLIENT` `c` INNER JOIN `STOCK_REQUEST` `r` ON `c`.`clientNum` = `r`.`clientNum`) INNER JOIN `REQUEST_LIST` `l` ON `l`.`requestNum` = `r`.`requestNum`) ORDER BY `c`.`clientName`, `l`.`productNum`;

/* GRAB ALL EMPLOYEES WHOSE SALARY IS LESS THAN OR EQUAL TO THE AVERAGE SALARY */
SELECT CONCAT(`firstName`, ' ', `surname`) AS `NAME`, ROUND(`salary`, 2) AS `SALARY` FROM `EMPLOYEE` `e` HAVING `SALARY` <= ROUND(SUM(`salary`) / COUNT(*), 2);

/* GRAB ALL EMPLOYEES WHOSE SALARY IS LESS THAN OR EQUAL TO THE AVERAGE SALARY, AND THEN APPLY A 7.5% INCREASE */
SELECT CONCAT(`firstName`, ' ', `surname`) AS `NAME`, ROUND(`salary`, 2) AS `SALARY`, ROUND(`salary` * 1.075, 2) AS `INCREASED`, (ROUND(`salary` * 1.075, 2) - ROUND(`salary`, 2)) AS `PAYRAISE` FROM `EMPLOYEE` `e` HAVING `SALARY` <= ROUND(SUM(`salary`) / COUNT(*), 2);
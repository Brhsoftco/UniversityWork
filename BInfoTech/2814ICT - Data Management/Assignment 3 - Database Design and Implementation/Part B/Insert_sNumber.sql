/* USE THE DATABASE */
USE `WareMart_s5258872`;

/* CREATE RECORDS FOR DEPARTMENT */
INSERT INTO `DEPARTMENT` (`dptName`) VALUES
	(
		'Electronics'
	),
	(
		'Hardware'
	),
	(
		'Building Materials'
	),
	(
		'Office Supplies'
	),
	(
		'Groceries'
	);

/* CREATE RECORDS FOR CLIENT */
INSERT INTO `CLIENT` (`clientName`) VALUES
	(
		'Suburban Suppliers'
	),
	(
		'Flanders Concreting'
	),
	(
		'GoThere! Navigation Solutions'
	),
	(
		'Southside Fabrications'
	),
	(
		'Northside Wrecking'
	);

/* CREATE RECORDS FOR WAREHOUSE */
INSERT INTO `WAREHOUSE` (`warehouseID`, `street`, `city`, `state`, `postcode`) VALUES
	(
		'W01',
		'5 Birdwood Crescent',
		'Redbank',
		'QLD',
		'4301'
	),
	(
		'W04',
		'42 Export Street',
		'Lytton',
		'QLD',
		'4178'
	),
	(
		'W11',
		'59 Robert Smith Street',
		'Redbank',
		'QLD',
		'4301'
	),
	(
		'W16',
		'11 Interchange Place',
		'Rochedale',
		'QLD',
		'4123'
	),
	(
		'W23',
		'50 Northcott Place',
		'Redbank',
		'QLD',
		'4301'
	);

/* CREATE RECORDS FOR EMPLOYEE */
INSERT INTO `EMPLOYEE`
	(
		`surname`,
		`firstName`,
		`dob`,
		`street`,
		`city`,
		`state`,
		`postcode`,
		`salary`,
		`warehouseID`
	)
	VALUES
	(
		'Smith',
		'Greg',
		'1949-03-01',
		'4 Bottletree Drive',
		'Tin Can Bay',
		'QLD',
		'4580',
		65000,
		'W11'
	),
	(
		'Schrute',
		'Dwight',
		'1969-07-05',
		'9 Daintree Forest Way',
		'Cape Tribulation',
		'QLD',
		'4873',
		98200,
		'W23'
	),
	(
		'Hudson',
		'Diane',
		'2000-12-25',
		'43 Edward Street',
		'Brisbane City',
		'QLD',
		'400',
		85323,
		'W11'
	),
	(
		'Gates',
		'Robert',
		'1983-08-13',
		'53 Wattlebay Crescent',
		'Urangan',
		'QLD',
		'4655',
		74657,
		'W01'
	),
	(
		'Swanson',
		'Peter',
		'1973-08-28',
		'2 Lilly Pilly Street',
		'Heathwood',
		'QLD',
		'4110',
		43000,
		'W04'
	),
	(
		'Scarlett',
		'Robinson',
		'1969-11-22',
		'53 Wattlebay Crescent',
		'Buderim',
		'QLD',
		'4556',
		57430,
		'W16'
	),
	(
		'Darren',
		'Dinkley',
		'1975-04-14',
		'53 Johnson Place',
		'Dalby',
		'QLD',
		'4405',
		86783,
		'W11'
	);

/* CREATE RECORDS FOR LOCATION */
INSERT INTO `LOCATION`
	(
		`warehouseID`,
		`locationID`,
		`Aisle`,
		`Shelf`,
		`Bin`,
		`capacity`,
		`hazardousAllowed`
	)
	VALUES
	(
		'W01',
		'L01',
		5,
		2,
		12,
		53.5,
		0
	),
	(
		'W04',
		'L02',
		9,
		4,
		17,
		15.67,
		1
	),
	(
		'W11',
		'L03',
		16,
		1,
		6,
		73,
		0
	),
	(
		'W01',
		'L07',
		13,
		8,
		6,
		10,
		0
	),
	(
		'W16',
		'L04',
		26,
		6,
		25,
		27.68,
		1
	),
	(
		'W23',
		'L05',
		10,
		9,
		23,
		12.3,
		0
	);

/* CREATE RECORDS FOR PRODUCT */
INSERT INTO `PRODUCT` (`description`, `packSize`, `dptNumber`) VALUES
	(
		'Fruity cereal!',
		8,
		4
	),
	(
		'Helps with productivity',
		3,
		3
	),
	(
		'Creates a serene experience for the office environment',
		2,
		3
	),
	(
		'Mows your lawn like you\'ve never seen before!',
		2,
		1
	),
	(
		'The latest in phone technology; iPhone 59 is responsible for fixing climate change and ending world hunger',
		8,
		1
	);

/* CREATE RECORDS FOR PROD_LOCATION */
INSERT INTO `PROD_LOCATION` (`warehouseID`, `locationID`, `productNum`, `quantityOnHand`) VALUES
	(
		'W04',
		'L02',
		2,
		4
	),
	(
		'W01',
		'L01',
		2,
		22
	),
	(
		'W11',
		'L03',
		3,
		38
	),
	(
		'W01',
		'L07',
		5,
		105
	),
	(
		'W16',
		'L04',
		2,
		62
	),
	(
		'W16',
		'L04',
		5,
		17
	);

/* CREATE RECORDS FOR CLIENT_ADDRESS */
INSERT INTO `CLIENT_ADDRESS`
	(
		`clientNum`,
		`addressType`,
		`street`,
		`city`,
		`state`,
		`postcode`
	)
	VALUES
	(
		1,
		'M',
		'70 Charlotte Street',
		'Brisbane City',
		'QLD',
		'4000'
	),
	(
		2,
		'M',
		'13 Fortune Drive',
		'Mermaid Waters',
		'QLD',
		'4218'
	),
	(
		3,
		'M',
		'57 Rotenberg Crescent',
		'Bundaberg',
		'QLD',
		'4670'
	),
	(
		4,
		'M',
		'19 Whitewash Way',
		'Greenslopes',
		'QLD',
		'4120'
	),
	(
		5,
		'M',
		'78 Rhinestone Avenue',
		'Maffra',
		'VIC',
		'3860'
	);

/* CREATE RECORDS FOR STOCK_REQUEST */
INSERT INTO `STOCK_REQUEST`
	(
		`requestDate`,
		`clientNum`
	)
	VALUES
	(
		'2022-06-02',
		3
	),
	(
		'2021-08-02',
		3
	),
	(
		'2022-05-01',
		2
	),
	(
		'2022-03-03',
		1
	),
	(
		'2019-07-28',
		5
	),
	(
		'2020-08-02',
		5
	);

/* CREATE RECORDS FOR REQUEST_LIST */
INSERT INTO `REQUEST_LIST` (`requestNum`, `productNum`, `qtyRequested`) VALUES
	(
		4,
		2,
		12
	),
	(
		1,
		2,
		8
	),
	(
		2,
		3,
		2
	),
	(
		5,
		2,
		8
	),
	(
		6,
		5,
		30
	),
	(
		3,
		3,
		5
	);

/* CREATE RECORDS FOR PICKING_LIST */
INSERT INTO `PICKING_LIST`
	(
		`warehouseID`,
		`locationID`,
		`requestNum`,
		`productNum`,
		`quantityPicked`,
		`datePicked`,
		`pickerStaffID`
	)
	VALUES
	(
		'W01',
		'L01',
		4,
		2,
		3,
		'2022-06-04',
		2
	),
	(
		'W16',
		'L04',
		1,
		2,
		8,
		'2022-06-03',
		3
	),
	(
		'W11',
		'L03',
		2,
		3,
		1,
		'2021-01-05',
		3
	),
	(
		'W04',
		'L02',
		4,
		2,
		12,
		'2020-12-25',
		4
	),
	(
		'W01',
		'L07',
		6,
		5,
		90,
		'2021-01-12',
		2
	);
	
/* UPDATE THE WAREHOUSES TO PROVIDE THEM WITH A MANAGER */
UPDATE `WAREHOUSE` SET `managerID` = 2;

/* LITTLE BIT OF A HACK, BUT WE WILL REMOVE THE FOREIGN KEY DURING THE INITIAL FILL TO PREVENT SQL THROWING A FIT */
ALTER TABLE `EMPLOYEE` DROP CONSTRAINT `employeeSupervisorFK`;

/* UPDATE EMPLOYEES TO PROVIDE THEM WITH A SUPERVISOR */
UPDATE `EMPLOYEE` SET `supervisedBy` = 1 WHERE `staffID` > 2;

/* NOW, WE'LL ADD THE FOREIGN KEY BACK */
ALTER TABLE `EMPLOYEE` ADD CONSTRAINT `employeeSupervisorFK` FOREIGN KEY (`supervisedBy`) REFERENCES EMPLOYEE(`StaffID`);
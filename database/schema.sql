DROP DATABASE if exists `driverservice`;
CREATE DATABASE `driverservice`;

USE `driverservice`;

CREATE TABLE `drivers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR (55),
  `password` VARCHAR (25),
  `first_name` VARCHAR (25),
  `last_name` VARCHAR (25),
  `phone_number` VARCHAR (20),
  `picture` VARCHAR (255),
  `rating` FLOAT (2, 1),
  PRIMARY KEY (`id`)
);

CREATE TABLE `vehicles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `license_plate` VARCHAR(25),
  `make` VARCHAR (25),
  `model` VARCHAR (25),
  `color` VARCHAR (25),
  `year` YEAR,
  `capacity` INT,
  `picture` VARCHAR (255),
  PRIMARY KEY (`id`)
);

CREATE TABLE `drivers_vehicles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `driver_id` INT,
  `vehicle_id` INT,
  PRIMARY KEY (`id`)
);

CREATE TABLE `available_rides` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `driver_vehicle_id` INT,
  `driver_id` INT,
  `vehicle_id` INT,
  `status` BOOL,
  `current_ride_id` INT,
  `type` VARCHAR (25),
  `location` VARCHAR (150),
  PRIMARY KEY (`id`)
);


ALTER TABLE `drivers_vehicles` ADD FOREIGN KEY (`driver_id`) REFERENCES `drivers` (`id`);
ALTER TABLE `drivers_vehicles` ADD FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`);
ALTER TABLE `available_rides` ADD FOREIGN KEY (`driver_vehicle_id`) REFERENCES `drivers_vehicles` (`id`);


INSERT INTO drivers (first_name, last_name) VALUES ('Allen', 'Price');
INSERT INTO drivers (first_name, last_name) VALUES ('Beth', 'Johnson');
INSERT INTO drivers (first_name, last_name) VALUES ('Doug', 'Calhoun');
INSERT INTO drivers (first_name, last_name) VALUES ('Easak', 'Hong');

INSERT INTO vehicles (license_plate, make, model, color, year) VALUES ('5ABC678', 'Toyota', 'Camry', 'white', 2011);
INSERT INTO vehicles (license_plate, make, model, color, year) VALUES ('1ZYX234', 'BMW', 'X5', 'white', 2015);
INSERT INTO vehicles (license_plate, make, model, color, year) VALUES ('6RPS789', 'Ford', 'Fusion', 'red', 2009);
INSERT INTO vehicles (license_plate, make, model, color, year) VALUES ('3TEA480', 'Nissan', 'Altima', 'blue', 2014);

INSERT INTO drivers_vehicles (driver_id, vehicle_id) VALUES (1, 1);
INSERT INTO drivers_vehicles (driver_id, vehicle_id) VALUES (2, 3);
INSERT INTO drivers_vehicles (driver_id, vehicle_id) VALUES (3, 2);
INSERT INTO drivers_vehicles (driver_id, vehicle_id) VALUES (4, 4);

INSERT INTO available_rides (driver_id, vehicle_id, driver_vehicle_id, status, current_ride_id, type) VALUES (1, 3, 1, 1, 653, 'uber');
INSERT INTO available_rides (driver_id, vehicle_id, driver_vehicle_id, status, type) VALUES (2, 1, 2, 0, 'uber');
INSERT INTO available_rides (driver_id, vehicle_id, driver_vehicle_id, status, current_ride_id, type) VALUES (3, 4, 3, 1, 477, 'xl');
INSERT INTO available_rides (driver_id, vehicle_id, driver_vehicle_id, status, current_ride_id, type) VALUES (4, 2, 4, 1, 3577, 'black');

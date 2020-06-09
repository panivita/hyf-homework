CREATE DATABASE `Meal_sharing` DEFAULT CHARACTER SET utf8mb4 COLLATE=utf8mb4_unicode_ci;
USE `Meal_sharing`;

SET NAMES utf8mb4;

CREATE TABLE  `meal` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` VARCHAR(255) NOT NULL,
 `description` TEXT NOT NULL,
 `location` VARCHAR(255) NOT NULL,
 `meal_time` DATETIME NOT NULL,
 `max_reservations` int(10) unsigned NOT NULL,
 `price` DECIMAL(6, 2) NOT NULL,
 `created_date` DATE NOT NULL DEFAULT (NOW())
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation`(
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `number_of_guests` int(10) unsigned NOT NULL,
 `meal_id` int(10) unsigned NOT NULL,
 `created_date` DATE NOT NULL DEFAULT (NOW()),
 CONSTRAINT `fk_reservation_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review`(
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` VARCHAR(255) NOT NULL,
 `description` TEXT NOT NULL,
 `meal_id` int(10) unsigned NOT NULL,
 `stars` int(10) unsigned NOT NULL,
 `created_date` DATE NOT NULL DEFAULT (NOW()),
 CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
 -- Meal
insert into meal (title, description, location, meal_time, max_reservations, price, created_date) values 
('Wine - Magnotta', 'Belpaese,sapien cum sociis natoque penatibus et magnis', '457 Cody Point', '2020-07-14 18:30:00', 10, 45.99, '2020-07-14');
insert into meal (title, description, location, meal_time, max_reservations, price, created_date) values 
('Pastry', 'Mini French Pastries,erat nulla tempus vivamus in felis eu sapien cursus vestibulum', '32755 Clyde Gallagher Plaza', '2020-06-12 18:45:00', 2, 95.99, '2020-06-12');
insert into meal (title, description, location, meal_time, max_reservations, price, created_date) values 
('Onions Granulated', 'hac habitasse platea dictumst aliquam augue quam sollicitudin vitae', '5605 Upham Hill', '2020-10-03 19:30:00', 8, 70.99,'2020-10-03');
insert into meal (title, description, location, meal_time, max_reservations, price, created_date) values 
('Huck White Towels','turpis adipiscing lorem vitae mattis nibh ligula nec','7 High Crossing Road', '2020-02-22 19:00:00' , 10, 100.99, '2020-02-21');
insert into meal (title, description, location, meal_time, max_reservations, price, created_date) values 
('Veal', 'Brisket, Provimi, Bone','52 Barnett Center','2020-04-13 20:00:00', 3, 83.95, '2020-04-11');
insert into meal (title, description, location, meal_time, max_reservations, price, created_date) values 
('Ginsing', 'Fresh, consequat morbi a ipsum','2 Lindbergh Pass','2020-01-02 19:30:00', 5, 130.50, '2020-01-01');
insert into meal (title, description, location, meal_time, max_reservations, price, created_date) values 
('Beef', 'Ox Tongue,fermentum justo', '53 Dottie Circle', '2020-11-10 18:00:00', 2, 94.99, '2020-11-10');
insert into meal (title, description, location, meal_time, max_reservations, price, created_date) values 
('Mustard', 'Dijon,suspendisse accumsan', '909 Longview Pass', '2020-07-04 20:30:00', 5, 19.50, '2020-07-03');
insert into meal (title, description, location, meal_time, max_reservations, price, created_date) values 
('Red Snapper', 'Fillet, Skin On', '05656 Sunbrook Way','2020-12-01 19:00:00', 6, 29.99, '2020-12-01');

-- 1.1 Get all meals
SELECT * FROM meal;

-- 1.2 Add a new meal
insert into meal (title, description, location, meal_time, max_reservations, price) values 
('Lamb Rack','Ontario,fusce lacus purus', '69507 Duke Lane', '2019-12-04 18:00:00', 2, 56.99);

-- 1.3 Get a meal with any id, fx 1
SELECT * FROM meal
WHERE id=1;

-- 1.4 Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET description = 'If you a red wine lover, we have one of largest selections of red wines for you to discover - from light bodied to bold and robust, dry to off-dry, young wines to complex Bordeaux blends and even an Amarone-inspired big red.'
WHERE id = 1;

-- 1.5 Delete a meal with any id, fx 10
DELETE FROM meal
WHERE id = 10;

-- Reservation
insert into reservation (number_of_guests, meal_id, created_date) values ('3', 2, '2020-05-02 17:10:20'); 
insert into reservation (number_of_guests, meal_id, created_date) values ('2', 8, '2020-05-12 18:40:40'); 
insert into reservation (number_of_guests, meal_id, created_date) values ('2', 3, '2020-05-22 18:30:30'); 
insert into reservation (number_of_guests, meal_id, created_date) values ('3', 5, '2020-05-23 17:50:40'); 
insert into reservation (number_of_guests, meal_id, created_date) values ('4', 1, '2020-05-23 19:33:05'); 
-- 2.1 Get all reservations
SELECT * FROM reservation;

-- 2.2 Add a new reservation
insert into reservation (number_of_guests, meal_id) values ('3', 2); 

-- 2.3 Get a reservation with any id, fx 1
SELECT * FROM reservation
WHERE id=1;

-- 2.4 Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET number_of_guests = '5'
WHERE id = 1;

-- 2.5 Delete a reservation with any id, fx 10
DELETE FROM reservation
WHERE id = 5;

-- Review
insert into review (title, description, meal_id, stars) values ('Review vine', 'It is was nice', 1, '4');
insert into review (title, description, meal_id, stars) values ('Review Pastry', 'Good Pastry', 2, '3');
insert into review (title, description, meal_id, stars) values ('Review Beef', 'Excellent beef', 7, '5');
insert into review (title, description, meal_id, stars) values ('My Review', 'It is was great', 6, '4');
insert into review (title, description, meal_id, stars) values ('Review Huck White Towels', 'It is not edible', 4, '2');

-- 3.1 Get all reviews
SELECT * FROM review;

-- 3.2 Add a new review
insert into review (title, description, meal_id, stars) values ('Review Pizza', 'It is was great', 2, '5');

-- 3.3 Get a review with any id, fx 1
SELECT * FROM review
WHERE id=1;

-- 3.4 Update a review with any id, fx 5. Update any attribute fx the title or multiple attributes
UPDATE review
SET title = 'My first review'
WHERE id = 5;

-- 3.5 Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 1;

-- Additional queries

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal
WHERE price < 90;

-- Get meals that still has available reservations
SELECT m.id, m.title, m.description, m.location, m.price, SUM(r.number_of_guests) AS total, m.max_reservation
FROM meal m
JOIN reservation r ON m.id = r.meal_id
WHERE m.meal_time >= CURRENT_TIMESTAMP 
GROUP BY m.id
HAVING total < m.max_reservation;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal
WHERE title LIKE '%huck%';

-- Get meals that has been created between two dates
SELECT * FROM meal
WHERE (created_date BETWEEN '2020-01-01 14:15:55' AND '2020-06-01 10:15:55');

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal
LIMIT 5;

-- Get the meals that have good reviews
SELECT m.id, m.title, m.description, m.price, r.stars, r.description FROM meal m
INNER JOIN review r ON m.id = r.meal_id
WHERE r.stars >= 4;

-- Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation
WHERE meal_id = 5
ORDER BY created_date DESC;

-- Sort all meals by average number of stars in the reviews
SELECT m.id, m.title, m.description, m.price, AVG(r.stars) AS average_rating FROM meal m
INNER JOIN review r ON m.id = r.meal_id
GROUP BY m.id
ORDER BY r.stars DESC;

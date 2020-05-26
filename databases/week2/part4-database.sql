CREATE DATABASE `Library` DEFAULT CHARACTER SET utf8mb4 COLLATE=utf8mb4_unicode_ci;
USE `Library`;

SET NAMES utf8mb4;

CREATE TABLE `category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE  `racks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `branch_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `staff` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `staff_position` varchar(255) NOT NULL,
  `staff_name` varchar(255) NOT NULL,
  `staff_email` varchar(255) NOT NULL,
  `staff_address` varchar(255) NOT NULL,
  `staff_phone` varchar(255) NULL,
  `working_place_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_rack_staff` FOREIGN KEY (`working_place_id`) REFERENCES `racks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `book` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `title` varchar(1000) NOT NULL,
  `author` varchar(1000) NOT NULL,
  `book_edition` varchar(1000) NOT NULL,
  `description` text NULL DEFAULT NULL,
   `added_by` int(10) unsigned NOT NULL,
	`category_id` int(10) unsigned NOT NULL,
    `rack_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_staff` FOREIGN KEY (`added_by`) REFERENCES `staff` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_rack` FOREIGN KEY (`rack_id`) REFERENCES `racks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `student_name` varchar(255) NOT NULL,
  `student_email` varchar(255) NOT NULL,
  `student_address` varchar(255) NOT NULL,
  `student_phone` varchar(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE  `issue` (
  `issue_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `book_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_issue_book` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
 `available_status` tinyint(1) NOT NULL DEFAULT '1',
  `added_by` int(10) unsigned NOT NULL,
   CONSTRAINT `fk_issue_staff` FOREIGN KEY (`added_by`) REFERENCES `staff` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  `added_at_timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE  `book_return` (
  `return_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `book_id` int(10) unsigned NOT NULL,
  `student_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_return_book` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_return_student` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
 `issue_date` DATETIME NOT NULL,
 `expiry_date` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Categories
insert into category (category) values ('Action and Adventure');
insert into category (category) values ('Classic');
insert into category (category) values ('Crime and Detective');
insert into category (category) values ('Drama');
insert into category (category) values ('Fantasy');
insert into category (category) values ('Historical Fiction');
insert into category (category) values ('Mystery');
insert into category (category) values ('Romance');
insert into category (category) values ('Biography/Autobiography');
insert into category (category) values ('Periodicals');

-- Racks 
insert into racks (branch_name) values ('SAGO256');
insert into racks (branch_name) values ('BEEF005');
insert into racks (branch_name) values ('BARF875');
insert into racks (branch_name) values ('DRBN001');
insert into racks (branch_name) values ('FSTY890');
insert into racks (branch_name) values ('HFON123');
insert into racks (branch_name) values ('MBNY567');
insert into racks (branch_name) values ('RUYT897');
insert into racks (branch_name) values ('BAHY345');
insert into racks (branch_name) values ('PFTR456');

-- Staff
insert into staff (staff_position, staff_name, staff_email, staff_address, staff_phone, working_place_id) values ('librarian', 'Hedy Gerault', 'hgerault7@nymag.com', 'Ulriksholmvej 68', '176-177-5579', 5);
insert into staff (staff_position, staff_name, staff_email, staff_address, staff_phone, working_place_id) values ('librarian', 'Maryrose Meadows', 'mmeadows5@comcast.net', ' Klintevej 62', '251-524-6594', 2);
insert into staff (staff_position, staff_name, staff_email, staff_address, staff_phone, working_place_id) values ('librarian', 'Aarika Ellingworth', 'aellingworth0@harvard.edu', 'Mikkelenborgvej 64', '483-396-8795', 7);

-- Books
insert into book (title, author, book_edition, description, added_by, category_id, rack_id) values ('The Hobbit', 'J.R.R. Tolkien', 'HOUGHTON MIFFLIN', 'Childrens fantasy novel by English author', 1, 1, 5);
insert into book (title, author, book_edition, description, added_by, category_id, rack_id) values ('1984', 'George Orwell', 'Penguin Books Ltd', 'Dystopian novel by English novelist', 2, 2, 2);

-- Students
insert into student (student_name, student_email, student_address, student_phone) values ('Victoria Kush', 'victoria.v.kush@gmail.com', 'Oldjordsvej 2, 3. tv.', '483-396-8795');
insert into student (student_name, student_email, student_address, student_phone) values ('Fauzia Siddique', 'fauzia.siddique1@spotify.com', 'Hans Schacksvej 2', '635-572-8467');
insert into student (student_name, student_email, student_address, student_phone) values ('Yuka Fukuzawa', 'yuka.fukuzawa@lulu.com', 'Lersey Allé 76', '790-962-8683');
insert into student (student_name, student_email, student_address, student_phone) values ('Anna John George', 'anna.john.george@quantcast.com', 'Kongshøjvej 40', '646-743-6191');
insert into student (student_name, student_email, student_address, student_phone) values ('Lucy Chyzhova ', 'lucy.chyzhova @indiatimes.com', 'Søndre Havnevej 93', '302-678-7931');
insert into student (student_name, student_email, student_address, student_phone) values ('Deepthi Dukka', 'deepthiDukka@comcast.net', 'Nordre Ringvej 15', '251-524-6594');
insert into student (student_name, student_email, student_address, student_phone) values ('Tariq Javid', 'tariq.javid@techcrunch.com', 'Skovvej 54', '316-170-3640');
insert into student (student_name, student_email, student_address, student_phone) values ('Charles Kimani Maina', 'charles@nymag.com', 'Slipager 41', '176-177-5579');
insert into student (student_name, student_email, student_address, student_phone) values ('Afrouz Hakimzadeh ', 'afrouz.hakimzadeh @weebly.com', 'Hersnapvej 83', '891-952-6749');
insert into student (student_name, student_email, student_address, student_phone) values ('Gebremedhin', 'gebremedhin @github.com', 'Eskelundsvej 97', '202-517-6983');

-- Return
insert into book_return (book_id, student_id, issue_date, expiry_date) values (2, 1, '2020-05-03 09:27:20', '2020-06-03');
insert into book_return (book_id, student_id, issue_date, expiry_date) values (1, 1, '2020-05-03 09:29:40', '2020-06-03');
-- Part 2: School database
-- 1.Create a new database containing the following tables:
CREATE DATABASE `school` DEFAULT CHARACTER SET utf8mb4 COLLATE=utf8mb4_unicode_ci;
USE `school`;
-- 1.1 Class: with the columns: id, name, begins (date), ends (date)

SET NAMES utf8mb4;

CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
   `begins` DATETIME NOT NULL,
  `ends` DATETIME NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into class (id, name, begins, ends) values (11, 'hyf-class11', '2019-08-15', '2020-04-29');
insert into class (id, name, begins, ends) values (12, 'hyf-class12', '2019-10-13', '2020-06-28');
insert into class (id, name, begins, ends) values (13, 'hyf-class13',  '2020-01-26', '2020-09-14');
insert into class (id, name, begins, ends) values (14, 'hyf-class14', '2020-04-10', '2020-12-15');
-- 1.2 Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
`class_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Students
insert into student (id, name, email, phone, class_id) values (1, 'Victoria Kush', 'victoria.v.kush@gmail.com', '483-396-8795', '13');
insert into student (id, name, email, phone, class_id) values (2, 'Fauzia Siddique', 'fauzia.siddique1@spotify.com', '635-572-8467', '13');
insert into student (id, name, email, phone, class_id) values (3, 'Yuka Fukuzawa', 'yuka.fukuzawa@lulu.com', '790-962-8683', '13');
insert into student (id, name, email, phone, class_id) values (4, 'Anna John George', 'anna.john.george@quantcast.com', '646-743-6191', '13');
insert into student (id, name, email, phone, class_id) values (5, 'Lucy Chyzhova ', 'lucy.chyzhova @indiatimes.com', '302-678-7931', '13');
insert into student (id, name, email, phone, class_id) values (6, 'Deepthi Dukka', 'deepthiDukka@comcast.net', '251-524-6594', '13');
insert into student (id, name, email, phone, class_id) values (7, 'Tariq Javid', 'tariq.javid@techcrunch.com', '316-170-3640', '13');
insert into student (id, name, email, phone, class_id) values (8, 'Charles Kimani Maina', 'charles@nymag.com', '176-177-5579', '13');
insert into student (id, name, email, phone, class_id) values (9, 'Afrouz Hakimzadeh ', 'afrouz.hakimzadeh @weebly.com', '891-952-6749', '13');
insert into student (id, name, email, phone, class_id) values (10, 'Gebremedhin', 'gebremedhin @github.com', '202-517-6983', '13');
-- 2. If you are done with the above tasks, you can continue with these advanced tasks:
-- 2.2 Create an index on the name column of the student table.
CREATE INDEX name_index
ON student (name);

-- OR
-- ALTER TABLE student
-- ADD INDEX (name);

-- 2.3 Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class
ADD Column status ENUM ('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'ongoing';

UPDATE class
SET status = 'finished'
WHERE id = 11;
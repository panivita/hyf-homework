-- Part 1: Working with tasks
USE hyf_lesson2;

-- 1. Add a task with these attributes: title, description, created, updated, due_date, status_id
INSERT INTO task (title, description, created, updated, due_date, status_id)
VALUES ('my sql', 'Learning sql', NOW(), NOW(), '2021-01-01 12:00:00', 2);

-- 2. Change the title of a task
UPDATE task
SET title = 'Lesson2'
WHERE id = 38;

-- 3. Change a task due date
UPDATE task
SET due_date = '2020-01-06 12:00:00'
WHERE id = 38;

-- 4. Change a task status
UPDATE task
SET status_id = 1
WHERE id = 38;

-- 5. Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 38;

-- 6. Delete a task
DELETE FROM task 
WHERE id = 38;

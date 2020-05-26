-- Part 3: More queries
USE hyf_lesson2;

-- 3.1 Get all the tasks assigned to users whose email ends in @spotify.com

SELECT  t.id, t.title, t.description, t.created, t.updated, t.due_date, t.status_id from user u 
LEFT JOIN user_task u_t ON u.id  = u_t.user_id   
LEFT JOIN task t ON u_t.task_id = t.id  
WHERE u.email LIKE '%@spotify.com'
GROUP BY t.id;

-- 3.2 Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT  t.id, t.title, t.description, t.created, t.updated, t.due_date, t.status_id from user u  
INNER JOIN user_task u_t ON u.id  = u_t.user_id   
INNER JOIN task t ON u_t.task_id = t.id
INNER JOIN status s ON s.id = t.status_id
WHERE u.name = 'Donald Duck' AND s.name = 'Not started'
GROUP BY t.id;

-- Or for optimization
SELECT  t.id, t.title, t.description, t.created, t.updated, t.due_date, t.status_id from user u  
INNER JOIN user_task u_t ON u.id  = u_t.user_id   
INNER JOIN task t ON u_t.task_id = t.id
WHERE u.name = 'Donald Duck' AND t.status_id = 1
GROUP BY t.id;

-- 3.3 Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT  t.id, t.title, t.description, t.created, t.updated, t.due_date, t.status_id from user u  
INNER JOIN user_task u_t ON u.id  = u_t.user_id   
INNER JOIN task t ON u_t.task_id = t.id
WHERE u.name = 'Maryrose Meadows' AND month(t.created) = 09
GROUP BY t.id;

-- 3.4 Find how many tasks were created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT  month(t.created) AS month_created, COUNT(*) AS task_count from task t 
GROUP BY month(t.created)
ORDER BY month(t.created) ASC;
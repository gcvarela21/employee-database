-- Drops the wish_list if it already exists --
DROP DATABASE IF EXISTS Company_Staff_List_db;

-- Create the database wish_list and specified it for use.
CREATE DATABASE  Company_Staff_List_db;

USE  Company_Staff_List_db;

-- Create the table tasks.
CREATE TABLE department (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY (id)
):

CREATE TABLE role (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(30) NOT NULL,
  salary decimal(8, 2) NOT NULL,
  department_id int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id int NOT NULL,
  manager_id int NOT NULL,
  PRIMARY KEY (id)
);
////////////////////////////

USE  Company_Staff_List_db;
INSERT INTO department 
    (name)
    VALUES
    ('sales'),  /* department id = 3315 */
    ('tech'),   /* department id = 3316 */
    ('online'),  /* department id = 3317 */
    ('us team'),  /* department id = 3318 */
    ('canada team'); /* department id = 3319 */

INSERT INTO role
    (title, salary, depaertment_id)
    VALUES
    ('manager', 120000, 3315), /* role [1] = manager [11] */
    ('manager', 120000, 3316),
    ('manager', 120000, 3317),
    ('manager', 120000, 3318),
    ('manager', 120000, 3319),
    ('intern', 40000, 3315),
    ('intern', 40000, 3316),
    ('intern', 40000, 3317),
    ('intern', 40000, 3318),
    ('intern', 40000, 3319),
    ('team lead', 90000, 3315),
    ('team lead', 90000, 3316),
    ('team lead', 90000, 3317),
    ('team lead', 90000, 3318),
    ('team lead', 90000, 3319),
    ('team member', 70000, 3315),
    ('team member', 70000, 3316),
    ('team member', 70000, 3317),
    ('team member', 70000, 3318),
    ('team member', 70000, 3319);


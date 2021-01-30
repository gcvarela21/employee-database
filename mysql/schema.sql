-- create DB, Import work_force.csv

DROP DATABASE IF EXISTS Work_Force_DB;

-- Create the database wish_list and specified it for use.
CREATE DATABASE  Work_Force_DB;

USE   Work_Force_DB;

-- Create the table tasks.
CREATE TABLE Work_Force (
  ref int NOT NULL,
  department_id int NOT NULL,
  department_name varchar(30) NOT NULL,
  role_id int NOT NULL,
  title varchar(30) NOT NULL,
  salary decimal(6, 2) NOT NULL,
  employee_ID int NOT NULL,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  PRIMARY KEY (ref)
);

SELECT * FROM Work_Force;
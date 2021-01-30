DROP DATABASE IF EXISTS Work_Force_DB;
CREATE DATABASE Work_Force_DB;
USE Work_Force_DB;

CREATE TABLE departments (
  id int NOT NULL,
  department_id int NOT NULL,
  department_name varchar(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id int NOT NULL,
  department_id int NOT NULL,
  role_id int NOT NULL,
  title varchar(30) NOT NULL,
  salary decimal(10, 2) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE staff (
  id int NOT NULL,
  department_id int NOT NULL,
  department_name varchar(30) NOT NULL,
  role_id int NOT NULL,
  title varchar(30) NOT NULL,
  salary decimal(10, 2) NOT NULL,
  employee_id int NOT NULL,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  PRIMARY KEY (id)
);


SELECT * FROM  department;
SELECT * FROM  roles;
SELECT * FROM  staff;



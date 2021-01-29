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


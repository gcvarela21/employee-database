CREATE TABLE roles (
  ref int NOT NULL,
  department_id int NOT NULL,
  role_id int NOT NULL,
  title varchar(30) NOT NULL,
  salary decimal(6, 2) NOT NULL,
  PRIMARY KEY (ref)
);
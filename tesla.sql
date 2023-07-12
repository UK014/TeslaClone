CREATE DATABASE Tesla;

USE Tesla;

CREATE TABLE Cars (
  id SERIAL,
  carname varchar(20),
  color varchar(50),
  status_ varchar(20)
);

alter user 'root'@'localhost' identified with mysql_native_password by 'root123';

INSERT INTO Cars(carname,color,status_) VALUES ('Model S','black','sold');
INSERT INTO Cars(carname,color,status_) VALUES ('Model S','black','notsold');
INSERT INTO Cars(carname,color,status_) VALUES ('Model S','red','notsold');
INSERT INTO Cars(carname,color,status_) VALUES ('Model S','blue','notsold');
INSERT INTO Cars(carname,color,status_) VALUES ('Model S','white','sold');
INSERT INTO Cars(carname,color,status_) VALUES ('Model S','green','notsold');




SELECT * FROM Cars


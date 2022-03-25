DROP DATABASE IF EXISTS movies;

CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(20) NOT NULL,
  description VARCHAR(200) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO movies (title, description)
VALUES ('Rambo', 'they drew first blood');
INSERT INTO movies (title, description)
VALUES ('Django', 'something is happening');
INSERT INTO movies (title, description)
VALUES ('Idk', 'I dont know');
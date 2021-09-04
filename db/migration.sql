-- -----------------------------------------------------
-- Schema plants
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `plants` ;
CREATE SCHEMA IF NOT EXISTS `plants` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `plants` ;



-- ************************************** `Users`

DROP TABLE IF EXISTS `plants`.`Users`;

CREATE TABLE IF NOT EXISTS `plants`.`Users`
(
 `id`       integer NOT NULL AUTO_INCREMENT ,
 `name`     varchar(200) NOT NULL ,
 `email`    varchar(200) NOT NULL ,
 `password` varchar(45) NOT NULL ,
 `birthday` date NOT NULL ,
 `tel`      varchar(45) NOT NULL ,
 `isAdmin`  tinyint NOT NULL ,

PRIMARY KEY (`id`)
);


-- ************************************** `Plants`

DROP TABLE IF EXISTS `plants`.`Plants`;

CREATE TABLE IF NOT EXISTS `plants`.`Plants`
(
 `name`        varchar(200) NOT NULL ,
 `type`        varchar(100) NOT NULL ,
 `description` varchar(500) NOT NULL ,
 `pictureUrl`  varchar(500) NOT NULL ,
 `pictureAlt`  varchar(500) NOT NULL ,
 `facility`    integer NOT NULL ,
 `qtdWater`    integer NOT NULL ,
 `isApproved`  tinyint NOT NULL ,
 `id`          integer NOT NULL AUTO_INCREMENT ,

PRIMARY KEY (`id`)
);


-- ************************************** `FavPlants`

DROP TABLE IF EXISTS `plants`.`FavPlants`;

CREATE TABLE IF NOT EXISTS `plants`.`FavPlants`
(
 `id`    integer NOT NULL AUTO_INCREMENT ,
 `user`  integer NOT NULL ,
 `plant` integer NOT NULL ,

PRIMARY KEY (`id`),
KEY `fkIdx_24` (`user`),
CONSTRAINT `FK_22` FOREIGN KEY `fkIdx_24` (`user`) REFERENCES `plants`.`Users` (`id`),
KEY `fkIdx_30` (`plant`),
CONSTRAINT `FK_28` FOREIGN KEY `fkIdx_30` (`plant`) REFERENCES `plants`.`Plants` (`id`)
);



-- ************************************** `Commentaries`

DROP TABLE IF EXISTS `plants`.`Commentaries`;

CREATE TABLE IF NOT EXISTS `plants`.`Commentaries`
(
 `id`    integer NOT NULL AUTO_INCREMENT ,
 `plant` integer NOT NULL ,
 `user`  integer NOT NULL ,
 `text`  varchar(500) NOT NULL ,

PRIMARY KEY (`id`),
KEY `fkIdx_36` (`plant`),
CONSTRAINT `FK_34` FOREIGN KEY `fkIdx_36` (`plant`) REFERENCES `plants`.`Plants` (`id`),
KEY `fkIdx_39` (`user`),
CONSTRAINT `FK_37` FOREIGN KEY `fkIdx_39` (`user`) REFERENCES `plants`.`Users` (`id`)
);


# This is a fix for InnoDB in MySQL >= 4.1.x
# It "suspends judgement" for fkey relationships until are tables are set.
SET FOREIGN_KEY_CHECKS = 0;

-- ---------------------------------------------------------------------
-- customer
-- ---------------------------------------------------------------------

DROP TABLE IF EXISTS `customer`;

CREATE TABLE `customer`
(
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(45) NOT NULL,
    `first_name` VARCHAR(21) NOT NULL,
    `last_name` VARCHAR(31) NOT NULL,
    `password` VARCHAR(32) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `modified_at` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `email_UNIQUE` (`email`)
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- exercise
-- ---------------------------------------------------------------------

DROP TABLE IF EXISTS `exercise`;

CREATE TABLE `exercise`
(
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(51) NOT NULL,
    `muscle_group_id` INTEGER NOT NULL,
    `created_at` DATETIME NOT NULL,
    `modified_at` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `muscle_group_fk_idx` (`muscle_group_id`),
    CONSTRAINT `muscle_group_fk`
        FOREIGN KEY (`muscle_group_id`)
        REFERENCES `muscle_group` (`id`)
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- muscle_group
-- ---------------------------------------------------------------------

DROP TABLE IF EXISTS `muscle_group`;

CREATE TABLE `muscle_group`
(
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(21) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `modified_at` DATETIME NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- training
-- ---------------------------------------------------------------------

DROP TABLE IF EXISTS `training`;

CREATE TABLE `training`
(
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` CHAR NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `exercise_id` INTEGER NOT NULL,
    `created_at` DATETIME NOT NULL,
    `modified_at` DATETIME NOT NULL,
    `exercise_id1` INTEGER NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `customer_id_fk_idx` (`customer_id`),
    CONSTRAINT `customer_id_fk`
        FOREIGN KEY (`customer_id`)
        REFERENCES `customer` (`id`)
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- training_exercise
-- ---------------------------------------------------------------------

DROP TABLE IF EXISTS `training_exercise`;

CREATE TABLE `training_exercise`
(
    `training_id` INTEGER NOT NULL,
    `exercise_id` INTEGER NOT NULL,
    INDEX `exercise_id_fk_idx` (`exercise_id`),
    INDEX `training_id_fk_idx` (`training_id`),
    CONSTRAINT `exercise_id_fk`
        FOREIGN KEY (`exercise_id`)
        REFERENCES `exercise` (`id`),
    CONSTRAINT `training_id_fk`
        FOREIGN KEY (`training_id`)
        REFERENCES `training` (`id`)
) ENGINE=InnoDB;

# This restores the fkey checks, after having unset them earlier
SET FOREIGN_KEY_CHECKS = 1;

-- CREATE DATABASE  IF NOT EXISTS `purchase_tracker`;
DROP DATABASE IF EXISTS `purchase_tracker`;
CREATE DATABASE  IF NOT EXISTS `purchase_tracker` character set utf8mb4 collate utf8mb4_0900_ai_ci;
SET NAMES 'utf8mb4';
USE `purchase_tracker`;

DROP TABLE IF EXISTS `item`;
CREATE TABLE `item` (
  `id` int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO
  `item` (name, description, image)
VALUES
("Carotte", "legume", "https://images.unsplash.com/photo-1635774855751-09365b3071ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=290&q=80"),
("Poireau", "legume", "https://images.unsplash.com/photo-1613782805532-cdd2cf1f5b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
("électricité", "une facture mensuelle d'electricité", "https://images.unsplash.com/photo-1413882353314-73389f63b6fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");

DROP TABLE IF EXISTS `purchase`;
CREATE TABLE `purchase` (
  `id` int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `date` DATE NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `item_id` int NOT NULL
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO
  `purchase` (date, price, item_id)
VALUES
('2022-07-18', 2.40, 1),
('2022-07-10', 2.45, 1),
('2022-03-04', 55, 3),
('2022-04-12', 2.40, 2);
 

ALTER TABLE `purchase` ADD CONSTRAINT `purchase_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `item` (`id`)
ON DELETE CASCADE;
ALTER TABLE `purchase`ADD FOREIGN KEY (`item_id`) REFERENCES `item`(`id`);
-- ALTER TABLE `carousel` ADD FOREIGN KEY (`id`) REFERENCES `formula` (`carousel_id`);

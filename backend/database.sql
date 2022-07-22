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
("Carotte", "Légume", "uploads/items/image-1658432575076-938684754.jpeg"),
("Fraise", "Fruit", "uploads/items/image-1658432595424-221884288.jpeg"),
("Poireau", "Légume", "uploads/items/image-1658432645006-704182821.jpeg"),
("Electricité", "Energie", "uploads/items/image-1658432618490-166537509.jpeg");

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
('2022-01-22',1.56,1),
('2022-02-12',1.6,1),
('2022-03-02',1.6,1),
('2022-05-20',1.92,1),
('2022-06-15',2.20,1),
('2022-06-12',10.01,2),
('2022-06-30',12.03,2),
('2022-07-20',13.50,2),
('2022-01-15',55.00,3),
('2022-02-15',55.00,3),
('2022-03-15',55.00,3),
('2022-04-15',55.00,3),
('2022-05-15',58.00,3),
('2022-01-23',5.31,4),
('2022-02-01',5.89,4),
('2022-04-12',4.90,4),
('2022-05-04',5.10,4);
 

ALTER TABLE `purchase` ADD CONSTRAINT `purchase_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `item` (`id`)
ON DELETE CASCADE;
ALTER TABLE `purchase`ADD FOREIGN KEY (`item_id`) REFERENCES `item`(`id`);
-- ALTER TABLE `carousel` ADD FOREIGN KEY (`id`) REFERENCES `formula` (`carousel_id`);

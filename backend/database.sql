-- CREATE DATABASE  IF NOT EXISTS `purchase_tracker`;
DROP DATABASE IF EXISTS `purchase_tracker`;
CREATE DATABASE  IF NOT EXISTS `purchase_tracker` character set utf8mb4 collate utf8mb4_0900_ai_ci;
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
("carotte", "legume", "https://cdn-icons-png.flaticon.com/512/1717/1717238.png"),
("poireau", "legume", "https://cdn-icons-png.flaticon.com/512/1135/1135528.png"),
("électricité", "une facture mensuelle d'electricité", "https://cdn-icons.flaticon.com/png/512/2060/premium/2060397.png?token=exp=1658174354~hmac=bb9bb8e1371403718dd25d833ba07f54");

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

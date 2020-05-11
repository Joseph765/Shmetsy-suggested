CREATE DATABASE IF NOT EXISTS suggested;

USE suggested;

DROP TABLE IF EXISTS `products`;

CREATE TABLE IF NOT EXISTS `products` (
  `id` INTEGER AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `price` TEXT NOT NULL,
  `shipping` TEXT NOT NULL,
  `shop_id` INTEGER,
  `image_url` TEXT NOT NULL,
  PRIMARY KEY(id)
);

DROP TABLE IF EXISTS `shops`;

CREATE TABLE IF NOT EXISTS `shops` (
  `id` INTEGER AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `date` TEXT NOT NULL,
  `sales` TEXT NOT NULL,
  `location` TEXT NOT NULL,
  `profile_img_url` TEXT NOT NULL,
  `items` TEXT NOT NULL,
  UNIQUE KEY (`id`)
);

INSERT INTO shops (id, name, date, sales, location, profile_img_url, items)
VALUES (1, "Masks-R-Us", "2020", "102496", "San Fransisco, California", "https://imgforfec.s3.us-east-2.amazonaws.com/profile1.jpg", "448");

INSERT INTO products (id, name, price, shipping, shop_id, image_url)
VALUES (1, "Face mask", "$35.46", "FREE shipping", 1, "https://imgforfec.s3.us-east-2.amazonaws.com/1.jpg");
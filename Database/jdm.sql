-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 14 Jan 2016 pada 09.11
-- Versi Server: 5.6.21
-- PHP Version: 5.5.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `jdm`
--


CREATE TABLE IF NOT EXISTS `user` (
`id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `token` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `products` (
`label_id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(50) DEFAULT NULL,
  `route` boolean DEFAULT NULL,
  PRIMARY KEY (`label_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `category` (
`label_id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(50) DEFAULT NULL,
  `route` boolean DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`label_id`),
  FOREIGN KEY (product_id) REFERENCES products(label_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `brand` (
  `label_id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(50) DEFAULT NULL,
  `route` boolean DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`label_id`),
  FOREIGN KEY (category_id) REFERENCES category(label_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `item` (
`label_id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(50) DEFAULT NULL,
  `route` boolean DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`label_id`),
  FOREIGN KEY (brand_id) REFERENCES brand(label_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO `user` (`name`, `email`, `password`, `token`) VALUES
('jon', 'kenchie@wopmail.com', 'password', 'asdafasasda');


INSERT INTO `products` (`label_id`, `label`, `route`) VALUES
('Dames', true);

INSERT INTO `category` (`label`, `route`, `product_id`) VALUES
('Accessories', true, 0);

INSERT INTO `brand` (`label`, `route`, `category_id`) VALUES
('Handshoenen', null, 2),
('Mutsen and hoden', null, 2),
('Portemones', null, 2),
('Riemen', null, 2),
('Sieraden & Horloges', true, 2),
('Sjaals', null, 2),
('Tassen', true, 2);

INSERT INTO `item` (`label`, `route`, `brand_id`) VALUES
('Armbanden', null, 12),
('Broches and pins', null, 12),
('Horloges', null, 12),
('Kettigen', null, 12),
('Oorbelien', null, 12),
('Ringen', null,12),
('Clutches', null, 14)
('Handtassen', null, 14)
('Rugzakken', null, 14);


--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


-- STORED PROCEDURES
sp_productsCat()
BEGIN
	SELECT products.label, products.route, product_id, category.label FROM products INNER JOIN 
  	category ON products.label_id = category.product_id;
END

get_category_child()
BEGIN
  SELECT brand.label, brand.route, category_id FROM brand INNER JOIN 
  	category ON brand.category_id = category.label_id
  END

get_brand_child()
BEGIN
	SELECT item.label, item.route, brand_id FROM item INNER JOIN 
  	brand ON item.brand_id = brand.label_id;
END
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
  `parent_id` int(11) DEFAULT NULL AUTO_INCREMENT,,
  PRIMARY KEY (`label_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `category` (
`id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(50) DEFAULT NULL,
  `route` boolean DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `brand` (
`id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(50) DEFAULT NULL,
  `route` boolean DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `item` (
`id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(50) DEFAULT NULL,
  `route` boolean DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO `user` (`name`, `email`, `password`, `token`) VALUES
('jon', 'kenchie@wopmail.com', 'password', 'asdafasasda'),
('paul', 'kenchie@wopmail.com', 'password', 'asfafagabgcvx'),
('kenchie', 'kenchie@wopmail.com', 'password', 'mllklkkoewpwmvxvx')


INSERT INTO `person` (`id`, `name`, `address`, `hobbies`) VALUES
(1, 'Herudi', 'Majalengka Kota', 'Guitarist'),
(3, 'Kasja', 'Majalengka', 'Drummer'),
(4, 'Yayan', 'Bandung', 'Gool Keeper'),
(6, 'Rudy', 'Bogor', 'Guitarist'),
(10, 'Angeline', 'Jakarta', 'Pingpong'),
(19, 'Herudi', 'Majalengka', 'Hacking'),
(20, 'Herudi Sahimar', 'Majalengka', 'Programming');

INSERT INTO `products` (`label_id`, `label`, `route`, `parent_id`) VALUES
('Dames', null, 0),

INSERT INTO `category` (`label`, `route`, `parent_id`) VALUES
('Accessories', null, 0),

INSERT INTO `brand` (`label`, `route`, `parent_id`) VALUES
('Handshoenen', null, 1),
('Mutsen and hoden', null, 2),
('Portemones', null, 3),
('Riemen', null, 4),
('Sieraden & Horloges', true, 5),
('Sjaals', null, 6),
('Tassen', true, 7)

INSERT INTO `item` (`label`, `route`, `parent_id`) VALUES
('Armbanden', null, 4),
('Broches and pins', null, 4),
('Horloges', null, 4),
('Kettigen', null, 4),
('Oorbelien', null, 4),
('Ringen', null,4),
('Clutches', null, 6)
('Handtassen', null, 6)
('Rugzakken', null, 6)


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

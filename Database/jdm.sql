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
`id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `token` varchar(150) DEFAULT NULL,
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;


CREATE TABLE IF NOT EXISTS `products` (
`id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `route` boolean DEFAULT NULL,
  `data` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

INSERT INTO `user` (`id`, `name`, `email`, `password`, `token`) VALUES
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


INSERT INTO `products` (`id`, `name`, `route`, `data`) VALUES
(1, 'Dames', null, 0),
(2,'Kasja', null, 3),
(3,'Yayan', null, 5);


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

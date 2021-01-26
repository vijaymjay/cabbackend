-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2021 at 08:04 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nola`
--

-- --------------------------------------------------------

--
-- Table structure for table `cab`
--

CREATE TABLE `cab` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lat` float NOT NULL,
  `lon` float NOT NULL,
  `available` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cab`
--

INSERT INTO `cab` (`id`, `name`, `lat`, `lon`, `available`) VALUES
(1, 'PY-01-B-233', 12.9657, 80.1726, 1),
(2, 'PY-01-C-234', 12.9635, 80.1718, 0),
(3, 'PY-02-D-235', 12.9656, 80.1698, 1),
(4, 'PY-03-D-336', 12.9636, 80.1691, 1),
(5, 'PY-04-E-363', 12.9645, 80.1731, 1);

-- --------------------------------------------------------

--
-- Table structure for table `cab_history`
--

CREATE TABLE `cab_history` (
  `id` int(11) NOT NULL,
  `cab_id` int(11) NOT NULL,
  `status` varchar(20) NOT NULL,
  `booked_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cab_history`
--

INSERT INTO `cab_history` (`id`, `cab_id`, `status`, `booked_datetime`) VALUES
(1, 1, 'Unbooked', '2021-01-24 09:50:39'),
(2, 1, 'Booked', '2021-01-24 09:50:39'),
(3, 1, 'Unbooked', '2021-01-24 09:50:39'),
(4, 2, 'Unbooked', '2021-01-24 10:13:47'),
(5, 2, 'Booked', '2021-01-24 10:13:47');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `lat` float NOT NULL,
  `lon` float NOT NULL,
  `in_ride` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `lat`, `lon`, `in_ride`) VALUES
(1, 'Ganesh', 12.9646, 80.1714, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cab`
--
ALTER TABLE `cab`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cab_history`
--
ALTER TABLE `cab_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cab`
--
ALTER TABLE `cab`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `cab_history`
--
ALTER TABLE `cab_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

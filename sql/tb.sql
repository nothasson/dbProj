-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: teacher
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbcourse`
--

DROP TABLE IF EXISTS `tbcourse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tbcourse` (
  `cNO` varchar(16) NOT NULL,
  `cName` varchar(16) DEFAULT NULL,
  `cSchool` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`cNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbcourse`
--

LOCK TABLES `tbcourse` WRITE;
/*!40000 ALTER TABLE `tbcourse` DISABLE KEYS */;
INSERT INTO `tbcourse` VALUES ('101','楂樼瓑鏁板','璁＄畻鏈轰笓涓?),('102','鏁版嵁搴?,'璁＄畻鏈轰笓涓?),('103','楂樼瓑浠ｆ暟','鏁板涓撲笟');
/*!40000 ALTER TABLE `tbcourse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbpower`
--

DROP TABLE IF EXISTS `tbpower`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tbpower` (
  `username` varchar(16) DEFAULT NULL,
  `powerT` tinyint(1) DEFAULT NULL,
  `powerC` tinyint(1) DEFAULT NULL,
  `powerTC` tinyint(1) DEFAULT NULL,
  `powerST` tinyint(1) DEFAULT NULL,
  `powerSC` tinyint(1) DEFAULT NULL,
  KEY `username` (`username`),
  CONSTRAINT `tbpower_ibfk_1` FOREIGN KEY (`username`) REFERENCES `tbuser` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbpower`
--

LOCK TABLES `tbpower` WRITE;
/*!40000 ALTER TABLE `tbpower` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbpower` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbteacher`
--

DROP TABLE IF EXISTS `tbteacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tbteacher` (
  `tNo` varchar(16) NOT NULL,
  `tName` varchar(16) DEFAULT NULL,
  `tEducation` varchar(16) DEFAULT NULL,
  `tTitle` varchar(16) DEFAULT NULL,
  `tSchool` varchar(16) DEFAULT NULL,
  `tTime` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`tNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbteacher`
--

LOCK TABLES `tbteacher` WRITE;
/*!40000 ALTER TABLE `tbteacher` DISABLE KEYS */;
INSERT INTO `tbteacher` VALUES ('1004','灏忕櫧','鏈','璁插笀','缃戠粶宸ョ▼涓撲笟','2014-10-3'),('1005','灏忛粦','鏈','璁插笀','缃戠粶宸ョ▼涓撲笟','2004-10-3'),('2001','寮犲叓','鍗氬＋','鏁欐巿','璁＄畻鏈轰笓涓?,'2001-07-29'),('2002','鏉庡洓','纭曞＋','璁插笀','璁＄畻鏈轰笓涓?,'1999-11-22'),('2101','鐜嬪叚','鍗氬＋','鍓暀鎺?,'鏁板涓撲笟','2003-09-21');
/*!40000 ALTER TABLE `tbteacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbteacour`
--

DROP TABLE IF EXISTS `tbteacour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tbteacour` (
  `tNo` varchar(16) DEFAULT NULL,
  `cNo` varchar(16) DEFAULT NULL,
  `tcMoney` int(11) DEFAULT NULL,
  `tcTimes` int(11) DEFAULT NULL,
  KEY `tNo` (`tNo`),
  KEY `cNo` (`cNo`),
  CONSTRAINT `tbteacour_ibfk_1` FOREIGN KEY (`tNo`) REFERENCES `tbteacher` (`tno`),
  CONSTRAINT `tbteacour_ibfk_2` FOREIGN KEY (`cNo`) REFERENCES `tbcourse` (`cno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbteacour`
--

LOCK TABLES `tbteacour` WRITE;
/*!40000 ALTER TABLE `tbteacour` DISABLE KEYS */;
INSERT INTO `tbteacour` VALUES ('2001','101',500,2),('2001','102',600,2),('2002','101',300,4),('2101','103',400,3);
/*!40000 ALTER TABLE `tbteacour` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbuser`
--

DROP TABLE IF EXISTS `tbuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tbuser` (
  `username` varchar(16) NOT NULL,
  `password` varchar(32) DEFAULT NULL,
  `type` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbuser`
--

LOCK TABLES `tbuser` WRITE;
/*!40000 ALTER TABLE `tbuser` DISABLE KEYS */;
INSERT INTO `tbuser` VALUES ('root','ff9830c42660c1dd1942844f8069b74a',1);
/*!40000 ALTER TABLE `tbuser` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-03 18:31:49

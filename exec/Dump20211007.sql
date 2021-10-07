-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: j5a107.p.ssafy.io    Database: ds
-- ------------------------------------------------------
-- Server version	8.0.26-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

Create schema `ds`;
use ds;

--
-- Table structure for table `GAME`
--

DROP TABLE IF EXISTS `GAME`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `GAME` (
  `gameCode` int NOT NULL,
  `gameName` varchar(20) NOT NULL,
  PRIMARY KEY (`gameCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GAME`
--

LOCK TABLES `GAME` WRITE;
/*!40000 ALTER TABLE `GAME` DISABLE KEYS */;
INSERT INTO `GAME` VALUES (1,'스택'),(2,'큐'),(3,'그래프'),(4,'트리'),(5,'정렬'),(6,'이분탐색');
/*!40000 ALTER TABLE `GAME` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `STAGE`
--

DROP TABLE IF EXISTS `STAGE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `STAGE` (
  `stageId` bigint NOT NULL AUTO_INCREMENT,
  `userId` varchar(20) DEFAULT NULL,
  `gameCode` int DEFAULT NULL,
  `curStage` int DEFAULT '0',
  PRIMARY KEY (`stageId`),
  KEY `userId` (`userId`),
  KEY `gameCode` (`gameCode`),
  CONSTRAINT `STAGE_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `USER` (`userId`),
  CONSTRAINT `STAGE_ibfk_2` FOREIGN KEY (`gameCode`) REFERENCES `GAME` (`gameCode`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `STAGE`
--

LOCK TABLES `STAGE` WRITE;
/*!40000 ALTER TABLE `STAGE` DISABLE KEYS */;
INSERT INTO `STAGE` VALUES (7,'ssafy444',1,4),(8,'ssafy123',1,4),(9,'ssafy123',2,1),(10,'ssafy123',5,2),(11,'ssafy123',6,4),(13,'bsp777',1,2),(14,'bsp777',4,2),(15,'bsp777',6,2),(16,'ssafy444',6,1),(17,'ssafy123',4,4),(22,'simon',4,4),(23,'simon',1,4);
/*!40000 ALTER TABLE `STAGE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USER`
--

DROP TABLE IF EXISTS `USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USER` (
  `userId` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `userNickName` varchar(20) NOT NULL,
  `userTel` varchar(13) DEFAULT NULL,
  `userEmail` varchar(255) DEFAULT NULL,
  `profileImg` varchar(255) DEFAULT NULL,
  `refreshToken` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USER`
--

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;
INSERT INTO `USER` VALUES ('ab','aaaaaaaa1','ab','ab','','aa@aa',NULL,NULL),('abc','asdfasdf1','abc','abc','','',NULL,NULL),('bsp777','park0405','조의사','조의상','01021712342','bsp777@hanmail.net',NULL,'eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjMzNTE2MjU2ODYwLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjMzNjI0MjU2LCJpYXQiOjE2MzM1MTYyNTYsInVzZXJJZCI6ImJzcDc3NyJ9.rW58HSDM6aPjea4JRjJfbz7vRImVMUSuNxh-1ptkhf4'),('simon','simon123','simon','simon','000000000','simon@ssafy.com',NULL,'eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjMzNTMwMDE0NjkwLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjMzNjM4MDE0LCJpYXQiOjE2MzM1MzAwMTQsInVzZXJJZCI6InNpbW9uIn0._jlmJfxU3sAH2TiHoDvpK-bVd144NlH_eSUAYL6aT20'),('ssafy111','ssafy111','싸피1','싸피111','','',NULL,'eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjMzNTY3NzQ1MzU5LCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjMzNjc1NzQ1LCJpYXQiOjE2MzM1Njc3NDUsInVzZXJJZCI6InNzYWZ5MTExIn0.qoU77GloSaBXxwRGoDzHt1KcAVlJWitDvqgDTomip6Q'),('ssafy123','qwer1234','dd','ssaft','','',NULL,'eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjMzNTIzNTY3MDk0LCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjMzNjMxNTY3LCJpYXQiOjE2MzM1MjM1NjcsInVzZXJJZCI6InNzYWZ5MTIzIn0.gsgoMwg3U9C0msoBhXATqBDgDAyptKtK5ka_7z5F0OU'),('ssafy444','ssafy444','ssafy444','ssafy444','','',NULL,'eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjMzNTE2ODY0Nzc5LCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjMzNjI0ODY0LCJpYXQiOjE2MzM1MTY4NjQsInVzZXJJZCI6InNzYWZ5NDQ0In0.Y6KTtVEpof0nyNWgd-2gEF1jpqdBYALxfc62hKL3bTU'),('ssafy666','ssafy666','육육육','조의상1','11111','123123@naver.com1',NULL,'eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjMzMzY4MjY0MzQ1LCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjMzNDc2MjY0LCJpYXQiOjE2MzMzNjgyNjQsInVzZXJJZCI6InNzYWZ5NjY2In0.zxbMUuKoI5f8idUIP1cxIr2p5_QI0rzRSe4B23JeVjM');
/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-07 10:20:50

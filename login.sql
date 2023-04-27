-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: login
-- ------------------------------------------------------
-- Server version	8.0.32

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

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `url` varchar(225) NOT NULL,
  `description` varchar(45) NOT NULL,
  `address` varchar(45) DEFAULT NULL,
  `time` varchar(25) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `score` decimal(2,1) NOT NULL,
  `collect` varchar(45) NOT NULL,
  `location` varchar(45) NOT NULL,
  `locationurl` varchar(225) NOT NULL,
  `month` varchar(45) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'香港海洋公园','https://p1-q.mafengwo.net/s12/M00/10/DD/wKgED1wltkyACBIyABMKdxG_pmY06.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100','集海陆动物展览、机动游戏和大型表演于一身','香港香港岛南区黄竹坑道180号','10:00-18:00','+852-39232323',4.3,'6','香港','http://image.nbd.com.cn/uploads/articles/images/728047/500979398.jpg','1',399),(2,'香港迪士尼乐园','https://p1-q.mafengwo.net/s12/M00/28/10/wKgED1v1jXWAOD2NAF7RWRA0N6s10.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100','全情投入不一样的Duffy Fanstasy体验','香港大屿山香港迪士尼乐园度假区','9:00-17:00','+852-35503388',4.7,'10','香港','http://image.nbd.com.cn/uploads/articles/images/728047/500979398.jpg','1',513),(3,'香港天迹100观景台','https://p1-q.mafengwo.net/s11/M00/02/AB/wKgBEFti2OuAPN_oACVbkzGtxVk38.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100','来自故宫博物馆的九百件珍贵文物','香港九龙西九文化区博物馆道8号','10:00-18:00','+852-22000217',4.4,'6','香港','http://image.nbd.com.cn/uploads/articles/images/728047/500979398.jpg','1',46),(4,'山顶缆车','https://p1-q.mafengwo.net/s11/M00/AA/D1/wKgBEFqVaXCANqGoADKzGKyLj2o59.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100','与世界各地动物亲密接触','香港中环花园道山顶缆车站','7:00-22:00','+852-25220922',4.5,'8','香港','http://image.nbd.com.cn/uploads/articles/images/728047/500979398.jpg','1',86),(5,'香港杜莎夫人蜡像馆','https://p1-q.mafengwo.net/s14/M00/F7/0C/wKgE2l1I89OAexogAEakwL19k_g800.JPG?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100','寓教于乐的必游之地','香港山顶道128号凌霄阁P101号铺','9:00-17:00','+852 28496966',4.8,'10','香港','http://image.nbd.com.cn/uploads/articles/images/728047/500979398.jpg','1',30),(6,'香港太空馆','https://p1-q.mafengwo.net/s13/M00/38/07/wKgEaVyV--aAMrFGADCesjsHw6k71.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100','塑造完整宇宙观','香港九龙尖沙咀梳士巴利道10号','9:00-17:00','+852 21437300',4.2,'5','香港','http://image.nbd.com.cn/uploads/articles/images/728047/500979398.jpg','1',300),(7,'上海迪士尼','https://i.postimg.cc/qq0b6bP9/image.png','充满欢乐童真的梦幻乐园','上海市浦东新区川沙新镇黄赵路310号','9:00-17:00','4001800000',4.7,'6','上海','http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/04/ChMkJlYl1dWIZLkNAALYIrs03sYAAD4rQC3cgAAAtg6240.jpg','4',399),(8,'上海海昌海洋公园','https://i.postimg.cc/T3ZcWNmC/image.png','看珍稀海洋生物玩刺激项目','上海市浦东新区南汇新城镇银飞路166号','9:00-17:00','021-50606666',4.6,'3','上海','http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/04/ChMkJlYl1dWIZLkNAALYIrs03sYAAD4rQC3cgAAAtg6240.jpg','4',130),(9,'上海东方明珠','https://i.postimg.cc/bJPHmGmn/image.png','东方明珠与外滩隔江相望','上海市浦东新区陆家嘴世纪大道1号','9:00-17:00','021-58792888',4.7,'6','上海','http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/04/ChMkJlYl1dWIZLkNAALYIrs03sYAAD4rQC3cgAAAtg6240.jpg','4',20),(10,'上海野生动物园','https://i.postimg.cc/4d1vqJ0S/image.png','与世界各地动物亲密接触','上海市浦东新区南六公路178号','9:00-17:00','021-58036000',4.8,'8','上海','http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/04/ChMkJlYl1dWIZLkNAALYIrs03sYAAD4rQC3cgAAAtg6240.jpg','4',100),(11,'上海科技馆','https://i.postimg.cc/x1kR8VkX/image.png','寓教于乐的必游之地','上海市浦东新区世纪大道2000号','9:00-17:00','021-68622000',4.7,'10','上海','http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/04/ChMkJlYl1dWIZLkNAALYIrs03sYAAD4rQC3cgAAAtg6240.jpg','4',30),(12,'上海天文馆','https://i.postimg.cc/c4khdLJq/image.png','塑造完整宇宙观','上海市浦东新区南汇新城镇临港大道380','9:00-17:00','021-50908563',4.5,'4','上海','http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/04/ChMkJlYl1dWIZLkNAALYIrs03sYAAD4rQC3cgAAAtg6240.jpg','4',40);
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `myorder`
--

DROP TABLE IF EXISTS `myorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `myorder` (
  `orderid` varchar(45) NOT NULL,
  `workid` int NOT NULL,
  `status` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `locationname` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `kind` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `number` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `numStr` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `date` varchar(45) CHARACTER SET utf32 DEFAULT NULL,
  `username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userphone` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `usercardid` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `paydate` datetime DEFAULT NULL,
  `price` int DEFAULT NULL,
  `coupon` int DEFAULT NULL,
  `priceid` int DEFAULT NULL,
  PRIMARY KEY (`orderid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `myorder`
--

LOCK TABLES `myorder` WRITE;
/*!40000 ALTER TABLE `myorder` DISABLE KEYS */;
INSERT INTO `myorder` VALUES ('168252172626301306',1306,'未支付','上海海昌海洋公园','老人票','1',' 老人票1张 ','2023-04-26','杨婷','19821660627','321023199904240249',NULL,120,20,23);
/*!40000 ALTER TABLE `myorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `picture`
--

DROP TABLE IF EXISTS `picture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `picture` (
  `authorid` int NOT NULL,
  `theme` varchar(45) DEFAULT NULL,
  `url` varchar(225) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `thumb` int DEFAULT NULL,
  PRIMARY KEY (`authorid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `picture`
--

LOCK TABLES `picture` WRITE;
/*!40000 ALTER TABLE `picture` DISABLE KEYS */;
INSERT INTO `picture` VALUES (1111,'携程美景','https://wx1.sinaimg.cn/mw690/008qmJNXgy1hd8nw4dnxoj30mu0h5gzu.jpg','小携',23),(2222,'美食聚餐','https://wx2.sinaimg.cn/mw690/008qmJNXgy1hd8nw2tcvij30n00h94ga.jpg','小旅',6),(3333,'携程美景','https://wx1.sinaimg.cn/mw690/008qmJNXgy1hd8nw4v0h6j30n00h9nae.jpg','小程',9),(4444,'美食聚餐','https://wx2.sinaimg.cn/mw690/008qmJNXgy1hd8nw3ea26j30n00h9wri.jpg','小游',5);
/*!40000 ALTER TABLE `picture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `date` date DEFAULT NULL,
  `stock` int NOT NULL,
  `kind` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (1,'香港海洋公园','2023-04-27',10,'成人票','399'),(2,'香港海洋公园','2023-04-27',5,'老人票','299'),(3,'香港海洋公园','2023-04-27',2,'儿童票','259'),(4,'香港迪士尼乐园','2023-04-27',6,'成人票','513'),(5,'香港迪士尼乐园','2023-04-27',6,'老人票','313'),(6,'香港迪士尼乐园','2023-04-27',6,'儿童票','213'),(7,'香港天迹100观景台','2023-04-27',6,'成人票','46'),(8,'香港天迹100观景台','2023-04-27',6,'老人票','36'),(9,'香港天迹100观景台','2023-04-27',6,'儿童票','26'),(10,'山顶缆车','2023-04-27',6,'成人票','86'),(11,'山顶缆车','2023-04-27',6,'老人票','56'),(12,'山顶缆车','2023-04-27',6,'儿童票','46'),(13,'香港杜莎夫人蜡像馆','2023-04-27',6,'成人票','30'),(14,'香港杜莎夫人蜡像馆','2023-04-27',6,'老人票','25'),(15,'香港杜莎夫人蜡像馆','2023-04-27',6,'儿童票','20'),(16,'香港太空馆','2023-04-27',6,'成人票','300'),(17,'香港太空馆','2023-04-27',6,'老人票','220'),(18,'香港太空馆','2023-04-27',6,'儿童票','200'),(19,'上海迪士尼','2023-04-27',6,'成人票','399'),(20,'上海迪士尼','2023-04-27',3,'老人票','299'),(21,'上海迪士尼','2023-04-27',1,'儿童票','259'),(22,'上海海昌海洋公园','2023-04-27',0,'成人票','130'),(23,'上海海昌海洋公园','2023-04-27',7,'老人票','120'),(24,'上海海昌海洋公园','2023-04-27',6,'儿童票','110'),(25,'上海东方明珠','2023-04-27',6,'成人票','20'),(26,'上海东方明珠','2023-04-27',6,'老人票','18'),(27,'上海东方明珠','2023-04-27',6,'儿童票','15'),(28,'上海野生动物园','2023-04-27',4,'成人票','100'),(29,'上海野生动物园','2023-04-27',5,'老人票','80'),(30,'上海野生动物园','2023-04-27',6,'儿童票','50'),(31,'上海科技馆','2023-04-27',6,'成人票','30'),(32,'上海科技馆','2023-04-27',6,'老人票','25'),(33,'上海科技馆','2023-04-27',6,'老人票','20'),(34,'上海天文馆','2023-04-27',6,'成人票','40'),(35,'上海天文馆','2023-04-27',6,'老人票','30'),(36,'上海天文馆','2023-04-27',6,'老人票','25'),(37,'香港海洋公园','2023-04-28',10,'成人票','399'),(38,'香港海洋公园','2023-04-28',5,'老人票','299'),(39,'香港海洋公园','2023-04-28',2,'儿童票','259'),(40,'香港迪士尼乐园','2023-04-28',6,'成人票','513'),(41,'香港迪士尼乐园','2023-04-28',6,'老人票','313'),(42,'香港迪士尼乐园','2023-04-28',6,'儿童票','213'),(43,'香港天迹100观景台','2023-04-28',6,'成人票','46'),(44,'香港天迹100观景台','2023-04-28',6,'老人票','36'),(45,'香港天迹100观景台','2023-04-28',6,'儿童票','26'),(46,'山顶缆车','2023-04-28',6,'成人票','86'),(47,'山顶缆车','2023-04-28',6,'老人票','56'),(48,'山顶缆车','2023-04-28',6,'儿童票','46'),(49,'香港杜莎夫人蜡像馆','2023-04-28',6,'成人票','30'),(50,'香港杜莎夫人蜡像馆','2023-04-28',6,'老人票','25'),(51,'香港杜莎夫人蜡像馆','2023-04-28',6,'儿童票','20'),(52,'香港太空馆','2023-04-28',6,'成人票','300'),(53,'香港太空馆','2023-04-28',6,'老人票','220'),(54,'香港太空馆','2023-04-28',6,'儿童票','200'),(55,'上海迪士尼','2023-04-28',10,'成人票','399'),(56,'上海迪士尼','2023-04-28',10,'老人票','299'),(57,'上海迪士尼','2023-04-28',10,'儿童票','259'),(58,'上海海昌海洋公园','2023-04-28',6,'成人票','130'),(59,'上海海昌海洋公园','2023-04-28',0,'老人票','120'),(60,'上海海昌海洋公园','2023-04-28',10,'儿童票','110'),(61,'上海东方明珠','2023-04-28',6,'成人票','20'),(62,'上海东方明珠','2023-04-28',6,'老人票','18'),(63,'上海东方明珠','2023-04-28',6,'儿童票','15'),(64,'上海野生动物园','2023-04-28',6,'成人票','100'),(65,'上海野生动物园','2023-04-28',6,'老人票','80'),(66,'上海野生动物园','2023-04-28',6,'儿童票','50'),(67,'上海科技馆','2023-04-28',6,'成人票','30'),(68,'上海科技馆','2023-04-28',6,'老人票','25'),(69,'上海科技馆','2023-04-28',6,'老人票','20'),(70,'上海天文馆','2023-04-28',6,'成人票','40'),(71,'上海天文馆','2023-04-28',6,'老人票','30'),(72,'上海天文馆','2023-04-28',6,'老人票','25');
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `workid` int NOT NULL,
  `password` varchar(145) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `cardid` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `role` varchar(45) NOT NULL,
  `balance` int DEFAULT NULL,
  `coupon` int DEFAULT NULL,
  PRIMARY KEY (`workid`),
  UNIQUE KEY `workid_UNIQUE` (`workid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1306,'$2a$10$QsvACRdRY45B.Y2X90A4d.0rvg5LBYPQOFrOpxDj2Q4MMsu.iJkKS','杨婷','321023199904240249','19821660627','xc1306@163.com','员工',1000,20),(1308,'$2a$10$oEwTbSK4jyqYi1BLZgUn1.xW8m2IBFcvbSdaBxgPAgDsUWNs4E8nS','程程','321983923918319211','19822715316','xc1308@163.com','员工',1000,20),(1309,'$2a$10$cMZwZiFQ6stv1RRwYQvZoe.gShh6zB7Gz6n6fBzVmTFekuI6YVu6u','吴颖','321023199902139201','13192832912','xc1309@163.com','管理员',1000,20),(1310,'$2a$10$p7GSAlCyIy0MIxxYpTpeMe1KM115jUSOBLcQklS3LLUgmzNfqwzhO','刘雅洁','321023199806280226','19822715316','lyjennie@163.com','管理员',1000,20),(1311,'$2a$10$KN3zqncJp9WRuJpFOjuKjufqQIP9gYnQGg5qTP.jKE1PoFzPv1H2i','小携','321372146121321322','13224212414','xc1311@163.com','员工',1000,20),(1312,'$2a$10$E3l5QLm7bJR2hcRy1qO2k.VQqyPy/oAauuw7uiiKm2hCFaauOoQ7y','小程','232414431243414112','12378283823','xc1312@163.com','管理员',1000,20),(1314,'$2a$10$5KqjW5Hv95IB5hfAo9zPoeD4y26G8mJjNKyKkQ7fwxJ.Jbr1iIqfK','小旅','872381731732832412','19283284212','xc1313@163.com','员工',1000,20),(1315,NULL,'携程',NULL,NULL,NULL,'管理员',1000,20),(1316,NULL,'旅游',NULL,NULL,NULL,'员工',1000,20);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-27 11:17:29

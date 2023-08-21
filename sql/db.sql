/*
 Navicat MySQL Data Transfer
 
 Source Server         : bj
 Source Server Type    : MySQL
 Source Server Version : 50718 (5.7.18-cynos-log)
 Source Schema         : shorturl
 
 Target Server Type    : MySQL
 Target Server Version : 50718 (5.7.18-cynos-log)
 File Encoding         : 65001
 
 
 */
SET
    NAMES utf8mb4;

SET
    FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for shorturl
-- ----------------------------
DROP TABLE IF EXISTS `shorturl`;

CREATE TABLE `shorturl` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `origin_url` varchar(1024) NOT NULL,
    `random_code` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 966 DEFAULT CHARSET = utf8mb4;

SET
    FOREIGN_KEY_CHECKS = 1;
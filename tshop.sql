SET NAMES UTF8;
DROP DATABASE IF EXISTS tshop;
CREATE DATABASE tshop CHARSET=UTF8;

USE tshop;

-- # Banner
CREATE TABLE banner(
    id INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(120)
);

INSERT INTO banner VALUES(NULL, "images/banner/city.jpg"),
(NULL, 'images/banner/huawei.jpg'),
(NULL, 'images/banner/root.jpg'),
(NULL, 'images/banner/touyin.jpg'),
(NULL, 'images/banner/vr.jpg');
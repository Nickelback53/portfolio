--공지사항 테이블
CREATE TABLE `freeboard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `username` varchar(30) NOT NULL,	
  PRIMARY KEY (`id`)
);

--유저 테이블
CREATE TABLE IF NOT EXISTS user (
  id int(12) NOT NULL,
  username varchar(50) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

alter table user modify id int not null auto_increment primary key;
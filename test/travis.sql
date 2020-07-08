CREATE USER 'ticket'@'localhost' IDENTIFIED WITH mysql_native_password AS 'ticket';
CREATE USER ticket@localhost IDENTIFIED WITH mysql_native_password AS ticket;
GRANT USAGE ON *.* TO 'ticket'@'localhost' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
CREATE DATABASE IF NOT EXISTS `ticket`;
GRANT ALL PRIVILEGES ON `ticket`.* TO 'ticket'@'localhost';

DROP DATABASE IF EXISTS target_inventory;
CREATE DATABASE target_inventory;

USE target_inventory;

CREATE TABLE stores(
  id INT NOT NULL AUTO_INCREMENT,
  storename VARCHAR(100),
  street VARCHAR(100),
  city VARCHAR(100) NOT NULL,
  stateus VARCHAR(100),
  zip VARCHAR(100) NOT NULL,


  PRIMARY KEY(id)
);

CREATE TABLE items(
  id INT AUTO_INCREMENT NOT NULL,
  itemname VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  pickup int,
  readyTime int,
  onlineStock int,
  imgurl VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE inventory(
  store INT NOT NULL REFERENCES stores(id),
  item INT NOT NULL REFERENCES items(id),
  stock INT NOT NULL
);

INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("San Francisco CBD East", "225 Bush St, Ste 100", "San Francisco", "CA", "94104-4251");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("San Francisco Central", "789 Mission St", "San Francisco", "CA", "94103-3132");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("SF Folsom and 13th St", "1690 Folsom St", "San Francisco", "CA", "94103-3723");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("San Francisco West", "2675 Geary Blvd", "San Francisco", "CA", "94118-3400");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("San Francisco South", "1830 Ocean Ave", "San Francisco", "CA", "94112-1768");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("San Francisco Stonestown", "233 Winston Dr", "San Francisco", "CA", "94132-1901");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("Alameda", "2700 Fifth Street", "Alameda", "CA", "94501");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("Oakland-Emeryville", "1555 40th Street", "Emeryville", "CA", "94608-3515");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("Oakland Broadway & 27th", "2650 Broadway", "Oakland", "CA", "94612-3110");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("Albany", "1057 Eastshore Hwy", "Albany", "CA", "94710-1011");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("Marin City", "180 Donahue St", "Sausalito", "CA", "94965-1250");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("Berkeley Univ Ave", "1414 University Ave", "Berkeley", "CA", "94702-1548");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("Colma", "5001 Junipero Serra Blvd", "Colma", "CA", "94014-3217");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("Berkeley Central", "2187 Shattuck Ave", "Berkeley", "CA", "94704-1308");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("Daly City Serramonte", "133 Serramonte Ctr", "Daly City", "CA", "94015-2349");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("Richmond", "4500 Macdonald Ave", "Richmond", "CA", "94805-2307");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("Tanforan", "1150 El Camino Real", "San Bruno", "CA", "94066-2420");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("San Rafael", "125 Shoreline Pkwy", "San Rafael", "CA", "94901-5521");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("Pinole", "1400 Fitzgerald Dr", "Pinole", "CA", "94564-2250");
INSERT INTO stores (storename, street, city, stateus, zip) VALUES ("San Leandro Bayfair", "15555 E 14th St, Ste 400", "San Leandro", "CA", "94578-1978");

INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("Red Doofer", 1999, 1, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/1.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("Useless Implement", 4599, 0, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/2.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("Object of Questionable Origin", 1399, 1, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/3.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("A Jar of Dirt", 2006, 1, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/4.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("The Necronomicon", 1981, 0, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/5.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("I Dare You to Buy This", 5599, 0, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/6.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("Don't Tell Anyone We're Selling This", 199, 0, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/7.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("This Belongs in a Museum", 1989, 1, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/8.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("Why Would You Buy This If You Can't Eat It?", 10099, 1, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/9.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("A Thing", 2299, 0, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/10.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("The Thing", 1982, 1, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/11.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("Another Thing", 2011, 0, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/12.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("Several Things", 9999, 1, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/13.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("A Plurality of Things", 99999, 0, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/14.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("A Singular Thing", 999, 0, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/15.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("That Thing You Love", 2010, 1, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/16.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("According to WebMD This Will Give You Cancer", 1996, 1, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/17.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("Do Not Insert This Into Your Eyes", 299, 1, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/18.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("Buy This For Your Mother Because She Would Love It", 510, 0, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/19.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("This Won't Help With Your Insecurities But You Should Buy It Anyway", 510, 1, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/20.jpg");
INSERT INTO items (itemname, price, pickup, readyTime, onlineStock, imgurl) VALUES ("If You Can't Afford This You Should Feel Bad About Yourself", 2147483647, 1, FLOOR(RAND() * 5), FLOOR(RAND() * 20), "https://targetas1122.s3-us-west-1.amazonaws.com/21.jpg");

DELIMITER //
CREATE PROCEDURE fillInventory(i INT)
BEGIN
  DECLARE n INT DEFAULT 1;
      WHILE n <= 21 DO
        INSERT INTO inventory (store, item, stock) VALUES (i, n, FLOOR(RAND() * 20) + 1);
        SET n = n + 1;
      END WHILE;
END//
DELIMITER ;

CALL fillInventory(1);
CALL fillInventory(2);
CALL fillInventory(3);
CALL fillInventory(4);
CALL fillInventory(5);
CALL fillInventory(6);
CALL fillInventory(7);
CALL fillInventory(8);
CALL fillInventory(9);
CALL fillInventory(10);
CALL fillInventory(11);
CALL fillInventory(12);
CALL fillInventory(13);
CALL fillInventory(14);
CALL fillInventory(15);
CALL fillInventory(16);
CALL fillInventory(17);
CALL fillInventory(18);
CALL fillInventory(19);
CALL fillInventory(20);
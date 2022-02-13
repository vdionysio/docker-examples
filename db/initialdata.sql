CREATE TABLE Product(
  product_id INT PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(60),
  product_quantity INT
);
INSERT INTO Product (product_name, product_quantity)
VALUES
  ("caneta", 20),
  ("tesoura", 40),
  ("borracha", 50),
  ("apontador", 20);
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password'; 
flush privileges;
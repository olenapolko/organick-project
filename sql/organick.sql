DROP DATABASE if exists organick;
CREATE DATABASE IF NOT EXISTS organick;
USE organick;

CREATE TABLE category
(
   id int not null primary key AUTO_INCREMENT,
   categoryName VARCHAR(20) NOT NULL
);

CREATE TABLE `user`
(
   id int not null primary key auto_increment,
   userName varchar(20) not null,
   surName varchar(20) not null,
   phone varchar(25) not null,
   email varchar(30),
   address varchar(50)
);

CREATE TABLE subscriber
(
   id int not null primary key auto_increment,
   email varchar(30) not null
);

CREATE TABLE news
(
   id int not null primary key auto_increment,
   author varchar(30),
   title varchar(50) not null,
   text varchar(150) not null,
   `date` datetime not null,
   imageName varchar(50)
);

CREATE TABLE testimonial
(
   id int not null primary key auto_increment,
   author varchar(30),
   position varchar(20) not null,
   text varchar(100) not null,
   stars int not null,
   imagePath varchar(100)
);

CREATE TABLE `order`
(
   id int not null primary key auto_increment,
   `date` datetime not null,
   message varchar(100),
   userId INT NOT NULL,
   FOREIGN KEY (userId) REFERENCES `user` (id)
);

CREATE TABLE product
(
   id int not null primary key auto_increment,
   categoryId int not null,
   productName varchar(40) not null,
   description varchar(300),
   fullDescription varchar(600),
   exstraInformation varchar(500),
   price decimal(5, 2) not null,
   discount int,
   star int,
   imagePath varchar(100),
   foreign key (categoryId) references category(id),
   constraint chk_star check (star>=0 and star <=5)
);

CREATE TABLE product_order
(
   id int not null primary key auto_increment,
   orderId int not null,
   productId int not null,
   userId int not null,
   quantity decimal(5, 3) not null,
   productPrice decimal(5, 2) not null,
   productDiscount int,
   foreign key (orderId) references `order`(id),
   foreign key (productId) references product(id),
   foreign key (userId) references `user`(id)
   ON UPDATE CASCADE 
);

CREATE TABLE experts 
(
   id int not null primary key auto_increment,
   expertName varchar(40) not null,
   position varchar(20) not null,
   imagePath varchar(100)
);

CREATE TABLE projects 
(
   id int not null primary key auto_increment,
   title varchar(20) not null,
   subtitle varchar(15) not null,
   imagePath varchar(100)
);

INSERT INTO category(categoryName) VALUES ('vegetable'),('fresh'),('millets'), ('health'),('nuts');

INSERT INTO product(categoryId,productName,`description`,fullDescription,exstraInformation, price,discount,star,imagePath)
VALUES (1,'Calabrese Broccoli', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
20,35,5,'/product/broccoli.png'),
(2,'Fresh Banana Fruites', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
20,30,4,'/product/banana.png'),
(3,'White Nuts',
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
30,35,4,'/product/pistachios.png'),
(1,'Vegan Red Tomato',
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
20,15,5,'/product/tomato.png'),
(4,'Mung Bean',
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
 20,35,4,'/product/bean.png'),
(1,'Brown Hazelnut', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
12,null,4,'/product/hazelnut.png'),
(2,'Eggs', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
20,15,4,'/product/eggs.png'),
(5,'Zelco Suji Elaichi Rusk',
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
 20,35,3,'/product/bread.png'),
(4,'Mung Bean', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
20,35,2,'/product/mung-zucchini.png'),
(5,'White Hazelnut', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
20,40,3,'/product/cashews.png'),
(2,'Fresh Corn', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
20,15,5,'/product/corn.png'),
(2,'Organic Almonds', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
15,null,4,'/product/almonds.png'),
(4,'Mung Bean', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
20,35,3,'/product/mung-broccoli.png'),
(1,'Brown Hazelnut', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
12,null,4,'/product/zucchini.png'),
(1,'Onion',
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
17,null,4,'/product/onion.png'),
(1,'Cabbage', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
 17,null,4,'/product/cabagge.png');


INSERT INTO experts (expertName, position, imagePath) 
VALUES 
('Giovani Bacardo', 'Farmer', '/experts/expert-first.jpg'),
('Marianne Loreno', 'Designer', '/experts/expert-second.jpg'),
('Riga Pelore', 'Farmer', '/experts/expert-third.jpg');


INSERT INTO news (author, title, text, date, imageName)
VALUES
    ('Rachi Card', 'The Benefits of Vitamin D & How to Get It', 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum', '2022-11-25 15:30:00', 'salad.png'),
    ('Rachi Card', 'Our Favorite Summertime Tomato', 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum', '2022-11-25 15:45:00', 'tomato.png'),
    ('Rachi Card', 'Benefits of Vitamin C & How to Get It', 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum', '2023-02-15 16:00:00', 'avocado.png'),
    ('Rachi Card', 'Research More Organic Foods', 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum', '2023-05-03 16:15:00', 'researcher.png'),
    ('Rachi Card', 'Everyday Fresh Fruits', 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum', '2023-06-19 16:30:00', 'farmer.png'),
    ('Rachi Card', 'Don’t Use Plastic Products! It’s Killing Nature', 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum', '2023-08-23 16:45:00', 'plastic.png');

INSERT INTO projects (title, subtitle, imagePath) 
VALUES 
('Green & Tasty Lemon', 'Fruits', 'lemons.png'),
('Organic Carrot', 'Farmer', 'carrots.png'),
('Organic Betel Leaf', 'Leaf', 'leaves.png'),
('Natural Tommato', 'Fruits', 'tomatoes.png'),
('Black Raspberry', 'Farmer', 'blackberries.png'),
('Honey Orange', 'Farmer', 'oranges.png');


select * from category;
select * from `order`;
select * from `user`;
select * from product;
select * from product_order;
select * from experts;
select * from projects;
select * from news;

SELECT 
    o.id AS order_id,
    o.date,
    o.message,
    u.id AS user_id,
    u.userName,
    u.surName,
    u.phone,
    u.email,
    u.address,
    p.id AS product_id,
    p.categoryId,
    p.productName,
    p.description,
    p.price,
    p.discount,
    po.quantity,
    po.productPrice,
    po.productDiscount
FROM `user` u
JOIN `order` o ON u.id = o.userId
JOIN product_order po ON o.id = po.orderId
JOIN product p ON po.productId = p.id;



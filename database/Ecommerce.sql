CREATE DATABASE Ecommerce;

CREATE TABLE Customer (
    customer_id INTEGER PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone_number VARCHAR(100) NOT NULL
);

CREATE TABLE Orders (
    order_id INTEGER PRIMARY KEY,
    order_date DATETIME NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    customer_id INTEGER,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

CREATE TABLE Order_Item (
    order_item_id INTEGER PRIMARY KEY,
    quantity INTEGER NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    order_id INTEGER,
    product_id INTEGER,
    FOREIGN KEY (order_id) REFERENCES Orders (order_id),
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);

CREATE TABLE Category (
    category_id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE Product (
    product_id INTEGER PRIMARY KEY,
    SKU VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    stock INTEGER NOT NULL,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);

CREATE TABLE Payment (
    payment_id INTEGER PRIMARY KEY,
    payment_date DATETIME NOT NULL,
    payment_method VARCHAR(100) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    order_id INTEGER,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);

CREATE TABLE Shipment (
    shipment_id INTEGER PRIMARY KEY,
    shipment_date DATETIME NOT NULL,
    address VARCHAR(100) NOT NULL,
    order_id INTEGER,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);

CREATE TABLE Cart (
    cart_id INTEGER PRIMARY KEY,
    quantity INTEGER NOT NULL,
    customer_id INTEGER,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);


INSERT INTO Customer (customer_id, full_name, email, password, address, phone_number) VALUES
(1, 'John Doe', 'johndoe@example.com', 'password123', '123 Main St, City', '1234567890'),
(2, 'Jane Smith', 'janesmith@example.com', 'password456', '456 Elm St, City', '9876543210'),
(3, 'Alice Johnson', 'alicejohnson@example.com', 'password789', '789 Oak St, City', '5678901234'),
(4, 'Bob Williams', 'bobwilliams@example.com', 'password101', '101 Pine St, City', '4321098765'),
(5, 'Charlie Brown', 'charliebrown@example.com', 'password202', '202 Maple St, City', '7654321098');

select * from Customer

INSERT INTO Orders (order_id, order_date, total_price, customer_id) VALUES
(1, '2023-10-01', 100.00, 1),
(2, '2023-10-02', 50.00, 2),
(3, '2023-10-03', 150.00, 3),
(4, '2023-10-04', 80.00, 4),
(5, '2023-10-05', 200.00, 5);

select * from Orders

INSERT INTO Category (category_id, name) VALUES
(1, 'Electronics'),
(2, 'Clothing'),
(3, 'Books'),
(4, 'Home Goods'),
(5, 'Toys');

select * from Category

INSERT INTO Product (product_id, SKU, description, price, stock, category_id) VALUES
(1, 'PROD001', 'Smartphone', 500.00, 10, 1),
(2, 'PROD002', 'T-Shirt', 20.00, 20, 2),
(3, 'PROD003', 'Novel', 15.00, 30, 3),
(4, 'PROD004', 'Couch', 500.00, 5, 4),
(5, 'PROD005', 'Teddy Bear', 10.00, 100, 5);

select * from Product

INSERT INTO Order_Item (order_item_id, quantity, price, order_id, product_id) VALUES
(1, 2, 25.00, 1, 1),
(2, 1, 50.00, 2, 2),
(3, 3, 30.00, 3, 3),
(4, 2, 20.00, 4, 4),
(5, 5, 40.00, 5, 5);

select * from Order_Item

INSERT INTO Payment (payment_id, payment_date, payment_method, amount, order_id) VALUES
(1, '2023-10-01', 'Credit Card', 100.00, 1),
(2, '2023-10-02', 'PayPal', 50.00, 2),
(3, '2023-10-03', 'Cash on Delivery', 150.00, 3),
(4, '2023-10-04', 'Bank Transfer', 80.00, 4),
(5, '2023-10-05', 'Gift Card', 200.00, 5);

select * from Payment

INSERT INTO Shipment (shipment_id, shipment_date, address, order_id) VALUES
(1, '2023-10-02', '123 Main St, City', 1),
(2, '2023-10-03', '456 Elm St, City', 2),
(3, '2023-10-04', '789 Oak St, City', 3),
(4, '2023-10-05', '101 Pine St, City', 4),
(5, '2023-10-06', '202 Maple St, City', 5);

select * from Shipment

INSERT INTO Cart (cart_id, quantity, customer_id) VALUES
(1, 3, 1),
(2, 2, 2),
(3, 5, 3),
(4, 1, 4),
(5, 4, 5);

select * from Cart
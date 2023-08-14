-- this runs all the seed table statements all at once to make creating our database easier <3

-- Insert seed data
INSERT INTO users (first_name, last_name, email, phone)
VALUES
    ('John', 'Doe', 'john.doe@example.com', '555-1234'),
    ('Jane', 'Smith', 'jane.smith@example.com', '555-5678'),
    ('Michael', 'Johnson', 'michael.johnson@example.com', '555-9876'),
    ('Emily', 'Brown', 'emily.brown@example.com', '555-4321'),
    ('William', 'Davis', 'william.davis@example.com', '555-8765');

INSERT INTO business (id, name, description)
VALUES
    (1, 'Pizza Place', 'Authentic pizzas made with fresh ingredients'),
    (2, 'Sushi Restaurant', 'Delicious sushi offerings with the finest fish');

INSERT INTO items (id, name, description, price, business_id)
VALUES
    (1, 'Margherita', 'Classic tomato and mozzarella pizza', 9.99, 1),
    (2, 'Pepperoni', 'Tomato, mozzarella, and pepperoni', 11.49, 1),
    (3, 'Hawaiian', 'Ham, pineapple, and mozzarella', 12.99, 1),
    (4, 'Vegetarian', 'Assorted vegetables and mozzarella', 10.99, 1),
    (5, 'Meat Lovers', 'Pepperoni, sausage, bacon, and mozzarella', 13.99, 1),
    (6, 'Sake Nigiri', 'Salmon on rice', 4.99, 2),
    (7, 'Maguro Nigiri', 'Tuna on rice', 5.49, 2),
    (8, 'Ebi Nigiri', 'Shrimp on rice', 4.79, 2),
    (9, 'California Roll', 'Crab, avocado, and cucumber', 8.99, 2),
    (10, 'Spicy Tuna Roll', 'Tuna, spicy mayo, and cucumber', 9.49, 2);

INSERT INTO addresses (customer_id, business_id, street_name, street_number, city)
VALUES
    (1, NULL, 'Main Street', 123, 'Cityville'),
    (2, NULL, 'Elm Avenue', 456, 'Townsville'),
    (NULL, 1, 'Oak Street', 789, 'Villagetown'),
    (NULL, 2, 'Maple Drive', 987, 'Metropolis'),
    (3, NULL, 'Cedar Road', 234, 'Hamletville');

INSERT INTO orders (customer_id, business_id, date, total, status, tax)
VALUES
    (1, 1, '2023-08-01', 29.99, 'Completed', 4.49),
    (2, 2, '2023-08-02', 42.75, 'Pending', 6.41),
    (3, 1, '2023-08-03', 15.49, 'Completed', 2.32),
    (4, 2, '2023-08-04', 56.20, 'Shipped', 8.43),
    (5, 1, '2023-08-05', 38.65, 'Completed', 5.79);

INSERT INTO order_items (order_id, user_id, item_id, quantity, total, status, tax)
VALUES
    (1, 1, 1, 2, 19.98, 'Completed', 2.99),
    (1, 1, 3, 1, 12.99, 'Completed', 1.94),
    (2, 2, 6, 3, 14.97, 'Pending', 2.24),
    (2, 2, 8, 2, 9.58, 'Pending', 1.43),
    (3, 3, 2, 1, 5.49, 'Completed', 0.82),
    (3, 3, 9, 2, 17.98, 'Completed', 2.69),
    (4, 1, 4, 2, 25.98, 'Shipped', 3.89),
    (4, 1, 7, 1, 5.49, 'Shipped', 0.82),
    (5, 2, 5, 3, 41.97, 'Completed', 6.29),
    (5, 2, 10, 1, 9.49, 'Completed', 1.42);

INSERT INTO payments (customer_id, order_id, total, date, method)
VALUES
    (1, 1, 29.99, '2023-08-01', 'Credit Card'),
    (2, 2, 42.75, '2023-08-02', 'PayPal'),
    (3, 3, 15.49, '2023-08-03', 'Debit Card'),
    (4, 4, 56.20, '2023-08-04', 'Credit Card'),
    (5, 5, 38.65, '2023-08-05', 'PayPal');

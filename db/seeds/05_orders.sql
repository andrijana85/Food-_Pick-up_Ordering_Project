-- Insert seed data into orders table
INSERT INTO orders (date, total, status, tax, item_name, item_description, item_price)
VALUES
    ('2023-08-01', 9.99, 'Pending', 1.00, 'Margherita', 'Classic tomato and mozzarella pizza', 9.99),
    ('2023-08-02', 11.49, 'Pending', 1.15, 'Pepperoni', 'Tomato, mozzarella, and pepperoni', 11.49),
    ('2023-08-03', 12.99, 'Pending', 1.30, 'Hawaiian', 'Ham, pineapple, and mozzarella', 12.99),
    ('2023-08-04', 10.99, 'Pending', 1.10, 'Vegetarian', 'Assorted vegetables and mozzarella', 10.99);
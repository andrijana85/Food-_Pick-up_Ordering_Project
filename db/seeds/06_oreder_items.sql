-- Insert seed data

INSERT INTO order_items (order_id, customer_id, item_id, quantity, total, status, tax)
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

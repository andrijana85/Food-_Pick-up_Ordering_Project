-- Insert seed data

INSERT INTO order_food_items (order_id, customer_id, food_item_id, quantity, total, status, tax)
VALUES
    (1, 1, 1, 2),
    (1, 1, 3, 1),
    (2, 2, 5, 3),
    (2, 2, 3, 2),
    (3, 3, 2, 1),
    (3, 3, 5, 2),
    (4, 1, 4, 2),
    (4, 1, 2, 1),
    (5, 2, 5, 3),
    (5, 2, 1, 3);

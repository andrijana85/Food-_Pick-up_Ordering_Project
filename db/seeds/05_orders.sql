-- Insert seed data

INSERT INTO orders (customer_id, business_id, date, status)
VALUES
    (1, 1, '2023-08-01', 'Completed' ),
    (2, 2, '2023-08-02', 'Pending' ),
    (3, 1, '2023-08-03', 'Completed' ),
    (4, 2, '2023-08-04', 'Shipped' ),
    (5, 1, '2023-08-05', 'Completed' );
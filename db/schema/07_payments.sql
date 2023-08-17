DROP TABLE IF EXISTS payments CASCADE;

-- Create table for payments

CREATE TABLE payments (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER NOT NULL,
  order_id INTEGER NOT NULL,
  total NUMERIC (10, 2),
  date DATE,
  method TEXT NOT NULL
);
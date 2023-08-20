DROP TABLE IF EXISTS orders CASCADE;

-- Create table for orders
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  date DATE,
  total NUMERIC (10, 2),
  status VARCHAR(255),
  tax NUMERIC (10, 2),
  item_name VARCHAR(255),
  item_description TEXT,
  item_price NUMERIC (10, 2)
);

DROP TABLE IF EXISTS orders CASCADE;

-- Create table for orders
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  phone_number TEXT,
  date DATE,
  status VARCHAR(255)
);

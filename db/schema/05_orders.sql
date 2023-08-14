DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER,
  business_id INTEGER,
  date DATE,
  total NUMERIC (10, 2),
  status VARCHAR(255)
  tax NUMERIC (10, 2)
);

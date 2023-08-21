DROP TABLE IF EXISTS order_food_items CASCADE;

-- Create table for oredr_items

CREATE TABLE order_food_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER,
  -- customer_id INT REFERENCES customers(id),
  food_item_id INT REFERENCES food_items(id),
  quantity INT,
  -- total NUMERIC (10, 2),
  status VARCHAR(255),
  -- tax NUMERIC (10, 2)
);
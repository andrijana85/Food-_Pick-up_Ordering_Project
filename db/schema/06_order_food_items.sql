DROP TABLE IF EXISTS order_food_items CASCADE;

-- Create table for oredr_items

CREATE TABLE order_food_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER,
  food_item_id INT REFERENCES food_items(id),
  quantity INT,
  status VARCHAR(255)
);
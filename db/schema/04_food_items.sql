DROP TABLE IF EXISTS food_items CASCADE;

-- Create table for foodItems

CREATE TABLE food_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2),
  image_url TEXT
);
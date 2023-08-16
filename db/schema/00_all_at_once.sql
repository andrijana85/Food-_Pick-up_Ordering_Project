-- this runs all the create table statements all at once to make creating our database easier <3

-- Drop tables if they exist
DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS payments CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS business CASCADE;
DROP TABLE IF EXISTS items CASCADE;
DROP TABLE IF EXISTS addresses CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Create tables
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20)
);

CREATE TABLE addresses (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER,
  business_id INTEGER,
  street_name TEXT,
  street_number INTEGER,
  city TEXT
);

CREATE TABLE business (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  description VARCHAR(1000)
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2),
  business_id INTEGER REFERENCES business(id)
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER,
  business_id INTEGER,
  date DATE,
  total NUMERIC (10, 2),
  status VARCHAR(255),
  tax NUMERIC (10, 2)
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER,
  user_id INT REFERENCES users(id),
  item_id INT REFERENCES items(id),
  quantity INT,
  total NUMERIC (10, 2),
  status VARCHAR(255),
  tax NUMERIC (10, 2)
);

CREATE TABLE payments (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER NOT NULL,
  order_id INTEGER NOT NULL,
  total NUMERIC (10, 2),
  date DATE,
  method TEXT NOT NULL
);

-- comment
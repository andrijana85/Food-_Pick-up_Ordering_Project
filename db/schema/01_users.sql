DROP TABLE IF EXISTS users CASCADE;

-- Create table for users

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  is_owner BOOLEAN DEFAULT false
);
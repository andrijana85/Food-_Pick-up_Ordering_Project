DROP TABLE IF EXISTS businesses CASCADE;


-- Create table for businesses

CREATE TABLE businesses (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  description VARCHAR(1000)
);
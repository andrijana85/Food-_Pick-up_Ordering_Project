DROP TABLE IF EXISTS business CASCADE;
CREATE TABLE business (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  description VARCHAR(1000)
);

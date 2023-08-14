DROP TABLE IF EXISTS addresses CASCADE;
CREATE TABLE addresses (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER,
  business_id INTEGER,
  street_name TEXT,
  street_number INTEGER,
  city TEXT
);

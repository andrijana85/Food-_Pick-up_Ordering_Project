DROP TABLE IF EXISTS business_addresses CASCADE;

-- Create table for businessesAdresses

CREATE TABLE business_addresses (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES customers(id),
  business_id INTEGER REFERENCES businesses(id),
  street_name TEXT,
  street_number INTEGER,
  city TEXT
);

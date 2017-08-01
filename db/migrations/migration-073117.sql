\c armoire

CREATE TABLE IF NOT EXISTS outfits (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  brand_name VARCHAR(255,
  description VARCHAR,
  image VARCHAR,
  priceLabel VARCHAR,
  clothing_type VARCHAR 
);

-- SELECT * FROM clothing 
-- WHERE clothing_type = 'shoe'
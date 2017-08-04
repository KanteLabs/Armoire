-- \c armoire

CREATE TABLE IF NOT EXISTS clothes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  brand VARCHAR(255),
  description VARCHAR,
  price VARCHAR,
  productId VARCHAR,
  brandedName VARCHAR,
  imageBest VARCHAR,
  clothing_type VARCHAR 
);

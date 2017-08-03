\c armoire

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255)
);

-- ALTER TABLE clothes 
-- ADD COLUMN userid INTEGER REFERENCES users(id);

ALTER TABLE outfits
ADD COLUMN userid INTEGER REFERENCES users(id);
\c armoire

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255)
);

ALTER TABLE clothing 
ADD COLUMN user_id INTEGER REFERENCES users(id);

ALTER TABLE outfits
ADD COLUMN user_id INTEGER REFERENCES users(id);
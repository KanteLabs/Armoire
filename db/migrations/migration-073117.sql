\c armoire

CREATE TABLE IF NOT EXISTS outfits (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  top_id INTEGER REFERENCES clothes(id),
  bottom_id INTEGER REFERENCES clothes(id),
  shoe_id INTEGER REFERENCES clothes(id),
  clout_points INTEGER
)


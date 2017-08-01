const db = require('../db/config');

const User = {};

User.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [userName]);
};

User.create = user => {
  return db.one(`
    INSERT INTO users
    (username, email, password_digest, firstname, lastname)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [user.username, user.email, user.password_digest, user.firstname, user.lastname]);
};

User.findUserOutfits = id => {
  return db.manyOrNone(`
    SELECT * FROM outfits
    WHERE user_id = $1
  `, [id]);
};

User.findUserClothing = id => {
  return db.manyOrNone(`
    SELECT * FROM clothing
    WHERE user_id = $1
  `, [id]);
};

module.exports = User;
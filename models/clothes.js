const db = require('../db/config');

const Clothes = {
    findAll: ()=>{
        return db.query('SELECT * FROM clothing')
    },
    findByClothing_type: ()=>{
        return db.oneOrNone(`
          SELECT * FROM clothing
          WHERE clothing_type = $1
        `,[clothing_type])
    },
    create: ()=>{
      return db.one(`
        INSERT into clothing
        (name, brand, description, price, productId, brandedName, imageBest, clothing_type, userid)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *
      `, [product.name, product.brand.name, product.description, product.priceLabel, product.id, product.brandedName, product.image.sizes.best, product.categories.shortName])
    }
}

Movie.create = (movie, userid) => {
  return db.one(`
    INSERT INTO movies
    (title, year, genre, user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [movie.title, movie.year, movie.genre, userid]);
}

Movie.update = (movie, id) => {
  return db.one(`
    UPDATE movies SET
    title = $1,
    year = $2,
    genre = $3
    WHERE id = $4
    RETURNING *
  `, [movie.title, movie.year, movie.genre, id]);
}

Movie.destroy = (id) => {
  return db.none(`
    DELETE FROM movies
    WHERE id = $1
  `, [id]);
}

module.exports = Movie;
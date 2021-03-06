const db = require('../db/config');

const Clothes = {
    findAll: (userid)=>{
        return db.query(`
        SELECT * FROM clothes
        WHERE userid = $1
        `,[userid])
    },
    findById: (id)=>{
      return db.oneOrNone(`
        SELECT * FROM clothes
        WHERE id = $1
      `, [id])
    },
    findByClothing_type: (clothing_type1, clothing_type2,clothing_type3)=>{
        return db.query(`
          SELECT * FROM clothes
          WHERE clothing_type = $1 UNION ALL
          SELECT * FROM clothes
          WHERE clothing_type = $2 UNION ALL
          SELECT * FROM clothes
          WHERE clothing_type= $3
        `,[clothing_type1, clothing_type2, clothing_type3])
    },
    create: (product, userid)=>{
      return db.one(`
        INSERT into clothes
        (name, brand, description, price, productId, brandedName, imageBest, clothing_type, userid)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING *
      `, [product.name, product.brand, product.description, product.price, product.productId, product.brandedName, product.imageBest, product.clothing_type, userid])
    },
    update: (product, id) => {
      return db.one(`
        UPDATE clothes SET
        name = $1,
        brand = $2 ,
        description = $3 ,
        price = $4 ,
        productId = $5 ,
        brandedName = $6 ,
        imageBest = $7 ,
        clothing_type = $8
        WHERE id = $9
        RETURNING *
      `, [product.name, product.brand, product.description, product.price, product.productId, product.brandedName, product.imageBest, product.clothing_type, id])
    },
    destroy: (id) => {
      return db.none(`
        DELETE FROM clothes
        WHERE id = $1
      `, [id])
    }
}

module.exports = Clothes;
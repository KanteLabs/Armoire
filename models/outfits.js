const db = require('../db/config');

const Outfits = {
    findAll: (userid)=>{
        return db.query(`
        select o.*,c.* , o.name as outfitName from clothes c inner join outfits o on c.id = o.bottom_id WHERE o.userid = $1 union all
        select o.*,c.* , o.name as outfitName from clothes c inner join outfits o on c.id = o.top_id WHERE o.userid = $1 union all
        select o.*,c.* , o.name as outfitName from clothes c inner join outfits o on c.id = o.shoe_id WHERE o.userid = $1
        `,[userid])
    },
    // findById: (id)=>{
    //   return db.oneOrNone(`
    //     SELECT * FROM clothes
    //     WHERE id = $1
    //   `, [id])
    // },
    findByClothing_type: (clothing_type)=>{
        return db.oneOrNone(`
          SELECT * FROM clothes
          WHERE clothing_type = $1
        `,[clothing_type])
    },
    create: (outfit, userid)=>{
      return db.one(`
        INSERT into outfits
        (name, top_id, bottom_id, shoe_id, clout_points, userid)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *
      `, [outfit.name, outfit.top_id, outfit.bottom_id,outfit.shoe_id, outfit.clout_points, userid])
    },
    // update: (product, id) => {
    //   return db.one(`
    //     UPDATE clothes SET
    //     name = $1,
    //     brand = $2 ,
    //     description = $3 ,
    //     price = $4 ,
    //     productId = $5 ,
    //     brandedName = $6 ,
    //     imageBest = $7 ,
    //     clothing_type = $8
    //     WHERE id = $9
    //     RETURNING *
    //   `, [product.name, product.brand, product.description, product.price, product.productId, product.brandedName, product.imageBest, product.clothing_type, id])
    // },
    // destroy: (id) => {
    //   return db.none(`
    //     DELETE FROM clothes
    //     WHERE id = $1
    //   `, [id])
    // }
}

module.exports = Outfits;
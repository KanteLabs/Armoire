const db = require('../db/config');

const Outfits = {
    findAll: (userid)=>{
        return db.query(`
        select o.*,c.* , o.name as outfitName, o.id as outfitId from clothes c inner join outfits o on c.id = o.top_id WHERE o.userid = $1 union all
        select o.*,c.* , o.name as outfitName, o.id as outfitId from clothes c inner join outfits o on c.id = o.bottom_id WHERE o.userid = $1 union all
        select o.*,c.* , o.name as outfitName, o.id as outfitId  from clothes c inner join outfits o on c.id = o.shoe_id WHERE o.userid = $1
        `,[userid])
    },
    findById: (id)=>{
      return db.query(`
        select o.*,c.* , o.name as outfitName, o.id as outfitId from clothes c inner join outfits o on c.id = o.top_id WHERE o.id = $1 union all
        select o.*,c.* , o.name as outfitName, o.id as outfitId from clothes c inner join outfits o on c.id = o.bottom_id WHERE o.id = $1 union all
        select o.*,c.* , o.name as outfitName, o.id as outfitId  from clothes c inner join outfits o on c.id = o.shoe_id WHERE o.id = $1
      `, [id])
    },
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
    update: (product, id) => {
      return db.one(`
        UPDATE outfits SET
        name = $1,
        top_id = $2 ,
        bottom_id = $3 ,
        shoe_id = $4,
        clout_points = $5
        WHERE id = $6
        RETURNING *
      `, [product.name, product.top_id, product.bottom_id, product.shoe_id, product.clout_points, id])
    },
    destroy: (id) => {
      return db.none(`
        DELETE FROM outfits
        WHERE id = $1
      `, [id])
    }
}

module.exports = Outfits;
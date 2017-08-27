# Armoire Online Closet 💃🏾
Web App that could be utilize as an online wardrobe / closet to help create a visual representation of a person's clothing collection
Test Account details: 
Username is clout
Password is clout
![armoire image](./public/splashimage.png)


## Installation 


## What is Armoire?

This is a work in progress full-stack application that allows for users to create accounts and search for clothing items that they can add to their online wardrobe. This could be a very useful way for fashion forward people to keep a visual collection of items that they own. In addition to filling up a closet with clothing they are able to create outfits out of clothing that they own. This was an idea that I wanted to work on for a long time, and now I look forward to recreating this project again, but instead with a framework like react and possibly a different database.


## The Making of Armoire
### Initial Landing page design
![landing page](/landingpage.png)

### Initial Outfit page design
![outfit image](/outfitpage.png)

## Technical Discussion

Front-end:
- HTML, CSS, Bootstrap

Back-end:
- Node.js, Express, PostgreSQL

###
- This code snippet is how I am able to either return all outfits or return certain outfits that belong to a user.

```javascript

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
    }
}

```

A lot of focus was placed on having a working CRUD functionality over design and aesthetics. However now that I have a better understanding of the CRUD functionality I want to recreate the project with a better usage of a database and project structure. 

## App Structure


## Opportunities for Future Growth 
- Better UI/UX design and making the app more straight forward for all users.
- Usage of possible multiple APIs or a different API because ShopStyle Api is limited and sometimes require specific queries
- Fix up the website design
- Possible usage of a different database or restructure how the database is setup and how the queries are returned

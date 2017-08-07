# Armoire Online Closet 💃🏾
Web App that could be utilize as an online wardrobe / closet to help create a visual representation of a person's clothing collection

![armoire image](./public/splashimage.png)

## What is Armoire?

This is a work in progress full-stack application that allows for users to create accounts and search for clothing items that they can add to their online wardrobe. This could be a very useful way for fashion forward people to keep a visual collection of items that they own. In addition to filling up a closet with clothing they are able to create outfits out of clothing that they own. This was an idea that I wanted to work on for a long time, and now I look forward to recreating this project again, but instead with a framework like react and possibly a different database.

## Technical Discussion

Front-end:
- HTML, CSS, Bootstrap

Back-end:
- Node.js, Express, PostgreSQL


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

## The Making of Armoire
### Initial Landing page design
![landing page](/landingpage.png)

### Initial Outfit page design
![outfit image](/outfitpage.png)

## App Structure


## Opportunities for Future Growth


The project's name and description
Your wireframes and user stories
The technologies, APIs, and modules you used and a description of each
A code snippet of a part of the app you're particularly proud of
Any things you plan to fix or features you plan to add
Instructions for downloading the code and running it on localhost

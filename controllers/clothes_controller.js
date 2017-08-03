const Clothes = require('../models/clothes')

const clothingController = {};

clothingController.index = (req, res)=>{
    Clothes.findAll(req.user.id)
    .then((clothes)=>{
        res.render('clothes/clothes_index',{
            username: req.user.username,
            data: clothes
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
}

clothingController.create = (req, res)=>{
    Clothes.create({
        name: req.body.name,
        brand: req.body.brand,
        description: req.body.description,
        price: req.body.price,
        productId: req.body.productId,
        brandedName: req.body.brandedName,
        imageBest: req.body.imageBest,
        clothing_type: req.body.clothing_type
    },req.user.id).then(()=>{
        res.redirect('/clothes')
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
    // res.render('index', {
    //     message: `${req.params.search} search results`,
    //     data: res.locals.productData
    // })
}

module.exports = clothingController;
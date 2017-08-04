const Clothes = require('../models/clothes')
const Outfits = require('../models/outfits')

const outfitController = {};

outfitController.index = (req, res)=>{
    Outfits.findAll(req.user.id)
    .then((outfits)=>{
        res.render('clothes/outfits/outfits_all',{
            username: req.user.username,
            data: outfits
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
}

outfitController.newFit = (req, res)=>{
    Clothes.findByClothing_type('Tees','pants','Sneakers')
    .then((clothes)=>{
        res.render('clothes/outfits/outfits_add',{
            data: clothes
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
}

outfitController.show = (req, res)=>{
    Outfits.findById(req.params.id)
    .then((clothes)=>{
        res.render('clothes/outfits/outfits_single', {
            data: clothes
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
}

outfitController.create = (req, res)=>{
    Outfits.create({
        name: req.body.name,
        top_id: req.body.top_id,
        bottom_id: req.body.bottom_id,
        shoe_id: req.body.shoe_id,
        clout_points: req.body.clout_points
    },req.user.id).then(()=>{
        res.redirect('/clothes/outfits')
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
}

outfitController.update = (req, res)=>{
    Outfits.update({
        name: req.body.name,
        top_id: req.body.top_id,
        bottom_id: req.body.bottom_id,
        shoe_id: req.body.shoe_id,
        clout_points: req.body.clout_points,
    }, req.params.id).then((clothes)=>{
        res.redirect(`/clothes/outfits/${req.params.id}`)
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
}

outfitController.edit = (req, res)=>{
    Outfits.findById(req.params.id)
    .then((clothes)=>{
        res.render('clothes/outfits/outfits_edit',{
            data: clothes
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
}

outfitController.delete = (req, res) => {
    Outfits.destroy(req.params.id)
    .then(()=>{
        res.redirect('/clothes/outfits')
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
}

module.exports = outfitController;
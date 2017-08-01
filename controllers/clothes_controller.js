const clothingController = {};

clothingController.index = (req, res)=>{
    res.json({
        message: 'Index page on clothes controller'
    })
}

clothingController.sendSearch = (req, res)=>{
    res.render('index', {
        message: `${req.params.search} search results`,
        data: res.locals.productData
    })
}

module.exports = clothingController;
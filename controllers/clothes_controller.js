const clothesController = {};

clothesController.index = (req, res)=>{
    res.json({
        message: 'Index page on clothes controller'
    })
}

clothesController.sendSearch = (req, res)=>{
    res.json({
        message: `${req.params.search} search results`,
        data: res.locals.productData
    })
}

module.exports = clothesController;
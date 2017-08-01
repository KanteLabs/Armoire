const searchController = {};

searchController.index = (req, res)=>{
    res.json({
        message: 'Index page on clothes controller'
    })
}

searchController.sendSearch = (req, res)=>{
    // console.log(res.locals.productData[0].name)
    // res.json({
    //     message: `${req.params.search} search results`,
    //     data: res.locals.productData
    // });
    res.render('index', {
        message: 'ok',
        data: res.locals.productData
    })
}


module.exports = searchController;
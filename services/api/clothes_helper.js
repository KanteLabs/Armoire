require('isomorphic-fetch');
require('dotenv').config();

const appKey = process.env.app_key;

function productSearchAPI(req, res, next){
    console.log(`Searching for ${req.query.search}`);
    let search = req.query.search;
    fetch(`http://api.shopstyle.com/api/v2/products?pid=${appKey}&fts=${search}&offset=0&limit=20`)
    .then(fetchRes=>fetchRes.json())
    .then((productsRes)=>{
        console.log(productsRes.products[0].name)
        res.locals.productData = productsRes;
        next()
    }).catch(err=>{
        console.log(err)
        next()
    })
}

module.exports = {
    productSearchAPI
}
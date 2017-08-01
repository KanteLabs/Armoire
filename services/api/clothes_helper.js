require('isomorphic-fetch');
require('dotenv').config();

const appKey = process.env.app_key;

function productSearchAPI(req, res, next){
    console.log(`Searching for ${req.params.search}`);
    let search = req.params.search;
    fetch(`http://api.shopstyle.com/api/v2/products?pid=${appKey}&fts=${search}&offset=0&limit=10`)
    .then(fetchRes=>fetchRes.json())
    .then((productsRes)=>{
        console.log(productsRes)
        res.locals.productData = productsRes
        next()
    }).catch(err=>{
        console.log(err)
        next()
    })
}

module.exports = {
    productSearchAPI
}
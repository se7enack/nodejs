var restful = require('node-restful');
var mongoose = restful.mongoose;

var Product = require('../models/product');

Product.methods(['get', 'post', 'put', 'delete']);
Product.register(router, '/products');
module.exports = router;



var Product = app.product = restful.model('product', mongoose.Schema({
    item: String,
    cost: Number,
  }))
  .methods(['get', 'post', 'put', 'delete']);

Resource.register(app, '/resources');



/* 
sudo apt-get update
sudo apt-get install nodejs npm mongodb
sudo ln -s /usr/bin/nodejs /usr/bin/node
mkdir restapi
cd restapi
npm init
npm install body-parser express mongoose node-restful --save
sudo npm install -g nodemon --save 
/*


var express = require('express');
var router = express.Router();

router.get('/products', function(req, res){
	res.send('api is up');
});

module.exports = router;
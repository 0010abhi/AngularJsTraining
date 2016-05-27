var express = require('express');
var router = express.Router();

/* Rendering Templates for index */
router.route("/").get(function(req, res) {
	res.render('index',{title: "Welcome To Angular JS Training From Node Server"});
});

module.exports = router;

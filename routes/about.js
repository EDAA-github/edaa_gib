const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about',{isLogged : !!req.session.user,});
});

module.exports = router;

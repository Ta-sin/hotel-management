const express = require('express');
const mysql 	= require('mysql');
const router = express.Router();

// router.get('*',  (req, res, next)=>{
// 	if(req.cookies['email'] == null){
// 		res.redirect('/login');
// 	}else{
// 		next();
// 	}
// });

router.get('/', (req, res)=>{
  res.render('dashboard');

});


module.exports = router;

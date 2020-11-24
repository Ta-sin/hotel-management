const express = require ('express');
const router = express.Router();


router.get('/', (req, res)=>{
//  res.cookie('uname', '');
//  res.clearCookie('uname');
  res.redirect('/home');
});


module.exports = router;

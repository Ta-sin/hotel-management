const express = require('express');
const infoModel = require.main.require('./models/infoModel');
const router = express.Router();


router.get('/', (req, res)=>{

  infoModel.Rooms(function(results){
      res.render('home',{rooms: results});
  });

});


module.exports = router;

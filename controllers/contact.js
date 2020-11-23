const express = require('express');
const contactModel = require.main.require('./models/contactModel');
const router = express.Router();


router.get('/:id', (req, res) => {
    res.render('contact');
});

router.post('/:id', (req, res) => {
  var hotel = {
    roomid: req.params.id,
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    message: req.body.message
  }

  console.log(hotel);
contactModel.insert(hotel,function(status){
    if(status)
    {
      res.render('contact');
    }
})

});

module.exports = router;

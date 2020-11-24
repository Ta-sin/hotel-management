const express = require('express');
const hmessageModel = require.main.require('./models/hmessageModel');
const router = express.Router();

router.get('/', (req, res) => {
  hmessageModel.Message(function(results){
    res.render('hmessage',{message: results});
  })

});


module.exports = router;

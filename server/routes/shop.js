const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send({
      msg: 'shop route active'
    });
  });

module.exports = router;


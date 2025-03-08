const express = require('express');
const router = express.Router();

const newscontroller = require('../app/controllers/newcontroller');

router.use('/news', newscontroller.index);

module.exports = router;

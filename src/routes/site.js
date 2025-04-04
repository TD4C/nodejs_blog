const express = require('express');
const router = express.Router();

const sitecontroller = require('../app/controllers/sitecontroller');
router.use('/search', sitecontroller.search);
router.use('/', sitecontroller.index);

module.exports = router;

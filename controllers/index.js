const router = require('express').Router();
const fetch = require("node-fetch");
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const histRoutes = require('./histRoutes')


 router.use('/', homeRoutes);
 router.use('/api', apiRoutes);
 router.use('/', histRoutes);


 module.exports = router;

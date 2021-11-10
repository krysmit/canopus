const router = require('express').Router();
const fetch = require("node-fetch");
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const histRoutes = require('./histRoutes')
const weather = require('./weather');





 router.use('/', homeRoutes);
 router.use('/api', apiRoutes);
 router.use('/', weather);
 router.use('/', histRoutes);


 module.exports = router;

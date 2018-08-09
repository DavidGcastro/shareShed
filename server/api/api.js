const router = require('express').Router();


router.get('/tools', (req, res, next) => {
  router.use('/tools', require('./tools'));
  next();
});

module.exports = router;

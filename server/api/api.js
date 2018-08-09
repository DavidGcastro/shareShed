const router = require('express').Router();

router.get('/users', (req, res, next) => {
  router.use('/tools', require('./tools'));
  next();
});

module.exports = router;

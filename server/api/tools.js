const router = require('express').Router();
const { tool } = require('../db/models');

router.get('/', (req, res, next) => {
  tool
    .findAll({
      include: {
        all: true
      }
    })
    .then(products => res.json(products))
    .catch(next);
});

router.get('/:toolId', (req, res, next) => {
  let id = req.params.productId;
  tool
    .findAll({
      where: {
        id
      },
      include: [{ all: true }]
    })
    .then(product => res.json(product))
    .catch(next);
});

router.post('/', (req, res, next) => {
  tool
    .create(req.body)
    .then(newProduct => res.status(201).send(newProduct))
    .catch(next);
});

module.exports = router;

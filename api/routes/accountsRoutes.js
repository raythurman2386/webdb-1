const accountsRouter = require('express').Router();
const db = require('../../data/dbConfig');

accountsRouter
  .get('/', async (req, res, next) => {
    try {
      const accounts = db('accounts')
      res.status(200).json(accounts)
    } catch (error) {
      next(error)
    }
  })
  .get('/:id', async (req, res, next) => {
    try {

    } catch (error) {
      next(error)
    }
  })
  .post('/', async (req, res, next) => {
    try {

    } catch (error) {
      next(error)
    }
  })
  .put('/:id', async (req, res, next) => {
    try {

    } catch (error) {
      next(error)
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {

    } catch (error) {
      next(error)
    }
  })

module.exports = server => {
  server.use('/api/accounts', accountsRouter);
}

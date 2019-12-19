const accountsRouter = require('express').Router();
const db = require('../../data/dbConfig');

const getAccounts = async (req, res, next) => {
  try {
    const accounts = await db('accounts');
    return res.status(200).json(accounts);
  } catch (error) {
    next(error);
  }
}

const getAccountById = async (req, res, next) => {
  try {
    const [account] = await db('accounts').where({ id: req.params.id });
    return res.status(200).json(account);
  } catch (error) {
    next(error);
  }
}

const addAccount = async (req, res, next) => {
  try {
    const payload = {
      name: req.body.name,
      budget: req.body.budget
    }
    const id = await db('accounts').insert(payload);
    return res.status(201).json(await db('accounts').where({ id: id }));
  } catch (error) {
    next(error);
  }
}

const updateAccount = async (req, res, next) => {
  try {
    const payload = {
      name: req.body.name,
      budget: req.body.budget
    }
    const id = await db('accounts').where({ id: req.params.id }).update(payload);
    return res.status(201).json(await db('accounts').where({ id: id }));
  } catch (error) {
    next(error);
  }
}

const deleteAccount = async (req, res, next) => {
  try {
    const deleted = await db('accounts').where({ id: req.params.id }).del();
    return res.status(204).json({ message: "Account Deleted" });
  } catch (error) {
    next(error);
  }
}

accountsRouter
  .get('/', getAccounts)
  .get('/:id', getAccountById)
  .post('/', addAccount)
  .put('/:id', updateAccount)
  .delete('/:id', deleteAccount);

module.exports = accountsRouter;

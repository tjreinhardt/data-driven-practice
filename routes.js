const express = require('express');

const db = require('./db/models');
const router = express.Router();

// OPTION 1 try/catch method
// router.get('/', async (req, res, next) => {
//   try {
//     const books = await db.Book.findAll({ order: [['title', 'ASC']] });
//     res.render('book-list', { title: 'Books', books });
//   } catch (err) {
//     next(err);
//   }
// });

// OPTION 2 asyncHandler method
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

router.get('/', asyncHandler(async (req, res) => {
  const books = await db.Book.findAll({ order: [['title', 'ASC']] });
  res.render('book-list', { title: 'Books', books });
}));


// TEST ERROR vv
// router.get('/', (req, res) => {
//   throw new Error('This is a test error!');
//   res.render('index', { title: 'Home' });
// });

module.exports = router;

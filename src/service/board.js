// api의 서비스 로직이 들어갈 파일입니다.
const Board = require('../models/Board');

// Create
const postInsert = (req, res, next) => {
  return Board.create({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  })
    .then(post => res.status(201).json({ CreateSuccess: true, post }))
    .catch(next);
};

// Read

// Update

// Delete

module.exports = { postInsert }
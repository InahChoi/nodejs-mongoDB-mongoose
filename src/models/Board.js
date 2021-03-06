// Board model Schema
// Mongoose를 사용한 model의 스키마를 지정하는 파일입니다.

// Module Import
const mongoose = require('mongoose');
const db = require('../config/database');

// Mongoose Schema
const boardSchema = new mongoose.Schema({ // 1
  title: { type: String, required: true }, // 2
  content: { type: String, required: true },
  author: { type: String, required: true }, // 3
},
  {
    timestamps: true, // 4
  }
);

// Module Define
const Board = db.model('Board', boardSchema); // 5

// Module Export
module.exports = Board;
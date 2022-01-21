// mongoose import
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/')
  .then(() => console.log(`🙈Connected to mongo database!🙉`))
  .catch((e) => console.error(e, '📟Error connection to database📟'));

// mongodb가 connect된 상태를 객체에 담아 모듈로 내보내줍니다.
const db = mongoose.connection;

module.exports = db;  
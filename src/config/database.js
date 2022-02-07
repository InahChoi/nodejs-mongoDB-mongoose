// mongoose connect method를 사용하여 MongoDB를 연결합니다.
// 프로젝트 초기 단계의 백엔드에서는 localhost를 사용하고
// 프론트에게 보내줄 데이터가 필요한 시기에는 mongoDB server 아틀라스를 연결합니다.
// 우리는 mongoDB server 아틀라스로 연습하겠습니다.
// https://www.mongodb.com/
// 아틀라스 서버에서 회원가입 후 프리티어 Database를 생성하고,
// 각자 로컬의 mongoose.connect uri에 넣어주세요.
// deep하게 들어가면 로컬에 mongoDB를 깔고 shell에서 쿼리를 연습하는게 좋겠지만
// api test로도 익숙해질 수 있으니 postman을 꼭 깔아주세요.
// https://www.postman.com/

// dotenv import
require("dotenv").config();
// mongoose import
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🙈Connected to mongo database!🙉'))
  .catch((e) => console.error(e, '📟Error connection to database📟'));

// mongodb가 connect된 상태를 객체에 담아 모듈로 내보내줍니다.
const db = mongoose.connection;

module.exports = db;  
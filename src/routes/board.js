// router api별로 나누어 관리할 수 있는 파일입니다.
// 라우터 단위로 Request가 발생 시 실행 되는 미들웨어라고 보시면 됩니다.
// RESTful http 통신을 위한 GET, POST, PUT, DELETE등을 명시합니다.

const express = require('express');
const router = express.Router();
const board = require('../service/board');

// localhost:8080/board [POST] method로 접근 시 service/board로 맵핑한다는 뜻입니다.
router.route("/")
  .post(board.postInsert);

module.exports = router;
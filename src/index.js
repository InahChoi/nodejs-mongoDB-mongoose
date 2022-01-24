// express앱의 본체로 핵심적인 서버 역할을 담당하고
// 여러 미들웨어를 관리하는 파일입니다.
// node.js의 서버 entry point로, 서버 시작의 시작점입니다.

// express import
const express = require('express');

// app express 명시
const app = express();

// Express app setup
// app.use => 미들웨어를 연결하는 부분
// request 객체를 파싱하기 위한 설정값
app.use(express.urlencoded({ extended: true }));
// json 요청을 받기 위한 설정값
app.use(express.json());

// Router
// localhost:8080/ 으로 접근 시 Hello World! 출력
app.get('/', (req, res) => {
  res.send('Hello World!')
});
// "localhost:8080/board로 접근 시 routes/board로 가겠다" 라는 뜻입니다.
app.use('/board', require('./routes/board'));

app.listen(8080, () => console.log('🚀 Server Listening On Port:8080'));
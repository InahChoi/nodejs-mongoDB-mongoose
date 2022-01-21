// express import
const express = require('express');

// app express 명시
const app = express();

// Express app setup
// request 객체를 파싱하기 위한 설정값
app.use(express.urlencoded({ extended: true }));
// json 요청을 받기 위한 설정값
app.use(express.json());

// localhost:8080/ 으로 접근 시 Hello World! 출력
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(8080, () => console.log('🚀 Server Listening On Port:8080'));
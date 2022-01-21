# nodejs-mongoDB-mongoose

<br/>

## 🚀 Node.js
일단 node.js는 언어가 아닙니다. <br/>
서버 단에서도 Javascript로 개발할 수 있도록 만든 프로그램(환경)입니다. <br/>
서버 개발자가 어플리케이션을 Javascript로 개발할 수 있도록 도와주는 '런타임 환경'일 뿐입니다. <br/>
우리는 node.js 표준 javascript version인 CommonJs 스펙을 사용하여 개발하겠습니다.


<br/>

## 🚀 초기세팅
### 1️⃣ node 설치
https://nodejs.org/en/download/

<br/>

### 2️⃣ 프로젝트 폴더 내 vscode 혹은 터미널에서, npm init
`npm init -y` <br/><br/>
npm init시 package.json 파일이 생성됩니다. <br/>
<b>*package.json란?</b><br/>
node.js로 애플리케이션을 개발할 때 확장 모듈에 대한 의존성 관리에 도움을 주는 파일입니다.<br/>

<br/>

### 3️⃣ express 설치 <br/>
`npm install express` <br/>

<b>*express란?</b><br/>
node.js를 사용하여 서버를 개발하고자 하는 개발자들을 위하여<br/>
서버를 쉽게 구성할 수 있게 만든 프레임워크입니다.<br/><br/>

### 4️⃣ 서버 띄워보기 <br/>
서버 파일명은 `app.js`, `server.js`, `index.js` 등으로 많이 사용됩니다. <br/>
현재 진행 중인 프로젝트의 서버파일은 index.js이므로 index.js로 하겠습니다.

```javascript
// index.js
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

app.listen(8080, () => console.log('8080 포트에서 대기중'));
```

작성 후 `npm install nodemon` 설치해주세요. <br/>
<b>*nodemon이란?</b><br/>
프로젝트 폴더의 파일들을 모니터링 하고 있다가 파일이 수정되면 서버를 자동으로 restart 시켜주는 패키지입니다. <br/>
서버를 끄고 수정하고 다시 서버를 키는 것 보다 훨씬 간편하겠죠. <br/>
우리는 서버를 시작할 때 파일명이 아닌 'dev'로 하겠습니다. <br/>
'dev'가 아닌 다른 단어로도 가능합니다.

```javascript
// package.json
// before
{
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
}

// after
{
    "scripts": {
      "dev": "nodemon index.js"
    },
}
```
* 서버가 띄워진 모습
![image](https://user-images.githubusercontent.com/52025291/150561491-74b4ff02-139d-4f34-bb43-977c132b520e.png)
![image](https://user-images.githubusercontent.com/52025291/150561255-0040d1f3-f65c-4025-9c82-d2c54f574154.png)


<br/>

### 5️⃣ mongoDB mongoose 사용하여 연결하기

`npm install mongoose` <br/>

<b>*mongoose를 사용하는 이유</b><br/>
mongoose를 사용하는 이유는 크게 두가지입니다.<br/>
- 자유도가 높아 어떤 컬럼에 어떤 데이터를 넣어도 mongoDB에 저장이 됩니다.<br/>
이러한 경우 프로덕션에서는 위험할 수 있겠죠? mongoose는 mongoDB의 document에 값을 저장할 때 <br/>
컬럼의 값과 타입, 필드를 검사해줍니다.
- mongoDB 쿼리와 더불어 mongoose가 제공하는 쿼리빌더 또한 같이 사용할 수 있어 편리합니다. <br/><br/>

확장성과 협업, 유지보수를 위해 폴더 구조를 세분화 하여 프로젝트를 진행하는 연습이 필요합니다. <br/>
보통 node.js의 프로젝트 구조는 src/models, src/controller, src/service 등으로 나뉩니다. <br/>
```javascript
// src/config/database.js
// mongoose import
const mongoose = require('mongoose');

// mongoose mongodb에 연결
mongoose.connect('mongodb://localhost/')
  .then(() => console.log(`🙈Connected to mongo database!🙉`))
  .catch((e) => console.error(e, '📟Error connection to database📟'));

// mongodb가 connect된 상태를 객체에 담아 모듈로 내보내줍니다.
const db = mongoose.connection;

module.exports = db;
```

<br/>

### 6️⃣ mongoDB mongoose 사용하여 Schema 작성하기
<br/>

처음에는 추후 ejs 연동에 적합하고 간단한 게시판 만들기를 해보겠습니다.
```javascript
// src/models/Board.js
// Board model Schema

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
```
[1] mongoose schema를 boardSchema로 생성 <br/>
[2] title의 type은 String이고, 컬럼이 필수값이라고 명시해줍니다. <br/>
[3] author 부분은 추후 User 부분 진행 시에 '참조' 하게끔 수정합니다. <br/>
[4] 데이터가 insert될 당시의 시간값으로 createdAt과 updatedAt의 컬럼이 자동 생성됩니다. <br/>
[5] mongoDB의 모델을 boardSchema document로 생성 <br/>
<br/>

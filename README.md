# nodejs-mongoDB-mongoose

<br/>

## 🚀 Node.js
일단 node.js는 언어가 아닙니다. <br/>
서버 단에서도 Javascript로 개발할 수 있도록 만든 프로그램(환경)입니다. <br/>
서버 개발자가 어플리케이션을 Javascript로 개발할 수 있도록 도와주는 '런타임 환경'일 뿐입니다.

<br/>

## 🚀 초기세팅
### 1. 프로젝트 폴더 내 vscode 혹은 터미널에서, npm init
`npm init -y` <br/><br/>
npm init시 package.json 파일이 생성됩니다. <br/>
<b>*package.json란?</b><br/>
node.js로 애플리케이션을 개발할 때 확장 모듈에 대한 의존성 관리에 도움을 주는 파일입니다.<br/>


### 2. express 설치 <br/>
`npm install --save express` <br/>

<b>express란?</b><br/>
node.js를 사용하여 서버를 개발하고자 하는 개발자들을 위하여<br/>
서버를 쉽게 구성할 수 있게 만든 프레임워크입니다.<br/>

### 3. 서버 띄워보기 <br/>
서버 파일명은 `app.js`, `server.js`, `index.js` 등으로 많이 사용됩니다.
현재 진행 중인 프로젝트의 서버파일은 index.js이므로 index.js로 하겠습니다.
```
// index.js
// express import
const express = require('express');

// app express 명시
const app = express();

// localhost:8080/ 으로 접근 시 Hello World! 출력
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(8080, () => console.log('8080 포트에서 대기중'));
```


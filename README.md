# nodejs-mongoDB-mongoose

<br/>

## ๐ Node.js
์ผ๋จ node.js๋ ์ธ์ด๊ฐ ์๋๋๋ค. <br/>
์๋ฒ ๋จ์์๋ Javascript๋ก ๊ฐ๋ฐํ  ์ ์๋๋ก ๋ง๋  ํ๋ก๊ทธ๋จ(ํ๊ฒฝ)์๋๋ค. <br/>
์๋ฒ ๊ฐ๋ฐ์๊ฐ ์ดํ๋ฆฌ์ผ์ด์์ Javascript๋ก ๊ฐ๋ฐํ  ์ ์๋๋ก ๋์์ฃผ๋ '๋ฐํ์ ํ๊ฒฝ'์ผ ๋ฟ์๋๋ค. <br/>
์ฐ๋ฆฌ๋ node.js ํ์ค javascript version์ธ CommonJs ์คํ์ ์ฌ์ฉํ์ฌ ๊ฐ๋ฐํ๊ฒ ์ต๋๋ค.


<br/>

## ๐ ์ด๊ธฐ์ธํ
### 1๏ธโฃ node ์ค์น
https://nodejs.org/en/download/

<br/>

### 2๏ธโฃ ํ๋ก์ ํธ ํด๋ ๋ด vscode ํฐ๋ฏธ๋ ํน์ ํฐ๋ฏธ๋์์, npm init
`npm init -y` <br/><br/>
npm init์ package.json ํ์ผ์ด ์์ฑ๋ฉ๋๋ค. <br/>
<b>*package.json๋?</b><br/>
node.js๋ก ์ ํ๋ฆฌ์ผ์ด์์ ๊ฐ๋ฐํ  ๋ ํ์ฅ ๋ชจ๋์ ๋ํ ์์กด์ฑ ๊ด๋ฆฌ์ ๋์์ ์ฃผ๋ ํ์ผ์๋๋ค.<br/>

<br/>

### 3๏ธโฃ express ์ค์น <br/>
`npm install express` <br/>

<b>*express๋?</b><br/>
node.js๋ฅผ ์ฌ์ฉํ์ฌ ์๋ฒ๋ฅผ ๊ฐ๋ฐํ๊ณ ์ ํ๋ ๊ฐ๋ฐ์๋ค์ ์ํ์ฌ<br/>
์๋ฒ๋ฅผ ์ฝ๊ฒ ๊ตฌ์ฑํ  ์ ์๊ฒ ๋ง๋  ํ๋ ์์ํฌ์๋๋ค.<br/><br/>

### 4๏ธโฃ ์๋ฒ ๋์๋ณด๊ธฐ <br/>
์๋ฒ ํ์ผ๋ช์ `app.js`, `server.js`, `index.js` ๋ฑ์ผ๋ก ๋ง์ด ์ฌ์ฉ๋ฉ๋๋ค. <br/>
ํ์ฌ ์งํ ์ค์ธ ํ๋ก์ ํธ์ ์๋ฒํ์ผ์ index.js์ด๋ฏ๋ก index.js๋ก ํ๊ฒ ์ต๋๋ค.

```javascript
// index.js
// express import
const express = require('express');

// app express ๋ช์
const app = express();

// Express app setup
// request ๊ฐ์ฒด๋ฅผ ํ์ฑํ๊ธฐ ์ํ ์ค์ ๊ฐ
app.use(express.urlencoded({ extended: true }));
// json ์์ฒญ์ ๋ฐ๊ธฐ ์ํ ์ค์ ๊ฐ
app.use(express.json());

// localhost:8080/ ์ผ๋ก ์ ๊ทผ ์ Hello World! ์ถ๋ ฅ
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(8080, () => console.log('8080 ํฌํธ์์ ๋๊ธฐ์ค'));
```

์์ฑ ํ `npm install nodemon` ์ค์นํด์ฃผ์ธ์. <br/>
<b>*nodemon์ด๋?</b><br/>
ํ๋ก์ ํธ ํด๋์ ํ์ผ๋ค์ ๋ชจ๋ํฐ๋ง ํ๊ณ  ์๋ค๊ฐ ํ์ผ์ด ์์ ๋๋ฉด ์๋ฒ๋ฅผ ์๋์ผ๋ก restart ์์ผ์ฃผ๋ ํจํค์ง์๋๋ค. <br/>
์๋ฒ๋ฅผ ๋๊ณ  ์์ ํ๊ณ  ๋ค์ ์๋ฒ๋ฅผ ํค๋ ๊ฒ ๋ณด๋ค ํจ์ฌ ๊ฐํธํ๊ฒ ์ฃ . <br/>
์ฐ๋ฆฌ๋ ์๋ฒ๋ฅผ ์์ํ  ๋ ํ์ผ๋ช์ด ์๋ 'dev'๋ก ํ๊ฒ ์ต๋๋ค. <br/>
'dev'๊ฐ ์๋ ๋ค๋ฅธ ๋จ์ด๋ก๋ ๊ฐ๋ฅํฉ๋๋ค.

```javascript
// package.json
// before
{
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
}

// after
// "dev" => ์๋ฒ๋ฅผ ์์ํ  ๋ ์ฌ์ฉํ  ๋ช๋ น์ด
// "npm run dev ๋ช๋ น์ด ์ฌ์ฉ ์ src/index.js๋ฅผ ์คํํ๋ค"์ ๊ฐ์ต๋๋ค.
{
    "scripts": {
      "dev": "nodemon srxc/index.js"
    },
}
```
* ์๋ฒ๊ฐ ๋์์ง ๋ชจ์ต
![image](https://user-images.githubusercontent.com/52025291/150561491-74b4ff02-139d-4f34-bb43-977c132b520e.png)
![image](https://user-images.githubusercontent.com/52025291/150561255-0040d1f3-f65c-4025-9c82-d2c54f574154.png)


<br/>

### 5๏ธโฃ mongoDB mongoose ์ฌ์ฉํ์ฌ ์ฐ๊ฒฐํ๊ธฐ

`npm install mongoose` <br/>

<b>*mongoose๋ฅผ ์ฌ์ฉํ๋ ์ด์ </b><br/>
mongoose๋ฅผ ์ฌ์ฉํ๋ ์ด์ ๋ ํฌ๊ฒ ๋๊ฐ์ง์๋๋ค.<br/>
- ์์ ๋๊ฐ ๋์ ์ด๋ค ์ปฌ๋ผ์ ์ด๋ค ๋ฐ์ดํฐ๋ฅผ ๋ฃ์ด๋ mongoDB์ ์ ์ฅ์ด ๋ฉ๋๋ค.<br/>
์ด๋ฌํ ๊ฒฝ์ฐ ํ๋ก๋์์์๋ ์ํํ  ์ ์๊ฒ ์ฃ ? <br/>
mongoose๋ mongoDB์ document์ ๊ฐ์ ์ ์ฅํ  ๋ <br/>
์ปฌ๋ผ์ ๊ฐ๊ณผ ํ์, ํ๋๋ฅผ ๊ฒ์ฌํด์ค๋๋ค.
- mongoDB ์ฟผ๋ฆฌ์ ๋๋ถ์ด mongoose๊ฐ ์ ๊ณตํ๋ ์ฟผ๋ฆฌ๋น๋ ๋ํ ๊ฐ์ด ์ฌ์ฉํ  ์ ์์ด ํธ๋ฆฌํฉ๋๋ค. <br/><br/>

ํ์ฅ์ฑ๊ณผ ํ์, ์ ์ง๋ณด์๋ฅผ ์ํด ํด๋ ๊ตฌ์กฐ๋ฅผ ์ธ๋ถํ ํ์ฌ ํ๋ก์ ํธ๋ฅผ ์งํํ๋ ์ฐ์ต์ด ํ์ํฉ๋๋ค. <br/>
๋ณดํต node.js์ ํ๋ก์ ํธ ๊ตฌ์กฐ๋ src/models, src/controller, src/service ๋ฑ์ผ๋ก ๋๋ฉ๋๋ค. <br/>
```javascript
// src/config/database.js
// mongoose import
const mongoose = require('mongoose');

// mongoose mongodb์ ์ฐ๊ฒฐ
mongoose.connect('mongodb://localhost/')
  .then(() => console.log(`๐Connected to mongo database!๐`))
  .catch((e) => console.error(e, '๐Error connection to database๐'));

// mongodb๊ฐ connect๋ ์ํ๋ฅผ ๊ฐ์ฒด์ ๋ด์ ๋ชจ๋๋ก ๋ด๋ณด๋ด์ค๋๋ค.
const db = mongoose.connection;

module.exports = db;
```

<br/>

### 6๏ธโฃ mongoDB mongoose ์ฌ์ฉํ์ฌ Schema ์์ฑํ๊ธฐ
<br/>

์ฒ์์๋ ์ถํ ejs ์ฐ๋์ ์ ํฉํ๊ณ  ๊ฐ๋จํ ๊ฒ์ํ ๋ง๋ค๊ธฐ๋ฅผ ํด๋ณด๊ฒ ์ต๋๋ค.
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
[1] mongoose schema๋ฅผ boardSchema๋ก ์์ฑ <br/>
[2] title์ type์ String์ด๊ณ , ์ปฌ๋ผ์ด ํ์๊ฐ์ด๋ผ๊ณ  ๋ช์ํด์ค๋๋ค. <br/>
[3] author ๋ถ๋ถ์ ์ถํ User ๋ถ๋ถ ์งํ ์์ '์ฐธ์กฐ' ํ๊ฒ๋ ์์ ํฉ๋๋ค. <br/>
[4] ๋ฐ์ดํฐ๊ฐ insert๋  ๋น์์ ์๊ฐ๊ฐ์ผ๋ก createdAt๊ณผ updatedAt์ ์ปฌ๋ผ์ด ์๋ ์์ฑ๋ฉ๋๋ค. <br/>
[5] mongoDB์ ๋ชจ๋ธ์ boardSchema document๋ก ์์ฑ <br/>
<br/>

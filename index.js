'use strict';

const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static('./src/public'));

app.get('*',(request,response) => {
  response.sendFile(`${__dirname}/build/index.html`);
});

app.listen(process.env.PORT,() => {
  console.log('__SERVER_UP__',process.env.PORT);
});

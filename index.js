'use strict';

const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static('./src/public'));

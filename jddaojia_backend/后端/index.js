const express = require('express');
const path = require('path');
const apiMocker = require('mocker-api');

const app = express();
apiMocker(app, path.resolve('./mock/mock.js'))
app.listen(80);

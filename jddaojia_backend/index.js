// const express = require('express');
// const path = require('path');
// const apiMocker = require('mocker-api');

// const app = express();
// apiMocker(app, path.resolve('./mock/mock.js'))
// app.listen(81);
const Koa = require('koa')
const app = new Koa()
app.use((ctx)=>{
    ctx.body = 'hello'
})
app.listen(3000)
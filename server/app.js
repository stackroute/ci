const express = require('express');
const app = express();
const port = process.env.PORT || 9080;
var BodyParser = require('body-parser');
app.use(BodyParser());
const pipelineConfigRoute=require('./route/pipelineConfig.route')
app.use(BodyParser());
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ci');

app.use('/', pipelineConfigRoute);

app.listen(port, function() {
console.log('Express App listening on port ', port);
});